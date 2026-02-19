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

      {/* Diagrama de flujo: padding para que el hover (translateY) no se recorte */}
      <div className="flujo-wrap" style={{ marginTop: '1.2rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0',
          minWidth: 'max-content',
        }}>
          {STEPS.map((step, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start' }}>

              {/* Nodo */}
              <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', width: '110px' }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{
                  width: '90px',
                  padding: '0.55rem 0.4rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  background: step.bg,
                  color: step.text,
                  fontWeight: '700',
                  fontSize: '0.78rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  border: `2px solid ${step.border || step.bg}`,
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  transform: hovered === idx ? 'translateY(-4px)' : 'none',
                  boxShadow: hovered === idx
                    ? '0 8px 20px rgba(90,58,26,0.25)'
                    : '0 2px 6px rgba(90,58,26,0.12)',
                }}>
                  {step.label}
                </div>

                <div style={{
                  fontSize: '0.64rem',
                  color: '#8a6a4a',
                  textAlign: 'center',
                  lineHeight: '1.35',
                  maxWidth: '100px',
                  minHeight: '2.5rem',
                  transition: 'color 0.2s',
                  ...(hovered === idx ? { color: '#5a3a1a', fontWeight: '600' } : {}),
                }}>
                  {step.desc}
                </div>
              </div>

              {/* Flecha */}
              {idx < STEPS.length - 1 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '32px',
                  margin: '0 2px',
                  marginTop: '4px',
                }}>
                  <div style={{
                    width: '22px',
                    height: '2px',
                    background: '#FA8112',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      right: '-1px',
                      top: '-4px',
                      width: 0,
                      height: 0,
                      borderLeft: '7px solid #FA8112',
                      borderTop: '5px solid transparent',
                      borderBottom: '5px solid transparent',
                    }} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="apa" style={{ marginTop: '1rem' }}>
        Dean y Ghemawat (2004); Holdsworth y Kosinski (2024)
      </div>
    </div>
  );
}
