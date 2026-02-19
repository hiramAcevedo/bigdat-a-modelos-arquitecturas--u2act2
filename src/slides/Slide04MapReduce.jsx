import React, { useState } from 'react';

const STEPS = [
  { label: 'Input',   desc: 'Datos de entrada divididos en bloques independientes',    bg: '#EDD9A3', text: '#5a3a1a', border: 'rgba(250,129,18,0.45)' },
  { label: 'Split',   desc: 'Bloques distribuidos a nodos del clúster en paralelo',   bg: '#e0c070', text: '#5a3a1a', border: 'rgba(250,129,18,0.5)'  },
  { label: 'Map',     desc: 'Cada nodo transforma datos en pares clave-valor',         bg: '#FA8112', text: '#FAF3E1', border: 'transparent'           },
  { label: 'Shuffle', desc: 'Pares agrupados y ordenados por clave entre nodos',       bg: '#c96d0e', text: '#FAF3E1', border: 'transparent'           },
  { label: 'Reduce',  desc: 'Valores de cada clave se consolidan en un resultado',     bg: '#8a4a1a', text: '#FAF3E1', border: 'transparent'           },
  { label: 'Output',  desc: 'Resultado final almacenado en HDFS o sistema destino',    bg: '#5a3a1a', text: '#FAF3E1', border: 'transparent'           },
];

export default function Slide04MapReduce() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="slide">
      <h2 className="slide-titulo">MapReduce: el modelo que lo cambió todo</h2>
      <p className="slide-subtitulo">Modelo de procesamiento distribuido</p>

      <p className="p-slide" style={{ marginBottom: '0.6rem' }}>
        MapReduce, propuesto por Dean y Ghemawat en Google (2004), procesa grandes volúmenes
        de datos distribuyendo el trabajo entre múltiples máquinas. Dos operaciones centrales:
        <strong> Map</strong> (transforma cada dato en un par clave-valor) y{' '}
        <strong>Reduce</strong> (consolida todos los valores con la misma clave). Esto permite
        ejecutar millones de operaciones en paralelo sobre cientos de nodos.
      </p>

      <div className="slide04-flow">
        {STEPS.map((step, idx) => (
          <React.Fragment key={idx}>
            <div
              className="slide04-step"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="slide04-box"
                style={{
                  background: step.bg,
                  color: step.text,
                  borderColor: step.border || step.bg,
                  transform: hovered === idx ? 'scale(1.018)' : 'scale(1)',
                  boxShadow: hovered === idx
                    ? '0 8px 20px rgba(90,58,26,0.25)'
                    : '0 2px 6px rgba(90,58,26,0.12)',
                }}
              >
                {step.label}
              </div>

              <div
                className="slide04-desc"
                style={hovered === idx ? { color: '#5a3a1a', fontWeight: '600' } : undefined}
              >
                {step.desc}
              </div>
            </div>

            {idx < STEPS.length - 1 && <div className="slide04-arrow">↓</div>}
          </React.Fragment>
        ))}
      </div>

      <div className="apa" style={{ marginTop: '1rem' }}>
        Dean y Ghemawat (2004); Holdsworth y Kosinski (2024)
      </div>
    </div>
  );
}
