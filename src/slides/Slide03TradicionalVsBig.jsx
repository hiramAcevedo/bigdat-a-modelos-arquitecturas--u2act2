import React, { useState } from 'react';

const DOT_TRAD = '#8a4a1a';
const DOT_DIST = '#FA8112';

export default function Slide03TradicionalVsBig() {
  const [hoveredCol, setHoveredCol] = useState(null);

  const renderBullets = (items, color) =>
    items.map((text, i) => (
      <li key={i} style={{ margin: '11px 0', paddingLeft: '20px', position: 'relative', color: '#5a4a3a', fontSize: '0.9rem', lineHeight: '1.5' }}>
        <span style={{ position: 'absolute', left: 0, top: '6px', width: '8px', height: '8px', borderRadius: '50%', background: color }} />
        {text}
      </li>
    ));

  const tradItems = [
    'Un servidor potente concentra toda la carga.',
    'Escalamiento vertical: más RAM o más CPU al mismo equipo.',
    'Costo elevado en hardware especializado.',
    'Límite físico de capacidad: cuando el servidor se llena, no hay más.',
    'Respuesta lenta ante volúmenes masivos.',
  ];

  const distItems = [
    'El trabajo se reparte entre cientos de máquinas comunes.',
    'Escalamiento horizontal: agregar nodos al clúster sin límite práctico.',
    'Hardware comercial de bajo costo (commodity hardware).',
    'Tolerancia a fallos integrada: si un nodo falla, los datos siguen disponibles.',
    'Procesamiento en paralelo para volúmenes de terabytes a petabytes.',
  ];

  return (
    <div className="slide">
      <h2 className="slide-titulo">El quiebre tecnológico</h2>
      <p className="slide-subtitulo">De lo vertical a lo horizontal</p>

      <div className="split">
        <div
          className="split-col"
          style={{
            borderLeft: `4px solid ${hoveredCol === 'trad' ? '#5a3a1a' : DOT_TRAD}`,
            paddingLeft: '28px', cursor: 'pointer', transition: 'border-color 0.25s, box-shadow 0.25s',
            boxShadow: hoveredCol === 'trad' ? `inset 4px 0 0 ${DOT_TRAD}` : 'none',
          }}
          onMouseEnter={() => setHoveredCol('trad')}
          onMouseLeave={() => setHoveredCol(null)}
        >
          <h3 className="split-titulo" style={{ color: DOT_TRAD }}>Procesamiento tradicional</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{renderBullets(tradItems, DOT_TRAD)}</ul>
        </div>

        <div
          className="split-col"
          style={{
            borderLeft: `4px solid ${hoveredCol === 'dist' ? '#c96d0e' : DOT_DIST}`,
            paddingLeft: '28px', cursor: 'pointer', transition: 'border-color 0.25s, box-shadow 0.25s',
            boxShadow: hoveredCol === 'dist' ? `inset 4px 0 0 ${DOT_DIST}` : 'none',
          }}
          onMouseEnter={() => setHoveredCol('dist')}
          onMouseLeave={() => setHoveredCol(null)}
        >
          <h3 className="split-titulo" style={{ color: DOT_DIST }}>Procesamiento distribuido (Big Data)</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{renderBullets(distItems, DOT_DIST)}</ul>
        </div>
      </div>

      <div className="highlight-box" style={{ marginTop: '1.4rem' }}>
        <strong>El cambio de paradigma no fue solo técnico:</strong> redefinió cómo las organizaciones
        piensan sobre sus datos. Ya no se trataba de comprar un servidor más grande, sino de
        distribuir la carga entre muchas máquinas que trabajan en paralelo (Minelli et al., 2013).
      </div>
    </div>
  );
}
