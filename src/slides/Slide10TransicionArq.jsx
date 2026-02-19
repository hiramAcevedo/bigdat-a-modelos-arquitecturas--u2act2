export default function Slide10TransicionArq() {
  return (
    <div className="slide">
      <div className="slide-titulo">Arquitecturas de datos</div>
      <div className="slide-subtitulo">De procesar a organizar</div>
      
      <div className="slide-body">
        <div style={{
          maxWidth: '900px',
          margin: '0 0 2rem 0',
          textAlign: 'left'
        }}>
          <p className="p-slide">
            Hasta aquí hemos explorado cómo se procesan los datos a gran escala: modelos como MapReduce y frameworks como Hadoop y Spark. Pero procesar datos es solo una parte de la ecuación. La otra, igualmente crítica, es cómo se organizan, almacenan y gobiernan esos datos dentro de una organización.
          </p>
          
          <p className="p-slide">
            Las arquitecturas de datos definen la estructura lógica y física que determina cómo fluye la información: desde su ingesta en bruto hasta su transformación en decisiones de negocio. Cada arquitectura responde a necesidades distintas, y elegir la incorrecta puede significar años de deuda técnica o una inversión en infraestructura que no escala con el negocio (Todbi.com, s.f.).
          </p>
          
          <p className="p-slide">
            En las siguientes secciones exploraremos los modelos más importantes: desde el clásico Data Warehouse, pasando por el Data Lake, hasta las arquitecturas modernas como Data Lakehouse, Data Mesh y Data Fabric.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--bg-card)',
            borderRadius: '8px',
            borderLeft: '4px solid var(--orange)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#5a3a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FAF3E1',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              marginBottom: '1rem'
            }}>DW</div>
            <div style={{ fontWeight: 'bold', color: 'var(--orange)', marginBottom: '0.5rem' }}>Data Warehouse</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>Estructura rígida, datos limpios</div>
          </div>
          
          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--bg-card)',
            borderRadius: '8px',
            borderLeft: '4px solid var(--cyan)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#5a3a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FAF3E1',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              marginBottom: '1rem'
            }}>DL</div>
            <div style={{ fontWeight: 'bold', color: 'var(--cyan)', marginBottom: '0.5rem' }}>Data Lake</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>Almacén flexible, datos crudos</div>
          </div>
          
          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--bg-card)',
            borderRadius: '8px',
            borderLeft: '4px solid var(--cyan)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#5a3a1a',
              border: '2px solid var(--cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FAF3E1',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}>DLH</div>
            <div style={{ fontWeight: 'bold', color: 'var(--cyan)', marginBottom: '0.5rem' }}>Data Lakehouse / Mesh</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>Lo mejor de ambos mundos</div>
          </div>
        </div>
        
        <div className="apa">
          (Todbi.com, s.f.; Minelli et al., 2013)
        </div>
      </div>
    </div>
  );
}
