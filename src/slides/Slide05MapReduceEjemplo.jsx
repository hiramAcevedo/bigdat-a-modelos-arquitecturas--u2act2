import React, { useState, useRef, useEffect } from 'react';

/* Paso 0 = solo Entrada, 1 = Entrada+Map, 2 = Entrada+Map+Reduce (acumulativo, nada se quita) */
const MAX_STEP = 2;

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

export default function Slide05MapReduceEjemplo({ slideIndex, slideKeyHandlers, slide5Step, setSlide5Step }) {
  const step = slide5Step ?? 0;
  const setStep = setSlide5Step ?? (() => {});
  const stepRef = useRef(step);
  stepRef.current = step;

  useEffect(() => {
    if (slideKeyHandlers && setSlide5Step && slideIndex === 4) {
      slideKeyHandlers.current.handleArrowRight = () => {
        const s = stepRef.current;
        if (s >= MAX_STEP) return false;
        setSlide5Step(s + 1);
        return true;
      };
      slideKeyHandlers.current.handleArrowLeft = () => {
        const s = stepRef.current;
        if (s <= 0) return false;
        setSlide5Step(s - 1);
        return true;
      };
    }
    return () => {
      if (slideKeyHandlers?.current) {
        slideKeyHandlers.current.handleArrowRight = null;
        slideKeyHandlers.current.handleArrowLeft = null;
      }
    };
  }, [slideIndex, slideKeyHandlers, setSlide5Step]);

  const goToStep = (n) => (setSlide5Step ?? (() => {}))(Math.max(0, Math.min(n, MAX_STEP)));

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

      {/* Botones: Entrada, Map, Reduce (pasos acumulativos; flechas también avanzan/retroceden) */}
      <div style={{ marginBottom: '0.6rem' }}>
        {[
          { step: 0, label: 'Entrada' },
          { step: 1, label: 'Map'     },
          { step: 2, label: 'Reduce'  },
        ].map(({ step: s, label }) => (
          <button
            key={s}
            style={step === s ? BTN_ACTIVE : BTN_BASE}
            onClick={() => goToStep(s)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Fases acumulativas: Entrada se queda, se agrega Map, luego Reduce */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        {/* ENTRADA — siempre visible desde paso 0 */}
        <div style={{
          flex: 1,
          opacity: step >= 0 ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: step >= 0 ? 'auto' : 'none',
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

        {/* MAP — visible desde paso 1 */}
        <div style={{
          flex: 1,
          opacity: step >= 1 ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: step >= 1 ? 'auto' : 'none',
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

        {/* REDUCE — visible desde paso 2 */}
        <div style={{
          flex: 1,
          opacity: step >= 2 ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: step >= 2 ? 'auto' : 'none',
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
