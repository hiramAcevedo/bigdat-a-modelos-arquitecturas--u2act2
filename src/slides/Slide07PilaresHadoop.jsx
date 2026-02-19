import React from 'react';

export default function Slide07PilaresHadoop() {
  const cards = [
    {
      icon: 'HD',
      title: 'HDFS - Sistema de Archivos Distribuido',
      desc: 'Sistema de archivos basado en Java que almacena datos distribuyéndolos en bloques de 128 MB entre múltiples nodos. Cada bloque se replica automáticamente en tres nodos distintos para garantizar tolerancia a fallos. Si un nodo falla, los datos siguen disponibles desde las réplicas. Distingue entre NameNode (nodo maestro que administra metadatos) y DataNodes (almacenan los bloques reales).',
      color: '#FA8112',
    },
    {
      icon: 'MR',
      title: 'MapReduce - Motor de Procesamiento',
      desc: 'Framework de procesamiento en paralelo que divide las tareas en operaciones Map (transformar datos en pares clave-valor) y Reduce (consolidar valores por clave). Permite procesar petabytes de datos distribuyendo el trabajo entre los nodos del cluster. Aunque Apache Spark lo ha reemplazado en muchos casos, sigue siendo el modelo conceptual central del Big Data.',
      color: '#c96d0e',
    },
    {
      icon: 'YN',
      title: 'YARN - Gestor de Recursos',
      desc: 'Yet Another Resource Negotiator. Administra los recursos del cluster (memoria, CPU) y programa los trabajos de múltiples aplicaciones. YARN permite que diferentes frameworks (no solo MapReduce, también Spark o Tez) compartan el mismo cluster de manera eficiente, sin interferirse entre sí.',
      color: '#8a4a1a',
    },
    {
      icon: 'CO',
      title: 'Hadoop Common - Base Compartida',
      desc: 'Conjunto de librerías y utilidades de Java compartidas por los demás módulos de Hadoop. Incluye las abstracciones del sistema de archivos, herramientas de serialización y los scripts necesarios para iniciar Hadoop. Sin Hadoop Common, los otros módulos no pueden funcionar.',
      color: '#8a6a4a',
    },
  ];

  return (
    <div className="slide">
      <h2 className="slide-titulo">Los cuatro pilares de Hadoop</h2>
      <p className="slide-subtitulo">Módulos principales</p>

      <p className="p-slide">
        Hadoop no es una sola pieza de software: es un ecosistema construido sobre cuatro módulos que trabajan en conjunto. Cada uno resuelve un problema específico del procesamiento distribuido a gran escala (Holdsworth y Kosinski, 2024).
      </p>

      <div className="card-grid cols-2" style={{ marginTop: '1rem' }}>
        {cards.map((card, idx) => (
          <div key={idx} className="card" style={{ borderLeft: `3px solid ${card.color}` }}>
            <div className="card-icono" style={{ background: card.color }}>
              {card.icon}
            </div>
            <h3 className="card-titulo">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="apa" style={{ marginTop: '1rem' }}>
        (Holdsworth y Kosinski, 2024; Salazar Argonza, 2016)
      </div>
    </div>
  );
}
