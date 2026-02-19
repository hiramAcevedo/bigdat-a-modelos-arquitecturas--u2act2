import { useState, useEffect, useCallback } from 'react'
import Slide01Portada               from './slides/Slide01Portada'
import Slide02Intro                 from './slides/Slide02Intro'
import Slide03TradicionalVsBig      from './slides/Slide03TradicionalVsBig'
import Slide04MapReduce             from './slides/Slide04MapReduce'
import Slide05MapReduceEjemplo      from './slides/Slide05MapReduceEjemplo'
import Slide06Hadoop                from './slides/Slide06Hadoop'
import Slide07PilaresHadoop         from './slides/Slide07PilaresHadoop'
import Slide08EcosistemaApache      from './slides/Slide08EcosistemaApache'
import Slide09Spark                 from './slides/Slide09Spark'
import Slide10TransicionArq         from './slides/Slide10TransicionArq'
import Slide11DWvsDL                from './slides/Slide11DWvsDL'
import Slide12LakehouseMeshFabric   from './slides/Slide12LakehouseMeshFabric'
import Slide13ModelosAlmacen        from './slides/Slide13ModelosAlmacen'
import Slide14LambdaKappa           from './slides/Slide14LambdaKappa'
import Slide15Conclusion            from './slides/Slide15Conclusion'
import Slide16Referencias           from './slides/Slide16Referencias'
import './App.css'

const SLIDES = [
  { component: Slide01Portada,             titulo: 'Portada'                    },
  { component: Slide02Intro,               titulo: 'Introducción'               },
  { component: Slide03TradicionalVsBig,    titulo: 'Tradicional vs Big Data'    },
  { component: Slide04MapReduce,           titulo: 'MapReduce: el modelo'       },
  { component: Slide05MapReduceEjemplo,    titulo: 'MapReduce en acción'        },
  { component: Slide06Hadoop,              titulo: 'Hadoop'                     },
  { component: Slide07PilaresHadoop,       titulo: 'Pilares de Hadoop'          },
  { component: Slide08EcosistemaApache,    titulo: 'Ecosistema Apache'          },
  { component: Slide09Spark,              titulo: 'Apache Spark'               },
  { component: Slide10TransicionArq,       titulo: 'Arquitecturas de datos'     },
  { component: Slide11DWvsDL,             titulo: 'Data Warehouse vs Data Lake' },
  { component: Slide12LakehouseMeshFabric, titulo: 'Lakehouse · Mesh · Fabric' },
  { component: Slide13ModelosAlmacen,      titulo: 'Inmon · Kimball · Data Vault'},
  { component: Slide14LambdaKappa,         titulo: 'Lambda y Kappa'             },
  { component: Slide15Conclusion,          titulo: 'Conclusión'                 },
  { component: Slide16Referencias,         titulo: 'Referencias'                },
]

export default function App() {
  const [current,  setCurrent]  = useState(0)
  const [animKey,  setAnimKey]  = useState(0)
  const [navOpen,  setNavOpen]  = useState(false)

  const goTo = useCallback((index) => {
    if (index === current || index < 0 || index >= SLIDES.length) return
    setCurrent(index)
    setAnimKey(k => k + 1)
    setNavOpen(false)
  }, [current])

  const goNext = useCallback(() => goTo(current + 1), [goTo, current])
  const goPrev = useCallback(() => goTo(current - 1), [goTo, current])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  goNext()
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')    goPrev()
      if (e.key === 'Escape')                                setNavOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  const SlideComp = SLIDES[current].component
  const progress  = ((current + 1) / SLIDES.length) * 100

  return (
    <div className="app">
      {/* Botón hamburguesa */}
      <button
        className={`nav-toggle ${navOpen ? 'open' : ''}`}
        onClick={() => setNavOpen(v => !v)}
        aria-label="Menú de navegación"
      >
        <span /><span /><span />
      </button>

      {/* Sidebar */}
      <nav className={`sidebar-nav ${navOpen ? 'visible' : ''}`}>
        <div className="nav-header">Contenido</div>
        {SLIDES.map((s, i) => (
          <button
            key={i}
            className={`nav-item ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
          >
            <span className="nav-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="nav-label">{s.titulo}</span>
          </button>
        ))}
      </nav>

      {/* Overlay que cierra el nav al hacer clic fuera */}
      {navOpen && (
        <div
          style={{ position:'fixed', inset:0, zIndex:140 }}
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* Área del slide */}
      <main key={animKey} className="slide-area enter">
        <SlideComp />
      </main>

      {/* Barra inferior */}
      <footer className="nav-footer">
        <button className="nav-btn" onClick={goPrev} disabled={current === 0} aria-label="Anterior">&#8592;</button>
        <div className="progress-bar-wrap">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <span className="progress-label">{current + 1} / {SLIDES.length}</span>
        </div>
        <button className="nav-btn" onClick={goNext} disabled={current === SLIDES.length - 1} aria-label="Siguiente">&#8594;</button>
      </footer>
    </div>
  )
}
