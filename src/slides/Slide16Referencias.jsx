export default function Slide16Referencias() {
  const referencias = [
    {
      id: 1,
      texto: 'Dean, J. y Ghemawat, S. (2004). MapReduce: simplified data processing on large clusters. En F. Dabek (ed.), ',
      italic: 'Proceedings of the 6th Symposium on Operating System Design and Implementation',
      texto2: ' (pp. 137-150). USENIX Association.'
    },
    {
      id: 2,
      texto: 'Holdsworth, J. y Kosinski, M. (19 de noviembre de 2024). Qué es MapReduce. IBM. ',
      link: 'https://www.ibm.com/mx-es/think/topics/mapreduce'
    },
    {
      id: 3,
      texto: 'Joyanes Aguilar, L. (2016). ',
      italic: 'Big data: análisis de grandes volúmenes de datos en organizaciones',
      texto2: '. Alfaomega.'
    },
    {
      id: 4,
      texto: 'López Murphy, S. y Zarza, G. (2017). Ingeniería para Big Data. En S. López Murphy y G. Zarza, ',
      italic: 'Gestión de datos masivos: arquitecturas, tecnologías y herramientas',
      texto2: ' (cap. 8, pp. 127-145). Alfaomega.'
    },
    {
      id: 5,
      texto: 'Minelli, M., Chambers, M. y Dhiraj, A. (2013). ',
      italic: 'Big data, big analytics: emerging business intelligence and analytic trends for today\'s businesses',
      texto2: '. Wiley.'
    },
    {
      id: 6,
      texto: 'Salazar Argonza, J. (2016). Infraestructura para el Big Data. ',
      italic: 'Revista Digital Universitaria',
      texto2: ', 17(1). ',
      link: 'https://www.revista.unam.mx/vol.17/num1/art07/'
    },
    {
      id: 7,
      texto: 'SAS Institute. (19 de noviembre de 2024). Qué es Hadoop. SAS. ',
      link: 'https://www.sas.com/es_mx/insights/big-data/hadoop.html'
    },
    {
      id: 8,
      texto: 'The Apache Software Foundation. (s.f.). MapReduce tutorial. Apache Hadoop. ',
      link: 'https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html'
    },
    {
      id: 9,
      texto: 'Todbi.com. (s.f.). Diccionario de arquitecturas de datos. TodoBI. ',
      link: 'https://www.todobi.com/diccionario-de-arquitecturas-de-datos/'
    }
  ];

  return (
    <div className="slide" style={{
      backgroundImage: 'none',
      backgroundColor: 'var(--bg)'
    }}>
      <style>{`
        .slide::before {
          display: none;
        }
      `}</style>

      <div className="slide-titulo">Referencias</div>
      <div className="slide-subtitulo">APA 7.ª edición</div>

      <div className="slide-body">
        <div style={{
          maxHeight: '600px',
          overflowY: 'auto',
          paddingRight: '1rem'
        }}>
          {referencias.map((ref) => (
            <div
              key={ref.id}
              style={{
                fontSize: '0.8rem',
                color: 'var(--gray)',
                lineHeight: '1.7',
                marginBottom: '1.2rem',
                paddingLeft: '1.5rem',
                textIndent: '-1.5rem'
              }}
            >
              <>
                {ref.texto}
                {ref.italic && <span style={{ fontStyle: 'italic' }}>{ref.italic}</span>}
                {ref.texto2}
                {ref.link && (
                  <a
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--cyan)', textDecoration: 'none', wordBreak: 'break-all' }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    {ref.link}
                  </a>
                )}
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
