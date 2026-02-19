import React from 'react';

const Slide16Referencias = () => {
  const referencias = [
    {
      id: 1,
      texto: 'Dean, J. y Ghemawat, S. (2004). MapReduce: simplified data processing on large clusters. En F. Dabek (ed.), ',
      italic: 'Proceedings of the 6th Symposium on Operating System Design and Implementation',
      texto2: ' (pp. 137-150). USENIX Association.',
    },
    {
      id: 2,
      texto: 'Holdsworth, J. y Kosinski, M. (19 de noviembre de 2024). Qué es MapReduce. IBM. ',
      link: { text: 'https://www.ibm.com/mx-es/think/topics/mapreduce', url: 'https://www.ibm.com/mx-es/think/topics/mapreduce' },
    },
    {
      id: 3,
      texto: 'Joyanes Aguilar, L. (2016). ',
      italic: 'Big data: análisis de grandes volúmenes de datos en organizaciones',
      texto2: '. Alfaomega.',
    },
    {
      id: 4,
      texto: 'López Murphy, S. y Zarza, G. (2017). Ingeniería para Big Data. En S. López Murphy y G. Zarza, ',
      italic: 'Gestión de datos masivos: arquitecturas, tecnologías y herramientas',
      texto2: ' (cap. 8, pp. 127-145). Alfaomega.',
    },
    {
      id: 5,
      texto: 'Minelli, M., Chambers, M. y Dhiraj, A. (2013). ',
      italic: 'Big data, big analytics: emerging business intelligence and analytic trends for today\'s businesses',
      texto2: '. Wiley.',
    },
    {
      id: 6,
      texto: 'Salazar Argonza, J. (2016). Infraestructura para el Big Data. ',
      italic: 'Revista Digital Universitaria',
      texto2: ', 17(1). ',
      link: { text: 'https://www.revista.unam.mx/vol.17/num1/art07/', url: 'https://www.revista.unam.mx/vol.17/num1/art07/' },
    },
    {
      id: 7,
      texto: 'SAS Institute. (19 de noviembre de 2024). Qué es Hadoop. SAS. ',
      link: { text: 'https://www.sas.com/es_mx/insights/big-data/hadoop.html', url: 'https://www.sas.com/es_mx/insights/big-data/hadoop.html' },
    },
    {
      id: 8,
      texto: 'The Apache Software Foundation. (s.f.). MapReduce tutorial. Apache Hadoop. ',
      link: { text: 'https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html', url: 'https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html' },
    },
    {
      id: 9,
      texto: 'Todbi.com. (s.f.). Diccionario de arquitecturas de datos. TodoBI. ',
      link: { text: 'https://www.todobi.com/diccionario-de-arquitecturas-de-datos/', url: 'https://www.todobi.com/diccionario-de-arquitecturas-de-datos/' },
    },
    {
      id: 10,
      texto: 'IEA. (2024). ',
      italic: 'Electricity 2024: Analysis and forecast to 2026',
      texto2: '. International Energy Agency. ',
      link: { text: 'https://www.iea.org/reports/electricity-2024', url: 'https://www.iea.org/reports/electricity-2024' },
    },
    {
      id: 11,
      texto: 'DvorakDwarf. (2023). ',
      italic: 'Infinite-Storage-Glitch',
      texto2: ' [Software]. GitHub. ',
      link: { text: 'https://github.com/yE58b8/Infinite-Storage-Glitch', url: 'https://github.com/yE58b8/Infinite-Storage-Glitch' },
    },
  ];

  return (
    <div className="slide slide--dark-full slide16-referencias" style={styles.container}>
      <style>{hideSlideBar}</style>
      
      <div style={styles.content}>
        <h2 style={styles.title}>Referencias</h2>
        <h3 style={styles.subtitle}>APA 7.ª edición</h3>
        
        <div style={styles.separator}></div>

        <div className="slide16-ref-list" style={styles.refList}>
          {referencias.map((ref, index) => (
            <div key={ref.id} style={styles.refItem}>
              <span style={styles.refNumber}>{index + 1}.</span>
              <div style={styles.refText}>
                <span style={styles.texto}>{ref.texto}</span>
                {ref.italic && <span style={styles.italic}>{ref.italic}</span>}
                {ref.texto2 && <span style={styles.texto}>{ref.texto2}</span>}
                {ref.link && (
                  <a href={ref.link.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    {ref.link.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const hideSlideBar = `
  .slide::before {
    display: none;
  }
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
    padding: 'clamp(0.75rem, 3.8vh, 2.2rem) clamp(1.05rem, 4.8vw, 2.65rem)',
    boxSizing: 'border-box',
    overflow: 'auto',
  },
  content: {
    maxWidth: '900px',
    width: '100%',
  },
  title: {
    fontSize: 'clamp(1.8rem, 8vw, 3.25rem)',
    fontWeight: 'bold',
    color: '#FA8112',
    margin: '0 0 12px 0',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
  },
  subtitle: {
    fontSize: 'clamp(0.82rem, 3vw, 1.1rem)',
    color: 'rgba(250, 129, 18, 0.7)',
    margin: '0 0 32px 0',
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Inter, sans-serif',
  },
  separator: {
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #FA8112, transparent)',
    margin: 'clamp(0.95rem, 3.6vw, 2rem) 0',
  },
  refList: {
    maxHeight: 'calc(100dvh - 10.5rem)',
    overflowY: 'auto',
    paddingRight: '8px',
  },
  refItem: {
    display: 'flex',
    marginBottom: '16px',
    gap: '12px',
  },
  refNumber: {
    color: '#FA8112',
    fontWeight: 'bold',
    minWidth: '24px',
    paddingTop: '2px',
    fontFamily: 'Inter, sans-serif',
  },
  refText: {
    fontSize: 'clamp(0.82rem, 2.9vw, 0.9rem)',
    lineHeight: '1.72',
    color: '#c8b090',
    textAlign: 'left',
    fontFamily: 'Inter, sans-serif',
    overflowWrap: 'anywhere',
  },
  texto: {
    color: '#c8b090',
  },
  italic: {
    fontStyle: 'italic',
    color: '#c8b090',
  },
  link: {
    color: '#FA8112',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'text-decoration 0.3s ease',
    overflowWrap: 'anywhere',
  },
};

export default Slide16Referencias;
