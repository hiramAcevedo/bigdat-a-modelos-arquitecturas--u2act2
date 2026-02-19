import React, { useEffect, useState } from 'react';

export default function Slide01Portada() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate random animated dots for background
    const newDots = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }));
    setDots(newDots);
  }, []);

  return (
    <div
      className="slide"
      style={{
        background: '#0a1628',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Background circuit pattern SVG */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
        }}
        viewBox="0 0 1000 1000"
      >
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00d4ff" strokeWidth="1" />
            <circle cx="0" cy="0" r="3" fill="#ff6b35" />
            <circle cx="100" cy="100" r="3" fill="#ff6b35" />
          </pattern>
        </defs>
        <rect width="1000" height="1000" fill="url(#grid)" />
        <line x1="100" y1="0" x2="100" y2="1000" stroke="#00d4ff" strokeWidth="2" opacity="0.3" />
        <line x1="900" y1="0" x2="900" y2="1000" stroke="#00d4ff" strokeWidth="2" opacity="0.3" />
      </svg>

      {/* Animated dots */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          style={{
            position: 'absolute',
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#00d4ff',
            boxShadow: '0 0 10px #00d4ff',
            animation: `pulse ${dot.duration}s infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: '#fff',
          maxWidth: '900px',
          padding: '40px',
        }}
      >
        <style>{`
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          .portada-title {
            animation: slideInDown 1s ease-out forwards;
          }
          .portada-subtitle {
            animation: slideInUp 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }
          .portada-meta {
            animation: slideInUp 0.8s ease-out 0.4s forwards;
            opacity: 0;
          }
        `}</style>

        <h1
          className="portada-title"
          style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '30px',
            color: '#00d4ff',
            lineHeight: '1.2',
          }}
        >
          Modelos y arquitecturas para Big Data
        </h1>

        <div
          style={{
            height: '4px',
            width: '300px',
            background: '#ff6b35',
            margin: '30px auto',
          }}
        />

        <div className="portada-subtitle" style={{ marginBottom: '50px' }}>
          <p style={{ fontSize: '1.3rem', margin: '10px 0', color: '#fff' }}>
            <strong>Hiram Agustín Acevedo López</strong>
          </p>
          <p style={{ fontSize: '1rem', color: '#b0b0b0', margin: '5px 0' }}>
            Licenciatura en Desarrollo de Sistemas Web
          </p>
        </div>

        <div className="portada-meta" style={{ borderTop: '1px solid #00d4ff', paddingTop: '30px' }}>
          <p style={{ fontSize: '0.95rem', color: '#a0a0a0', margin: '8px 0' }}>
            <strong>Asignatura:</strong> Uso de Big Data para Toma de Decisiones
          </p>
          <p style={{ fontSize: '0.95rem', color: '#a0a0a0', margin: '8px 0' }}>
            <strong>Asesor:</strong> RIGOBERTO CARDENAS LARIOS
          </p>
          <p style={{ fontSize: '0.95rem', color: '#a0a0a0', margin: '8px 0' }}>
            <strong>Actividad:</strong> Unidad 2 - Actividad 2
          </p>
          <p style={{ fontSize: '0.95rem', color: '#00d4ff', margin: '8px 0', marginTop: '15px' }}>
            18 de febrero de 2026
          </p>
        </div>
      </div>
    </div>
  );
}
