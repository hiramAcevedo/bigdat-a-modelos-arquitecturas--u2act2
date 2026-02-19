import React, { useState } from 'react';

const baseCard = { borderRadius: '6px', marginBottom: '6px', fontSize: '0.82rem' };
const CARD_ENTRADA = {
  ...baseCard,
  background:   '#e8f0e8',
  padding:      '6px 10px',
  borderLeft:   '3px solid #2d7a4f',
  border:       '1px solid rgba(45,122,79,0.35)',
};
const CARD_MAP = {
  ...baseCard,
  background:   '#F5E7C6',
  padding:      '6px 10px',
  borderLeft:   '3px solid #FA8112',
  border:       '1px solid rgba(250,129,18,0.35)',
};
const CARD_REDUCE = {
  ...baseCard,
  background:   '#ede0d4',
  padding:      '6px 10px',
  borderLeft:   '3px solid #8a4a1a',
  border:       '1px solid rgba(138,74,26,0.4)',
};

export default function Slide05MapReduceEjemplo() {
  const [activePhase, setActivePhase] = useState('all');

  const inputData = [
    { file: 1, data: ['Toronto, 18 °C', 'Londres, 15 °C', 'Tokio, 25 °C'] },
    { file: 2, data: ['Toronto, 22 °C', 'Londres, 27 °C', 'Tokio, 30 °C'] },
  ];

  const mapData = [
    { key: 'Toronto', val: '18' },
    { key: 'Londres', val: '15' },
    { key: 'Tokio',   val: '25' },
    { key: 'Toronto', val: '22' },
    { key: 'Londres', val: '27' },
    { key: 'Tokio',   val: '30' },
  ];

  const shuffleData = [
    { key: 'Toronto', vals: ['18', '22'] },
    { key: 'Londres', vals: ['15', '27'] },
    { key: 'Tokio',   vals: ['25', '30'] },
  ];

  const reduceData = [
    { city: 'Toronto', result: '22 °C' },
    { city: 'Londres', result: '27 °C' },
    { city: 'Tokio',   result: '30 °C' },
  ];

  const BTN_BASE = {
    padding:      '7px 16px',
    marginRight:  '8px',
    marginBottom: '10px',
    border:       '2px solid #FA8112',
    background:   'transparent',
    color:        '#FA8112',
    borderRadius: '6px',
    cursor:       'pointer',
    fontSize:     '0.85rem',
    fontWeight:   '600',
    transition:   'all 0.2s ease',
    fontFamily:   'inherit',
  };

  const BTN_ACTIVE = {
    ...BTN_BASE,
    background: '#FA8112',
    color:      '#FAF3E1',
  };

  return (
    <div className="slide">
      <h2 className="slide-titulo">MapReduce en acción</h2>
      <p className="slide-subtitulo">Ejemplo práctico: temperatura máxima por ciudad</p>

      {/* Botones de fase */}
      <div style={{ marginBottom: '0.6rem' }}>
        {[
          { id: 'all',     label: 'Todas las fases' },
          { id: 'entrada', label: 'Entrada'         },
          { id: 'map',     label: 'Map'             },
          { id: 'reduce',  label: 'Reduce'          },
        ].map(({ id, label }) => (
          <button
            key={id}
            style={activePhase === id ? BTN_ACTIVE : BTN_BASE}
            onClick={() => setActivePhase(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Fases — transición suave por opacidad */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        {/* ENTRADA */}
        <div style={{
          flex: 1,
          opacity: (activePhase === 'all' || activePhase === 'entrada') ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: (activePhase === 'all' || activePhase === 'entrada') ? 'auto' : 'none',
        }}>
          <h4 style={{ color: '#2d7a4f', marginBottom: '8px', textAlign: 'center', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Entrada
          </h4>
          {inputData.map((item, idx) => (
            <div key={idx} style={CARD_ENTRADA}>
              <div style={{ color: '#2d7a4f', fontWeight: '700', marginBottom: '4px', fontSize: '0.78rem' }}>
                Archivo {item.file}
              </div>
              {item.data.map((line, i) => (
                <div key={i} style={{ color: '#5a3a1a', margin: '2px 0', fontSize: '0.82rem' }}>
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* MAP */}
        <div style={{
          flex: 1,
          opacity: (activePhase === 'all' || activePhase === 'map') ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: (activePhase === 'all' || activePhase === 'map') ? 'auto' : 'none',
        }}>
            <h4 style={{ color: '#FA8112', marginBottom: '10px', textAlign: 'center', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Map
            </h4>

            <div style={{ fontSize: '0.72rem', color: '#8a6a4a', marginBottom: '6px', fontStyle: 'italic' }}>
              Pares clave-valor:
            </div>
            {mapData.map((pair, idx) => (
              <div key={idx} style={{
                ...CARD_MAP,
                display:        'flex',
                justifyContent: 'space-between',
                padding:        '6px 10px',
                marginBottom:   '4px',
              }}>
                <span style={{ color: '#FA8112', fontWeight: '700' }}>{pair.key}</span>
                <span style={{ color: '#5a3a1a' }}>→ {pair.val}</span>
              </div>
            ))}

            <div style={{ fontSize: '0.72rem', color: '#8a6a4a', margin: '8px 0 6px', fontStyle: 'italic' }}>
              Después de Shuffle (agrupado):
            </div>
            {shuffleData.map((group, idx) => (
              <div key={idx} style={{ ...CARD_MAP, padding: '6px 10px', marginBottom: '4px' }}>
                <div style={{ color: '#FA8112', fontWeight: '700' }}>{group.key}</div>
                <div style={{ color: '#8a6a4a', marginTop: '2px', fontSize: '0.78rem' }}>
                  → [{group.vals.join(', ')}]
                </div>
              </div>
            ))}
        </div>

        {/* REDUCE */}
        <div style={{
          flex: 1,
          opacity: (activePhase === 'all' || activePhase === 'reduce') ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: (activePhase === 'all' || activePhase === 'reduce') ? 'auto' : 'none',
        }}>
          <h4 style={{ color: '#8a4a1a', marginBottom: '8px', textAlign: 'center', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Reduce
          </h4>
          {reduceData.map((item, idx) => (
            <div key={idx} style={CARD_REDUCE}>
              <div style={{ color: '#FA8112', fontWeight: '700', marginBottom: '4px', fontSize: '0.82rem' }}>
                {item.city}
              </div>
              <div style={{ color: '#5a3a1a', fontSize: '0.9rem' }}>
                → max(…) = <strong style={{ color: '#8a4a1a' }}>{item.result}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cita" style={{ marginTop: '0.8rem' }}>
        MapReduce permite fragmentar terabytes de datos en tareas pequeñas ejecutadas en paralelo.
        Lo que un solo procesador tardaría horas, un clúster de nodos lo completa en minutos
        (Holdsworth y Kosinski, 2024).
      </div>
    </div>
  );
}
