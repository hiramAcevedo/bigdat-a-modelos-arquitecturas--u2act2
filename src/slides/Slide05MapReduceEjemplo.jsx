import React, { useState } from 'react';

export default function Slide05MapReduceEjemplo() {
  const [activePhase, setActivePhase] = useState('all');

  const inputData = [
    { file: 1, data: ['Toronto, 18°C', 'Londres, 15°C', 'Tokio, 25°C'] },
    { file: 2, data: ['Toronto, 22°C', 'Londres, 27°C', 'Tokio, 30°C'] },
  ];

  const mapData = [
    { key: 'Toronto', val: '18' },
    { key: 'Londres', val: '15' },
    { key: 'Tokio', val: '25' },
    { key: 'Toronto', val: '22' },
    { key: 'Londres', val: '27' },
    { key: 'Tokio', val: '30' },
  ];

  const shuffleData = [
    { key: 'Toronto', vals: ['18', '22'] },
    { key: 'Londres', vals: ['15', '27'] },
    { key: 'Tokio', vals: ['25', '30'] },
  ];

  const reduceData = [
    { city: 'Toronto', result: '22°C' },
    { city: 'Londres', result: '27°C' },
    { city: 'Tokio', result: '30°C' },
  ];

  return (
    <div className="slide">
      <h2 className="slide-titulo">MapReduce en acción</h2>
      <p className="slide-subtitulo">Ejemplo práctico: temperatura máxima por ciudad</p>

      <div style={{ marginBottom: '30px' }}>
        <style>{`
          .phase-btn {
            padding: 8px 16px;
            margin-right: 10px;
            border: 2px solid #00d4ff;
            background: transparent;
            color: #00d4ff;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.3s ease;
          }
          .phase-btn:hover {
            background: #00d4ff;
            color: #0a1628;
          }
          .phase-btn.active {
            background: #00d4ff;
            color: #0a1628;
          }
        `}</style>
        <button
          className={`phase-btn ${activePhase === 'all' ? 'active' : ''}`}
          onClick={() => setActivePhase('all')}
        >
          Ver todas las fases
        </button>
        <button
          className={`phase-btn ${activePhase === 'entrada' ? 'active' : ''}`}
          onClick={() => setActivePhase('entrada')}
        >
          Entrada
        </button>
        <button
          className={`phase-btn ${activePhase === 'map' ? 'active' : ''}`}
          onClick={() => setActivePhase('map')}
        >
          Map
        </button>
        <button
          className={`phase-btn ${activePhase === 'reduce' ? 'active' : ''}`}
          onClick={() => setActivePhase('reduce')}
        >
          Reduce
        </button>
      </div>

      {/* Display phases */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
        {/* INPUT PHASE */}
        {(activePhase === 'all' || activePhase === 'entrada') && (
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#00d4ff', marginBottom: '15px', textAlign: 'center' }}>
              ENTRADA
            </h4>
            {inputData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#1a2a3a',
                  border: '1px solid #00d4ff',
                  borderRadius: '4px',
                  padding: '12px',
                  marginBottom: '12px',
                  fontSize: '0.85rem',
                }}
              >
                <div style={{ color: '#00d4ff', fontWeight: '600', marginBottom: '8px' }}>
                  Archivo {item.file}
                </div>
                {item.data.map((line, i) => (
                  <div key={i} style={{ color: '#fff', margin: '4px 0' }}>
                    {line}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* MAP PHASE */}
        {(activePhase === 'all' || activePhase === 'map') && (
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#ff6b35', marginBottom: '15px', textAlign: 'center' }}>
              MAP
            </h4>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '10px', fontStyle: 'italic' }}>
                Pares clave-valor:
              </div>
              {mapData.map((pair, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#1a2a3a',
                    border: '1px solid #ff6b35',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    marginBottom: '6px',
                    fontSize: '0.85rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ color: '#ff6b35', fontWeight: '600' }}>{pair.key}</span>
                  <span style={{ color: '#fff' }}>→ {pair.val}</span>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '10px', fontStyle: 'italic' }}>
                Después de Shuffle (agrupado):
              </div>
              {shuffleData.map((group, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#1a2a3a',
                    border: '1px solid #ff6b35',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    marginBottom: '6px',
                    fontSize: '0.85rem',
                  }}
                >
                  <div style={{ color: '#ff6b35', fontWeight: '600' }}>{group.key}</div>
                  <div style={{ color: '#aaa', marginTop: '4px' }}>
                    → [{group.vals.join(', ')}]
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REDUCE PHASE */}
        {(activePhase === 'all' || activePhase === 'reduce') && (
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#00d4ff', marginBottom: '15px', textAlign: 'center' }}>
              REDUCE
            </h4>
            {reduceData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#1a2a3a',
                  border: '1px solid #00d4ff',
                  borderRadius: '4px',
                  padding: '12px',
                  marginBottom: '12px',
                }}
              >
                <div style={{ color: '#00d4ff', fontWeight: '600', marginBottom: '6px' }}>
                  {item.city}
                </div>
                <div style={{ color: '#fff', fontSize: '0.9rem' }}>
                  → max(...) = <strong>{item.result}</strong>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Citation */}
      <div className="cita" style={{ marginTop: '30px' }}>
        MapReduce permite fragmentar terabytes de datos en tareas pequeñas ejecutadas en paralelo. Lo que un solo procesador tardaría horas en resolver, un cluster de nodos lo completa en minutos (Holdsworth y Kosinski, 2024).
      </div>
    </div>
  );
}
