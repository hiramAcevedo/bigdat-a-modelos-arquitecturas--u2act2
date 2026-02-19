import React from 'react';

const hideSlideBar = `
  .slide::before { display: none; }
`;

const styles = {
  container: {
    width: '100%',
    minHeight: '100%',
    height: '100%',
    background: '#2a1a0a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 'clamp(1rem, 4.5vw, 3rem) clamp(1.12rem, 5.2vw, 3rem)',
    boxSizing: 'border-box',
    overflow: 'auto',
  },
  content: { maxWidth: '860px', width: '100%' },
  title: {
    fontSize: 'clamp(1.7rem, 6vw, 2.2rem)',
    fontWeight: 'bold',
    color: '#FA8112',
    margin: '0 0 0.5rem 0',
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
  },
  subtitle: {
    fontSize: 'clamp(0.68rem, 2.8vw, 0.82rem)',
    color: 'rgba(250,129,18,0.7)',
    margin: '0 0 1.4rem 0',
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    fontFamily: 'Calibri, sans-serif',
  },
  separator: {
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #FA8112, transparent)',
    margin: '1.2rem 0',
  },
  paragraph: {
    fontSize: 'clamp(0.92rem, 3.2vw, 1.02rem)',
    lineHeight: '1.78',
    color: '#e8d5b0',
    margin: '0 0 1.2rem 0',
    fontFamily: 'Calibri, sans-serif',
    textAlign: 'left',
    overflowWrap: 'anywhere',
  },
  apa: {
    fontSize: '0.8rem',
    color: 'rgba(232,213,176,0.5)',
    marginTop: '0.3rem',
    marginBottom: '1rem',
    fontFamily: 'Calibri, sans-serif',
    fontStyle: 'italic',
    lineHeight: '1.62',
  },
  badge: {
    fontSize: '0.72rem',
    color: 'rgba(232,213,176,0.45)',
    textAlign: 'center',
    marginTop: '1.6rem',
    fontFamily: 'Calibri, sans-serif',
  },
};

const Slide15Conclusion = () => (
  <div className="slide slide--dark-full" style={styles.container}>
    <style>{hideSlideBar}</style>

    <div style={styles.content}>
      <h2 style={styles.title}>Conclusión</h2>
      <h3 style={styles.subtitle}>Perspectiva y reflexión</h3>
      <div style={styles.separator} />

      <p style={styles.paragraph}>
        El ecosistema de Big Data no es una tecnología única sino una red interconectada de modelos,
        frameworks y arquitecturas, cada uno diseñado para resolver un aspecto específico del
        procesamiento de datos a gran escala. MapReduce demostró que fragmentar un problema enorme
        en tareas pequeñas y paralelas podía transformar horas de procesamiento en minutos. Hadoop
        convirtió esa visión en una plataforma accesible y de código abierto que democratizó el
        análisis masivo de datos. Spark la aceleró con procesamiento en memoria. Y las arquitecturas
        de datos, desde el Data Warehouse clásico hasta el Data Mesh descentralizado, ofrecen formas
        cada vez más sofisticadas de organizar la información para convertirla en decisiones.
      </p>

      <p style={styles.paragraph}>
        Como desarrollador web en formación, este recorrido resultó revelador en un sentido
        inesperado: la mayor parte de estos conceptos tienen una contraparte directa en el
        desarrollo web. La idea de dividir responsabilidades por dominio en Data Mesh no es muy
        distinta a los microservicios. El schema-on-read de un Data Lake recuerda a la flexibilidad
        de una API con respuesta JSON variable. Y la tolerancia a fallos de HDFS, con sus réplicas
        automáticas, es el mismo principio detrás de cualquier sistema de caché distribuido. El
        Big Data, al final, no es un mundo paralelo al desarrollo de software: es su consecuencia
        natural cuando los datos dejan de caber en una sola máquina.
      </p>

      <p style={styles.paragraph}>
        El horizonte del Big Data presenta también desafíos que van más allá de lo técnico. El
        costo energético de entrenar modelos de lenguaje con cientos de miles de millones de
        parámetros ya representa una preocupación global: la Agencia Internacional de Energía
        estima que el consumo eléctrico de los centros de datos podría superar los 1,000 TWh
        anuales hacia 2026, impulsado principalmente por la demanda de inteligencia artificial
        (IEA, 2024). Al mismo tiempo, la escasez de infraestructura especializada ha generado
        soluciones poco convencionales: proyectos como Infinite Storage Glitch demuestran cómo
        plataformas de video como YouTube pueden reutilizarse como almacenamiento, codificando
        archivos arbitrarios en frames de video (DvorakDwarf, 2023). Esto no es anécdota: revela
        que cuando el almacenamiento formal se vuelve caro o inaccesible, la comunidad técnica
        adapta la infraestructura disponible. El verdadero reto del Big Data en los próximos años
        no será solo técnico, sino energético, económico y de sostenibilidad.
      </p>

      <div style={styles.apa}>
        IEA. (2024). <em>Electricity 2024: Analysis and forecast to 2026.</em> International Energy Agency.
        https://www.iea.org/reports/electricity-2024 &nbsp;·&nbsp;
        DvorakDwarf. (2023). <em>Infinite-Storage-Glitch</em> [Software]. GitHub.
        https://github.com/yE58b8/Infinite-Storage-Glitch
      </div>

      <div style={styles.badge}>
        Hiram Agustín Acevedo López · Unidad 2 Actividad 2 · 2026
      </div>
    </div>
  </div>
);

export default Slide15Conclusion;
