import React from 'react';

const Slide01Portada = () => {
  return (
    <div className="slide slide--full" style={styles.container}>
      <style>{keyframes}</style>
      <svg style={styles.gridPattern} preserveAspectRatio="none" viewBox="0 0 1200 800">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FA8112" strokeWidth="1" opacity="0.06" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#grid)" />
      </svg>

      {/* Cuadrícula + overlay progresivo (5% cuadros en centro, ~75% en bordes, sin corte) */}
      <div className="portada-texture" aria-hidden="true" />
      <div className="portada-gradient" aria-hidden="true" />

      <div style={styles.content}>
        <div style={styles.dotsContainer}>
          <div style={{ ...styles.dot, animationDelay: '0s' }}></div>
          <div style={{ ...styles.dot, animationDelay: '0.2s' }}></div>
          <div style={{ ...styles.dot, animationDelay: '0.4s' }}></div>
        </div>

        <h1 style={styles.title}>Modelos y arquitecturas para Big Data</h1>
        <div style={styles.titleUnderline}></div>

        <div style={styles.metadata}>
          <p style={styles.metadataItem}>
            <span style={styles.label}>Presentado por:</span>
            <span style={styles.value}>Hiram Agustín Acevedo López</span>
          </p>
          <p style={styles.metadataItem}>
            <span style={styles.label}>Programa:</span>
            <span style={styles.value}>Licenciatura en Desarrollo de Sistemas Web</span>
          </p>
          <p style={styles.metadataItem}>
            <span style={styles.label}>Asignatura:</span>
            <span style={styles.value}>Uso de Big Data para Toma de Decisiones</span>
          </p>
          <p style={styles.metadataItem}>
            <span style={styles.label}>Asesor:</span>
            <span style={styles.value}>RIGOBERTO CARDENAS LARIOS</span>
          </p>
        </div>

        <div style={styles.footer}>
          <p style={styles.activity}>Unidad 2 · Actividad 2</p>
          <p style={styles.date}>18 de febrero de 2026</p>
        </div>
      </div>
    </div>
  );
};

const keyframes = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0;
      box-shadow: 0 0 0 0 rgba(250, 129, 18, 0.7);
    }
    50% {
      opacity: 1;
      box-shadow: 0 0 0 10px rgba(250, 129, 18, 0);
    }
  }
`;

const styles = {
  container: {
    width: '100%',
    height: '100%',
    background: '#FAF3E1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  gridPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 1,
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '800px',
    padding: 'clamp(1rem, 4.8vw, 2.5rem)',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '40px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#FA8112',
    animation: 'pulse 1.5s infinite',
  },
  title: {
    fontSize: 'clamp(1.65rem, 6.8vw, 3rem)',
    fontWeight: 'bold',
    color: '#FA8112',
    margin: '0 0 16px 0',
    animation: 'fadeInDown 0.8s ease-out',
    fontFamily: 'Inter, sans-serif',
  },
  titleUnderline: {
    width: 'clamp(72px, 20vw, 120px)',
    height: '4px',
    background: '#5a3a1a',
    margin: '0 auto clamp(1rem, 4vw, 2.5rem)',
    animation: 'fadeInDown 0.8s ease-out 0.2s both',
  },
  metadata: {
    marginBottom: 'clamp(1rem, 4vw, 2.5rem)',
    animation: 'fadeInUp 0.8s ease-out 0.4s both',
  },
  metadataItem: {
    margin: '10px 0',
    fontSize: 'clamp(0.76rem, 2.7vw, 0.9rem)',
    fontFamily: 'Inter, sans-serif',
    lineHeight: 1.45,
  },
  label: {
    color: '#5a4a3a',
    fontWeight: '600',
    marginRight: '8px',
  },
  value: {
    color: '#5a4a3a',
    fontWeight: '400',
  },
  footer: {
    marginTop: 'clamp(1rem, 4vw, 2.5rem)',
    animation: 'fadeInUp 0.8s ease-out 0.6s both',
  },
  activity: {
    fontSize: 'clamp(0.68rem, 2.4vw, 0.8rem)',
    color: '#5a4a3a',
    margin: '8px 0',
    fontFamily: 'Inter, sans-serif',
  },
  date: {
    fontSize: 'clamp(0.68rem, 2.4vw, 0.8rem)',
    color: '#5a4a3a',
    margin: '8px 0',
    fontFamily: 'Inter, sans-serif',
  },
};

export default Slide01Portada;
