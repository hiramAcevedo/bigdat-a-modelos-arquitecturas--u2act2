import { useState, useEffect, useCallback, useRef } from 'react'
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
import MusicPlayer                  from './MusicPlayer'
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

const SLIDE5_INDEX = 4
const SLIDE11_INDEX = 10
const SLIDE12_INDEX = 11
const SLIDE11_TABS = ['caracteristicas', 'ventajas', 'desventajas']
const SLIDE12_CARDS = ['lakehouse', 'mesh', 'fabric']

export default function App() {
  const [current,  setCurrent]  = useState(0)
  const [animKey,  setAnimKey]  = useState(0)
  const [navOpen,  setNavOpen]  = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [cameFromIndex, setCameFromIndex] = useState(null)
  const [slide5Step, setSlide5Step] = useState(0)
  const [slide11Tab, setSlide11Tab] = useState(SLIDE11_TABS[0])
  const [slide12Card, setSlide12Card] = useState(null)
  const [isMobileLayout, setIsMobileLayout] = useState(false)
  const slideAreaRef = useRef(null)
  const slide5Interactive = !isMobileLayout

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1024px)')
    const syncMobileLayout = () => setIsMobileLayout(media.matches)
    syncMobileLayout()
    media.addEventListener('change', syncMobileLayout)
    return () => media.removeEventListener('change', syncMobileLayout)
  }, [])

  const goTo = useCallback((index) => {
    if (index === current || index < 0 || index >= SLIDES.length) return
    if (index === SLIDE5_INDEX) {
      setSlide5Step(slide5Interactive ? (current < SLIDE5_INDEX ? 0 : 2) : 2)
    }
    if (index === SLIDE11_INDEX) {
      setSlide11Tab(SLIDE11_TABS[0])
    }
    if (index === SLIDE12_INDEX) {
      setSlide12Card(null)
    }
    setCameFromIndex(current)
    setCurrent(index)
    setAnimKey(k => k + 1)
    setNavOpen(false)
    setHelpOpen(false)
  }, [current, slide5Interactive])

  const goForward = useCallback(() => {
    if (current === SLIDE5_INDEX && slide5Interactive && slide5Step < 2) {
      setSlide5Step(s => s + 1)
      return
    }
    if (current === SLIDE11_INDEX) {
      const tabIndex = SLIDE11_TABS.indexOf(slide11Tab)
      if (tabIndex < SLIDE11_TABS.length - 1) {
        setSlide11Tab(SLIDE11_TABS[tabIndex + 1])
        return
      }
    }
    if (current === SLIDE12_INDEX) {
      if (slide12Card === null) {
        setSlide12Card(SLIDE12_CARDS[0])
        return
      }
      const cardIndex = SLIDE12_CARDS.indexOf(slide12Card)
      if (cardIndex < SLIDE12_CARDS.length - 1) {
        setSlide12Card(SLIDE12_CARDS[cardIndex + 1])
        return
      }
    }
    goTo(current + 1)
  }, [current, slide5Interactive, slide5Step, slide11Tab, slide12Card, goTo])

  const goBackward = useCallback(() => {
    if (current === SLIDE5_INDEX && slide5Interactive && slide5Step > 0) {
      setSlide5Step(s => s - 1)
      return
    }
    if (current === SLIDE11_INDEX) {
      const tabIndex = SLIDE11_TABS.indexOf(slide11Tab)
      if (tabIndex > 0) {
        setSlide11Tab(SLIDE11_TABS[tabIndex - 1])
        return
      }
    }
    if (current === SLIDE12_INDEX) {
      if (slide12Card === null) {
        goTo(current - 1)
        return
      }
      const cardIndex = SLIDE12_CARDS.indexOf(slide12Card)
      if (cardIndex > 0) {
        setSlide12Card(SLIDE12_CARDS[cardIndex - 1])
        return
      }
      setSlide12Card(null)
      return
    }
    goTo(current - 1)
  }, [current, slide5Interactive, slide5Step, slide11Tab, slide12Card, goTo])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setNavOpen(false)
        setHelpOpen(false)
        return
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goForward()
        return
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goBackward()
        return
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goForward, goBackward])

  useEffect(() => {
    const area = slideAreaRef.current
    if (!area) return

    const slideEl = area.querySelector('.slide')
    if (!slideEl) return

    const FADE_THRESHOLD = 120
    let rafId = null

    const updateFade = () => {
      rafId = null
      const maxScroll = Math.max(0, slideEl.scrollHeight - slideEl.clientHeight)
      if (maxScroll <= 1) {
        slideEl.style.setProperty('--slide-fade-progress', '0')
        return
      }

      const remaining = Math.max(0, maxScroll - slideEl.scrollTop)
      const progress = Math.min(1, remaining / FADE_THRESHOLD)
      slideEl.style.setProperty('--slide-fade-progress', progress.toFixed(3))
    }

    const onScroll = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(updateFade)
    }

    updateFade()
    slideEl.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateFade)

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId)
      slideEl.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateFade)
      slideEl.style.removeProperty('--slide-fade-progress')
    }
  }, [current, animKey, slide5Step, navOpen, slide11Tab, slide12Card])

  useEffect(() => {
    const area = slideAreaRef.current
    if (!area) return

    const slideEl = area.querySelector('.slide--slide11')
    const tabsEl = slideEl?.querySelector('.slide11-tabs')
    if (!slideEl || !tabsEl) return

    let fadeDistance = 1
    let rafId = null

    const getDistanceToSticky = () => {
      const slideRect = slideEl.getBoundingClientRect()
      const tabsRect = tabsEl.getBoundingClientRect()
      const stickyTop = Number.parseFloat(window.getComputedStyle(tabsEl).top) || 0
      const stickyAnchor = slideRect.top + stickyTop
      return tabsRect.top - stickyAnchor
    }

    const recomputeFadeDistance = () => {
      const distanceToSticky = getDistanceToSticky()
      fadeDistance = Math.max(1, slideEl.scrollTop + distanceToSticky)
    }

    const updateStickyFade = () => {
      rafId = null
      const distanceToSticky = getDistanceToSticky()
      const progress = Math.max(0, Math.min(1, 1 - distanceToSticky / fadeDistance))
      tabsEl.style.setProperty('--slide11-sticky-progress', progress.toFixed(3))
    }

    const onScroll = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(updateStickyFade)
    }

    const onResize = () => {
      recomputeFadeDistance()
      updateStickyFade()
    }

    recomputeFadeDistance()
    updateStickyFade()
    slideEl.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId)
      slideEl.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      tabsEl.style.removeProperty('--slide11-sticky-progress')
    }
  }, [current, animKey, slide5Step, navOpen, slide11Tab])

  const SlideComp = SLIDES[current].component
  const progress  = ((current + 1) / SLIDES.length) * 100

  return (
    <div className="app">
      {/* Botón hamburguesa */}
      <button
        className={`nav-toggle ${navOpen ? 'open' : ''}`}
        onClick={() => {
          setHelpOpen(false)
          setNavOpen(v => !v)
        }}
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

      {/* Overlay que cierra ayuda al hacer clic/tap fuera */}
      {helpOpen && !navOpen && (
        <button
          type="button"
          className="nav-help-backdrop"
          onClick={() => setHelpOpen(false)}
          aria-label="Cerrar ayuda"
        />
      )}

      {/* Ayuda rápida de navegación */}
      {!navOpen && (
        <div className={`nav-help ${helpOpen ? 'open' : ''}`}>
          <button
            className="nav-help-toggle"
            onClick={() => setHelpOpen(v => !v)}
            aria-label="Abrir ayuda de navegación"
            aria-expanded={helpOpen}
          >
            ?
          </button>

          {helpOpen && (
            <div className="nav-help-card" role="dialog" aria-label="Ayuda de navegación">
              <div className="nav-help-title">Cómo desplazarte</div>
              <p><strong>Desktop:</strong> flechas del teclado, botones inferiores o menú lateral.</p>
              <p><strong>Celular:</strong> toca el borde izquierdo/derecho para cambiar de slide. El scroll horizontal queda solo dentro de tablas o diagramas.</p>
            </div>
          )}
        </div>
      )}

      {/* Área del slide */}
      <main
        key={animKey}
        ref={slideAreaRef}
        className={`slide-area enter${current === 13 && cameFromIndex === 14 ? ' slide-area--from-dark' : ''}`}
      >
        <button
          className="edge-nav edge-nav--left"
          onClick={goBackward}
          disabled={current === 0 || navOpen}
          aria-label="Diapositiva anterior"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <button
          className="edge-nav edge-nav--right"
          onClick={goForward}
          disabled={current === SLIDES.length - 1 || navOpen}
          aria-label="Siguiente diapositiva"
        >
          <span aria-hidden="true">›</span>
        </button>

        <SlideComp
          slideIndex={current}
          slide5Step={slide5Step}
          setSlide5Step={setSlide5Step}
          slide5Interactive={slide5Interactive}
          activeSlide11Tab={slide11Tab}
          setActiveSlide11Tab={setSlide11Tab}
          activeSlide12Card={slide12Card}
          setActiveSlide12Card={setSlide12Card}
        />
      </main>

      {/* Reproductor de música */}
      <MusicPlayer />

      {/* Barra inferior */}
      <footer className="nav-footer">
        <button className="nav-btn" onClick={goBackward} disabled={current === 0} aria-label="Anterior">&#8592;</button>
        <div className="progress-bar-wrap">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <span className="progress-label">{current + 1} / {SLIDES.length}</span>
        </div>
        <button className="nav-btn" onClick={goForward} disabled={current === SLIDES.length - 1} aria-label="Siguiente">&#8594;</button>
      </footer>
    </div>
  )
}
