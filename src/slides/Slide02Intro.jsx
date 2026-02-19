import React, { useState, useEffect } from 'react';

export default function Slide02Intro() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const facts = [
    { label: 'Datos por minuto', value: '402M TB/día' },
    { label: 'Búsquedas Google', value: '5.9M/min' },
    { label: 'Horas subidas YouTube', value: '500 h/min' },
  ];

  return (
    <div className="slide">
      <h2 className="slide-titulo">El diluvio de datos</h2>
      <p className="slide-subtitulo">Contexto</p>

      <div className="layout-sidebar">
        {/* Left column - main narrative */}
        <div className="split-col" style={{ flex: '1' }}>
          <p className="p-slide">
            Cada día se generan aproximadamente 402 millones de terabytes de información en el mundo. Redes sociales, sensores IoT, transacciones financieras, registros médicos: la información crece a un ritmo que los sistemas tradicionales simplemente no pueden manejar. Cada minuto, YouTube recibe 500 horas de video, Twitter registra 575,000 tuits y Google procesa 5.9 millones de búsquedas.
          </p>

          <p className="p-slide">
            Este escenario plantea una pregunta fundamental para cualquier organización que quiera prosperar en la era digital: no solo cómo almacenar esa cantidad de datos, sino cómo procesarlos, organizarlos y extraer valor de ellos. La respuesta no es una sola tecnología, sino un ecosistema completo de modelos, frameworks y arquitecturas diseñados para operar a escalas que antes eran impensables.
          </p>

          <div className="apa">
            (Holdsworth y Kosinski, 2024; SAS, 2024)
          </div>
        </div>

        {/* Right column - sidebar */}
        <div className="sidebar-panel">
          <div
            style={{
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            <style>{`
              @keyframes pulse-glow {
                0% { transform: scale(1); opacity: 0.6; }
                50% { transform: scale(1.2); opacity: 1; }
                100% { transform: scale(1); opacity: 0.6; }
              }
              .pulse-dot {
                animation: pulse-glow 2s infinite;
              }
            `}</style>

            <div
              className="pulse-dot"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#FA8112',
                margin: '0 auto 15px',
                boxShadow: '0 0 20px rgba(250,129,18,0.7)',
              }}
            />
            <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '10px' }}>
              Flujo de datos en tiempo real
            </p>
          </div>

          {facts.map((fact, idx) => (
            <div key={idx} className="sidebar-dato">
              <div className="sidebar-dato-label">{fact.label}</div>
              <div className="sidebar-dato-val">{fact.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
