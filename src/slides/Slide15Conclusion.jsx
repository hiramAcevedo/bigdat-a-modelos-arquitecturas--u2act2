export default function Slide15Conclusion() {
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

      <div className="slide-titulo">Conclusión</div>
      <div className="slide-subtitulo">Perspectiva y reflexión</div>

      <div className="slide-body">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p className="p-slide">
            El ecosistema de Big Data no es una tecnología única sino una red interconectada de modelos, frameworks y arquitecturas, cada uno diseñado para resolver un aspecto específico del procesamiento de datos a gran escala. MapReduce demostró que fragmentar un problema enorme en tareas pequeñas y paralelas podía transformar horas de procesamiento en minutos. Hadoop convirtió esa visión en una plataforma accesible y de código abierto que democratizó el análisis masivo de datos. Spark la aceleró con procesamiento en memoria. Y las arquitecturas de datos, desde el Data Warehouse clásico hasta el Data Mesh descentralizado, ofrecen formas cada vez más sofisticadas de organizar la información para convertirla en decisiones.
          </p>

          <p className="p-slide">
            Como desarrollador web en formación, este recorrido me resultó revelador en un sentido que no esperaba: la mayor parte de estos conceptos tienen una contraparte directa en el desarrollo web. La idea de dividir responsabilidades por dominio en Data Mesh no es muy distinta a los microservicios. El schema-on-read de un Data Lake recuerda a la flexibilidad de una API con respuesta JSON variable. Y la tolerancia a fallos de HDFS, con sus réplicas automáticas, es el mismo principio detrás de cualquier sistema de caché distribuido. El Big Data, al final, no es un mundo paralelo al desarrollo de software: es su consecuencia natural cuando los datos dejan de caber en una sola máquina.
          </p>

          <div style={{
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
            margin: '2rem 0'
          }}></div>

          <div style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            color: 'var(--gray)',
            marginTop: '2rem'
          }}>
            Hiram Agustín Acevedo López · Unidad 2 Actividad 2 · 2026
          </div>
        </div>
      </div>
    </div>
  );
}
