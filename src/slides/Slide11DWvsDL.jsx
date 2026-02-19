import { useState } from 'react';

export default function Slide11DWvsDL() {
  const [activeTab, setActiveTab] = useState('caracteristicas');

  const dwContent = {
    caracteristicas: [
      'Esquema definido al escribir (schema-on-write)',
      'Datos limpios y transformados antes de cargarse',
      'Optimizado para consultas analíticas (OLAP)',
      'Fuente única de verdad para reportes de negocio',
      'Alta consistencia y calidad de datos'
    ],
    ventajas: [
      'Consultas rápidas sobre datos estructurados',
      'Alta calidad y confiabilidad de los datos',
      'Ideal para BI y reportes ejecutivos',
      'Gobernanza de datos robusta desde el diseño'
    ],
    desventajas: [
      'Difícil de modificar si el negocio cambia',
      'No soporta datos no estructurados',
      'ETL costoso y lento para datos en tiempo real',
      'Poco flexible para exploración de datos'
    ]
  };

  const dlContent = {
    caracteristicas: [
      'Esquema definido al leer (schema-on-read)',
      'Datos crudos, sin transformación previa',
      'Acepta cualquier tipo y formato de datos',
      'Almacenamiento de bajo costo (ej. HDFS, S3)',
      'Ideal para ciencia de datos y exploración'
    ],
    ventajas: [
      'Extrema flexibilidad para nuevos casos de uso',
      'Bajo costo de almacenamiento',
      'Soporte para datos en tiempo real y streaming',
      'Base ideal para machine learning con datos crudos'
    ],
    desventajas: [
      'Riesgo de convertirse en "data swamp" sin gobernanza',
      'Consultas lentas sin optimización adicional',
      'Requiere más trabajo de limpieza para análisis',
      'Difícil de gestionar calidad y linaje de datos'
    ]
  };

  return (
    <div className="slide">
      <div className="slide-titulo">Data Warehouse y Data Lake</div>
      <div className="slide-subtitulo">Dos enfoques para almacenar datos</div>

      <div className="slide-body">
        <div className="split">
          <div className="split-col">
            <div className="split-titulo" style={{ color: 'var(--orange)' }}>Data Warehouse</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray)', marginBottom: '1.5rem' }}>
              Almacén de datos estructurados, organizados bajo un esquema predefinido y optimizados para consultas analíticas. Los datos pasan por un proceso ETL (Extracción, Transformación y Carga) antes de ser almacenados.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {dwContent[activeTab].map((item, idx) => (
                <div key={idx} style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--orange)', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--white)' }}>{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="split-col">
            <div className="split-titulo" style={{ color: 'var(--cyan)' }}>Data Lake</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray)', marginBottom: '1.5rem' }}>
              Repositorio que almacena datos en su formato original (crudo), sin esquema previo. Acepta datos estructurados, semiestructurados (JSON, XML) y no estructurados (video, audio, texto libre).
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {dlContent[activeTab].map((item, idx) => (
                <div key={idx} style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--cyan)', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--white)' }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button
            onClick={() => setActiveTab('caracteristicas')}
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: activeTab === 'caracteristicas' ? 'var(--cyan)' : 'var(--bg-card)',
              color: activeTab === 'caracteristicas' ? 'var(--bg)' : 'var(--gray)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            Características
          </button>
          <button
            onClick={() => setActiveTab('ventajas')}
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: activeTab === 'ventajas' ? 'var(--cyan)' : 'var(--bg-card)',
              color: activeTab === 'ventajas' ? 'var(--bg)' : 'var(--gray)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            Ventajas
          </button>
          <button
            onClick={() => setActiveTab('desventajas')}
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: activeTab === 'desventajas' ? 'var(--cyan)' : 'var(--bg-card)',
              color: activeTab === 'desventajas' ? 'var(--bg)' : 'var(--gray)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            Desventajas
          </button>
        </div>
      </div>
    </div>
  );
}
