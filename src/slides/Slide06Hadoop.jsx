import React from 'react';

export default function Slide06Hadoop() {
  const sidebarData = [
    { label: 'Creador', value: 'Doug Cutting y Mike Cafarella' },
    { label: 'Año de origen', value: '2006 (Yahoo!)' },
    { label: 'Nombre del framework', value: 'Elefante de juguete del hijo de Cutting' },
    { label: 'Licencia', value: 'Apache 2.0, código abierto' },
    { label: 'Gestor actual', value: 'Apache Software Foundation' },
  ];

  return (
    <div className="slide">
      <h2 className="slide-titulo">Hadoop: el framework que implementó la visión</h2>
      <p className="slide-subtitulo">Historia y origen</p>

      <div className="layout-sidebar">
        {/* Left column - main text */}
        <div style={{ flex: '1' }}>
          <p className="p-slide">
            Hadoop es un framework de software de código abierto que implementa los principios del procesamiento distribuido para almacenar y ejecutar aplicaciones sobre clusters de hardware comercial. Su historia es inusual para una tecnología de esta magnitud: nació como parte del proyecto Nutch, un motor de búsqueda web de código abierto creado por Doug Cutting y Mike Cafarella, directamente inspirado en dos publicaciones técnicas de Google sobre almacenamiento y procesamiento distribuido.
          </p>

          <p className="p-slide">
            En 2006, Cutting se incorporó a Yahoo y separó la parte de cómputo distribuido del proyecto Nutch. Así nació Hadoop, nombrado en honor al elefante de juguete amarillo de su hijo. Desde 2008, el ecosistema es gestionado y mantenido por la Apache Software Foundation bajo licencia de código abierto, lo que permitió su adopción masiva en la industria (SAS, 2024).
          </p>

          <p className="p-slide">
            Lo que hace especial a Hadoop no es una sola tecnología, sino su filosofía: asume que el hardware falla constantemente y diseña todos sus componentes para trabajar con ese supuesto. En lugar de depender de servidores costosos e infalibles, Hadoop replica los datos automáticamente entre múltiples nodos y redistribuye el trabajo cuando alguno falla.
          </p>

          <div className="apa">
            (SAS, 2024; Salazar Argonza, 2016)
          </div>
        </div>

        {/* Right column - sidebar */}
        <div className="sidebar-panel">
          {sidebarData.map((item, idx) => (
            <div key={idx} className="sidebar-dato">
              <div className="sidebar-dato-label">{item.label}</div>
              <div className="sidebar-dato-val">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
