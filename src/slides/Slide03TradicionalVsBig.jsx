import React, { useState } from 'react';

export default function Slide03TradicionalVsBig() {
  const [hoveredCol, setHoveredCol] = useState(null);

  return (
    <div className="slide">
      <h2 className="slide-titulo">El quiebre tecnológico</h2>
      <p className="slide-subtitulo">De lo vertical a lo horizontal</p>

      <style>{`
        .split-tradicional:hover {
          border-left-color: #ff8855 !important;
          box-shadow: inset 4px 0 0 #ff6b35;
        }
        .split-distribuido:hover {
          border-left-color: #00e5ff !important;
          box-shadow: inset 4px 0 0 #00d4ff;
        }
      `}</style>

      <div className="split">
        {/* Left column - Traditional */}
        <div
          className="split-col split-tradicional"
          style={{
            borderLeft: '4px solid #ff6b35',
            paddingLeft: '30px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={() => setHoveredCol('trad')}
          onMouseLeave={() => setHoveredCol(null)}
        >
          <h3 className="split-titulo">Procesamiento tradicional</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ff6b35',
                }}
              />
              Un servidor potente concentra toda la carga.
            </li>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ff6b35',
                }}
              />
              Escalamiento vertical: más RAM o más CPU al mismo equipo.
            </li>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ff6b35',
                }}
              />
              Costo elevado en hardware especializado.
            </li>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ff6b35',
                }}
              />
              Límite físico de capacidad: cuando el servidor se llena, no hay más.
            </li>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ff6b35',
                }}
              />
              Respuesta lenta ante volúmenes masivos.
            </li>
          </ul>
        </div>

        {/* Right column - Distributed */}
        <div
          className="split-col split-distribuido"
          style={{
            borderLeft: '4px solid #00d4ff',
            paddingLeft: '30px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={() => setHoveredCol('dist')}
          onMouseLeave={() => setHoveredCol(null)}
        >
          <h3 className="split-titulo">Procesamiento distribuido (Big Data)</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#00d4ff',
                }}
              />
              El trabajo se reparte entre cientos de máquinas comunes.
            </li>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#00d4ff',
                }}
              />
              Escalamiento horizontal: agregar nodos al cluster sin límite práctico.
            </li>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#00d4ff',
                }}
              />
              Hardware comercial de bajo costo (commodity hardware).
            </li>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#00d4ff',
                }}
              />
              Tolerancia a fallos integrada: si un nodo falla, los datos siguen disponibles.
            </li>
            <li style={{ margin: '12px 0', paddingLeft: '20px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#00d4ff',
                }}
              />
              Procesamiento en paralelo para volúmenes de terabytes a petabytes.
            </li>
          </ul>
        </div>
      </div>

      <div className="highlight-box" style={{ marginTop: '40px' }}>
        <p style={{ margin: 0 }}>
          <strong>El cambio de paradigma no fue solo técnico:</strong> redefinió por completo cómo las organizaciones piensan sobre sus datos. Ya no se trataba de comprar un servidor más grande, sino de distribuir la carga entre muchas máquinas que trabajan en paralelo (Minelli et al., 2013).
        </p>
      </div>
    </div>
  );
}
