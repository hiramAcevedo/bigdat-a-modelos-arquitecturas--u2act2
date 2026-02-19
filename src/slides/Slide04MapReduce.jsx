import React, { useState } from 'react';

export default function Slide04MapReduce() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    { label: 'Input', desc: 'Datos de entrada divididos en bloques', color: '#1a3a5c' },
    { label: 'Split', desc: 'Bloques distribuidos a nodos del cluster', color: '#0f3d4a' },
    { label: 'Map', desc: 'Cada nodo transforma en pares clave-valor', color: '#005a6e' },
    { label: 'Shuffle', desc: 'Pares agrupados por clave entre nodos', color: '#7a2e00' },
    { label: 'Reduce', desc: 'Valores de cada clave se consolidan', color: '#cc5500' },
    { label: 'Output', desc: 'Resultado final almacenado en HDFS', color: '#1a3a5c' },
  ];

  return (
    <div className="slide">
      <h2 className="slide-titulo">MapReduce: el modelo que lo cambió todo</h2>
      <p className="slide-subtitulo">Modelo de procesamiento</p>

      <p className="p-slide">
        MapReduce es un modelo de programación propuesto por Jeffrey Dean y Sanjay Ghemawat en Google (2004), diseñado para procesar grandes volúmenes de datos distribuyendo el trabajo entre múltiples máquinas. Su nombre describe con precisión las dos operaciones centrales del proceso: Map (transformar cada dato en un par clave-valor) y Reduce (consolidar todos los valores con la misma clave en un resultado final).
      </p>

      <p className="p-slide">
        La fase Map toma los datos de entrada y los convierte en pares clave-valor independientes. La fase Shuffle y Sort agrupa todos los valores con la misma clave y los ordena. Finalmente, la fase Reduce procesa cada grupo y produce el resultado. Este modelo permite distribuir millones de operaciones entre cientos de nodos, ejecutándose en paralelo (Dean y Ghemawat, 2004).
      </p>

      {/* Flow diagram */}
      <div className="flujo" style={{ marginTop: '40px' }}>
        <style>{`
          .flujo-paso-item {
            position: relative;
            flex: 1;
            min-width: 120px;
            transition: transform 0.3s ease;
          }
          .flujo-paso-item:hover {
            transform: translateY(-5px);
          }
          .flujo-caja {
            border-radius: 6px;
            padding: 16px;
            text-align: center;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }
          .flujo-caja:hover {
            border-color: #fff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          }
          .flujo-flecha {
            position: absolute;
            top: 50%;
            right: -24px;
            width: 20px;
            height: 2px;
            background: #00d4ff;
            transform: translateY(-50%);
          }
          .flujo-flecha::after {
            content: '';
            position: absolute;
            right: -6px;
            top: -4px;
            width: 0;
            height: 0;
            border-left: 8px solid #00d4ff;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
          }
          .flujo-desc-tooltip {
            position: absolute;
            bottom: -45px;
            left: 50%;
            transform: translateX(-50%);
            background: #1a2a3a;
            border: 1px solid #00d4ff;
            border-radius: 4px;
            padding: 8px 12px;
            font-size: 0.75rem;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 10;
          }
          .flujo-paso-item:hover .flujo-desc-tooltip {
            opacity: 1;
          }
        `}</style>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', justifyContent: 'space-between', paddingBottom: '60px' }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flujo-paso-item"
              onMouseEnter={() => setHoveredStep(idx)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="flujo-caja" style={{ background: step.color }}>
                {step.label}
              </div>
              {idx < steps.length - 1 && <div className="flujo-flecha" />}
              <div className="flujo-desc-tooltip">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="apa" style={{ marginTop: '30px' }}>
        Dean y Ghemawat (2004); Holdsworth y Kosinski (2024)
      </div>
    </div>
  );
}
