export default function Slide09Spark() {
  return (
    <div className="slide">
      <div className="slide-titulo">Apache Spark: procesamiento en memoria</div>
      <div className="slide-subtitulo">Evolución del framework</div>
      
      <div className="slide-body">
        <p className="p-slide">
          Apache Spark surgió como respuesta directa a las limitaciones de MapReduce para tareas iterativas e interactivas. Mientras MapReduce escribe los resultados intermedios en disco entre cada fase del procesamiento, Spark mantiene los datos en memoria (in-memory processing), lo que reduce drásticamente la cantidad de operaciones de lectura y escritura. Para cargas de trabajo iterativas como el entrenamiento de modelos de machine learning, esto puede representar una aceleración de hasta 100 veces (Holdsworth y Kosinski, 2024).
        </p>
        
        <p className="p-slide">
          A diferencia de MapReduce, que está limitado al paradigma batch (procesamiento por lotes), Spark ofrece APIs para procesamiento en tiempo real (Spark Streaming), consultas SQL (Spark SQL), machine learning (MLlib) y procesamiento de grafos (GraphX). Esta versatilidad lo ha convertido en el motor de procesamiento dominante en el ecosistema Big Data moderno.
        </p>
        
        <div className="tabla-wrap">
          <table>
            <thead>
              <tr>
                <th>Criterio</th>
                <th>MapReduce</th>
                <th>Apache Spark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Procesamiento</td>
                <td>En disco, por lotes (batch)</td>
                <td>En memoria, batch y streaming</td>
              </tr>
              <tr>
                <td>Velocidad relativa</td>
                <td>Referencia base</td>
                <td>Hasta 100x más rápido en iterativos</td>
              </tr>
              <tr>
                <td>Lenguajes soportados</td>
                <td>Java principalmente</td>
                <td>Python, Scala, Java, R, SQL</td>
              </tr>
              <tr>
                <td>Casos de uso ideales</td>
                <td>ETL masivo, cargas batch simples</td>
                <td>ML, streaming, análisis interactivo</td>
              </tr>
              <tr>
                <td>Tolerancia a fallos</td>
                <td>Replicación en disco (HDFS)</td>
                <td>Linaje de datos mediante RDD</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="apa">
          (Holdsworth y Kosinski, 2024; The Apache Software Foundation, s.f.)
        </div>
      </div>
    </div>
  );
}
