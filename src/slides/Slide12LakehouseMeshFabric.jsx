import { useState } from 'react';

const DEFAULT_CARD = null;

export default function Slide12LakehouseMeshFabric({ activeSlide12Card, setActiveSlide12Card }) {
  const [internalExpandedCard, setInternalExpandedCard] = useState(DEFAULT_CARD);
  const isControlled = activeSlide12Card !== undefined;
  const expandedCard = isControlled ? activeSlide12Card : internalExpandedCard;
  const setExpandedCard = isControlled ? setActiveSlide12Card : setInternalExpandedCard;

  const cards = [
    {
      id: 'lakehouse',
      icon: 'DL',
      iconBg: 'var(--cyan)',
      titulo: 'Data Lakehouse',
      descResumen: 'Combina la flexibilidad del Data Lake con la estructura y gobernanza del Data Warehouse en una sola plataforma. Permite consultas analíticas sobre datos crudos mediante formatos abiertos como Delta Lake o Apache Iceberg.',
      badge: 'Híbrido',
      expandedDetail: 'El Data Lakehouse resuelve la brecha entre el Data Lake sin gobernar y el Data Warehouse rígido. Soporta transacciones ACID, esquemas aplicados y consultas de alto rendimiento directamente sobre los datos del lago. Plataformas como Databricks y Apache Hudi son ejemplos representativos. Es ideal para organizaciones que necesitan tanto la flexibilidad exploratoria como la consistencia analítica (Todbi.com, s.f.).',
      resuelve: 'la duplicación de infraestructura entre lago y almacén.'
    },
    {
      id: 'mesh',
      icon: 'DM',
      iconBg: 'var(--orange)',
      titulo: 'Data Mesh',
      descResumen: 'Arquitectura descentralizada donde cada equipo de negocio (dominio) es responsable y dueño de sus datos como si fueran un producto. Aplica principios de diseño de software a la gestión de datos organizacionales.',
      badge: 'Descentralizado',
      expandedDetail: 'Propuesto por Zhamak Dehghani en 2019, Data Mesh traslada la responsabilidad de los datos del equipo central al equipo de cada dominio (ventas, manufactura, logística). Cada dominio expone sus datos como un producto con interfaces documentadas, similar a las APIs en microservicios. Elimina los cuellos de botella del equipo central y permite escalar la organización de datos (Todbi.com, s.f.).',
      resuelve: 'los cuellos de botella del equipo central de datos.'
    },
    {
      id: 'fabric',
      icon: 'DF',
      iconBg: 'rgba(250, 129, 18, 0.15)',
      iconColor: 'var(--cyan)',
      iconBorder: '2px solid var(--cyan)',
      titulo: 'Data Fabric',
      descResumen: 'Capa de integración inteligente que conecta datos distribuidos en múltiples entornos: servidores locales, nube pública, nube híbrida. Usa metadatos activos y automatización para facilitar el acceso unificado a los datos.',
      badge: 'Integración',
      expandedDetail: 'Data Fabric no es un sistema de almacenamiento, sino una capa de integración que hace que los datos sean accesibles independientemente de dónde estén. Usa metadatos, catálogos de datos y machine learning para descubrir, conectar y gobernar datos automáticamente. Es especialmente útil en organizaciones con datos distribuidos entre múltiples plataformas y proveedores de nube (Todbi.com, s.f.).',
      resuelve: 'la fragmentación de datos en entornos multi-nube y multi-plataforma.'
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="slide">
      <div className="slide-titulo">Tres arquitecturas modernas</div>
      <div className="slide-subtitulo">Lakehouse · Mesh · Fabric</div>

      <div className="slide-body">
        <div className="card-grid cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="slide12-card"
              onClick={() => toggleCard(card.id)}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                padding: '1.5rem',
                cursor: 'pointer',
                border: '1px solid rgba(250, 129, 18, 0.2)',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {expandedCard === card.id ? (
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '1rem', flexShrink: 0 }}>
                    {card.titulo}
                  </div>
                  
                  <div className="slide12-expanded-copy">
                    {card.expandedDetail}
                  </div>
                  
                  <div style={{ fontSize: '0.85rem', color: 'var(--orange)', marginTop: 'auto', fontWeight: '500', flexShrink: 0 }}>
                    Resuelve: {card.resuelve}
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: card.iconBg,
                      border: card.iconBorder || 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.iconColor || 'var(--bg)',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      marginBottom: '1rem'
                    }}
                  >
                    {card.icon}
                  </div>

                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.8rem' }}>
                    {card.titulo}
                  </div>

                  <div style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>
                    {card.descResumen}
                  </div>

                  <div className="badge badge-cyan" style={{ width: 'fit-content' }}>
                    {card.badge}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="apa">
          (Todbi.com, s.f.)
        </div>
      </div>
    </div>
  );
}
