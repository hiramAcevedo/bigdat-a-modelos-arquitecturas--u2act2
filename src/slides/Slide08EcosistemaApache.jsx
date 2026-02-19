import React from 'react';

export default function Slide08EcosistemaApache() {
  const leftItems = [
    {
      initial: 'H',
      name: 'Hive',
      desc: 'Lenguaje de consulta tipo SQL (HiveQL) para datos almacenados en HDFS. Permite a analistas sin experiencia en Java hacer consultas sobre grandes datasets sin escribir código MapReduce.',
      color: '#00d4ff',
    },
    {
      initial: 'P',
      name: 'Pig',
      desc: 'Plataforma de alto nivel con lenguaje propio (Pig Latin) para manipulación de datos. Traduce scripts a trabajos MapReduce automáticamente, simplificando transformaciones complejas.',
      color: '#ff6b35',
    },
    {
      initial: 'B',
      name: 'HBase',
      desc: 'Base de datos NoSQL distribuida que se ejecuta sobre HDFS. Ofrece acceso aleatorio en tiempo real a grandes tablas dispersas, similar a Google Bigtable, para lecturas y escrituras de baja latencia.',
      color: '#00d4ff',
    },
    {
      initial: 'F',
      name: 'Flume',
      desc: 'Servicio de alta confiabilidad para recopilar, agregar y mover grandes volúmenes de datos de log en streaming hacia HDFS u otros destinos.',
      color: '#ff6b35',
    },
  ];

  const rightItems = [
    {
      initial: 'S',
      name: 'Sqoop',
      desc: 'Conector para transferir datos eficientemente entre Hadoop y bases de datos relacionales (MySQL, Oracle, PostgreSQL). Permite importar tablas completas o incrementales.',
      color: '#00d4ff',
    },
    {
      initial: 'Z',
      name: 'ZooKeeper',
      desc: 'Servicio de coordinación centralizado para procesos distribuidos. Gestiona configuración, sincronización entre nodos y elección de líder en el cluster.',
      color: '#ff6b35',
    },
    {
      initial: 'O',
      name: 'Oozie',
      desc: 'Organizador y programador de flujos de trabajo para trabajos Hadoop. Permite definir dependencias entre trabajos MapReduce, Pig, Hive y Sqoop como un grafo acíclico dirigido.',
      color: '#00d4ff',
    },
    {
      initial: 'A',
      name: 'Ambari',
      desc: 'Interfaz web de código abierto para provisionar, gestionar y monitorear clusters Hadoop. Simplifica la instalación y configuración del ecosistema completo.',
      color: '#ff6b35',
    },
  ];

  return (
    <div className="slide">
      <h2 className="slide-titulo">El ecosistema Apache</h2>
      <p className="slide-subtitulo">Más allá de los cuatro pilares</p>

      <p className="p-slide">
        Hadoop no trabaja solo. Un ecosistema completo de herramientas Apache complementa sus capacidades, cubriendo desde la ingesta y transporte de datos hasta su consulta, análisis y orquestación de flujos de trabajo (Joyanes Aguilar, 2016).
      </p>

      <div className="lista-icono" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px' }}>
        {/* Left column */}
        <div>
          {leftItems.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
              <div className="icono-inicial" style={{ background: item.color }}>
                {item.initial}
              </div>
              <div>
                <div className="li-nombre">{item.name}</div>
                <div className="li-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div>
          {rightItems.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
              <div className="icono-inicial" style={{ background: item.color }}>
                {item.initial}
              </div>
              <div>
                <div className="li-nombre">{item.name}</div>
                <div className="li-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="apa" style={{ marginTop: '30px' }}>
        (Joyanes Aguilar, 2016; Salazar Argonza, 2016)
      </div>
    </div>
  );
}
