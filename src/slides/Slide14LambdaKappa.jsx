export default function Slide14LambdaKappa() {
  return (
    <div className="slide slide--slide14">
      <div className="slide-titulo">Arquitecturas Lambda y Kappa</div>
      <div className="slide-subtitulo">Procesamiento batch y streaming</div>

      <div className="slide-body">
        <div className="split slide14-split">
          <div className="split-col">
            <div className="split-titulo" style={{ color: 'var(--cyan)' }}>Arquitectura Lambda</div>
            
            <p className="slide14-intro" style={{ color: 'var(--white)' }}>
              Propuesta por Nathan Marz, Lambda combina dos capas de procesamiento paralelas que trabajan sobre los mismos datos: la capa batch (lotes históricos procesados con alta precisión) y la capa speed (streaming en tiempo real para baja latencia). Ambas alimentan una capa de servicio que unifica los resultados para las consultas.
            </p>

            <div className="slide14-diagram" style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '6px',
            }}>
              <div style={{ marginBottom: '0.5rem' }}>Fuente de datos</div>
              <div style={{ textAlign: 'center', color: 'var(--cyan)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>↓</div>
              
              <div className="slide14-dual-layer">
                <div style={{ padding: '0.5rem', backgroundColor: 'rgba(250, 129, 18, 0.1)', borderLeft: '3px solid var(--cyan)' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Capa Batch</div>
                </div>
                <div style={{ padding: '0.5rem', backgroundColor: 'rgba(250, 129, 18, 0.1)', borderLeft: '3px solid var(--cyan)' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Capa Speed</div>
                </div>
              </div>
              
              <div style={{ textAlign: 'center', color: 'var(--cyan)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>↓</div>
              
              <div style={{ padding: '0.5rem', backgroundColor: 'rgba(250, 129, 18, 0.1)', borderLeft: '3px solid var(--cyan)' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Capa de Servicio</div>
              </div>
              
              <div style={{ textAlign: 'center', color: 'var(--cyan)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>↓</div>
              
              <div style={{ padding: '0.5rem', backgroundColor: 'rgba(250, 129, 18, 0.1)', borderLeft: '3px solid var(--cyan)' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Consultas</div>
              </div>
            </div>

            <div className="slide14-notes">
              <div className="slide14-notes-title" style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Ventajas:</div>
              <ul className="slide14-note-list" style={{ listStyle: 'none', padding: 0 }}>
                <li className="slide14-note-item" style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--cyan)', marginRight: '0.5rem' }}>•</span>
                  Combina precisión histórica con datos en tiempo real.
                </li>
                <li className="slide14-note-item" style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--cyan)', marginRight: '0.5rem' }}>•</span>
                  Cada capa puede optimizarse independientemente.
                </li>
              </ul>

              <div className="slide14-notes-title" style={{ fontWeight: 'bold', color: 'var(--orange)' }}>Desventajas:</div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="slide14-note-item" style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--orange)', marginRight: '0.5rem' }}>•</span>
                  Mantener dos pipelines duplicados incrementa la complejidad.
                </li>
                <li className="slide14-note-item" style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--orange)', marginRight: '0.5rem' }}>•</span>
                  El mismo código debe escribirse dos veces.
                </li>
              </ul>
            </div>
          </div>

          <div className="split-col">
            <div className="split-titulo" style={{ color: 'var(--orange)' }}>Arquitectura Kappa</div>
            
            <p className="slide14-intro" style={{ color: 'var(--white)' }}>
              Propuesta por Jay Kreps (cofundador de Confluent), Kappa simplifica la arquitectura Lambda eliminando la capa batch. Todos los datos, históricos y en tiempo real, se procesan a través de un único pipeline de streaming. Cuando se necesita reprocesar el historial, se reproduce el log de eventos desde el inicio.
            </p>

            <div className="slide14-diagram" style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '6px',
            }}>
              <div style={{ marginBottom: '0.5rem' }}>Fuente de datos</div>
              <div style={{ textAlign: 'center', color: 'var(--orange)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>↓</div>
              
              <div style={{ padding: '0.5rem', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderLeft: '3px solid var(--orange)', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--orange)' }}>Capa Streaming</div>
              </div>
              
              <div style={{ textAlign: 'center', color: 'var(--orange)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>↓</div>
              
              <div style={{ padding: '0.5rem', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderLeft: '3px solid var(--orange)', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--orange)' }}>Capa de Servicio</div>
              </div>
              
              <div style={{ textAlign: 'center', color: 'var(--orange)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>↓</div>
              
              <div style={{ padding: '0.5rem', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderLeft: '3px solid var(--orange)' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--orange)' }}>Consultas</div>
              </div>
              
              <div style={{ marginTop: '0.8rem', fontSize: '0.75rem', color: 'var(--gray)', fontStyle: 'italic' }}>
                (Reprocesamiento histórico desde event log)
              </div>
            </div>

            <div className="slide14-notes">
              <div className="slide14-notes-title" style={{ fontWeight: 'bold', color: 'var(--orange)' }}>Ventajas:</div>
              <ul className="slide14-note-list" style={{ listStyle: 'none', padding: 0 }}>
                <li className="slide14-note-item" style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--orange)', marginRight: '0.5rem' }}>•</span>
                  Un solo pipeline: menos complejidad operativa.
                </li>
                <li className="slide14-note-item" style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--orange)', marginRight: '0.5rem' }}>•</span>
                  El código se escribe y mantiene una sola vez.
                </li>
              </ul>

              <div className="slide14-notes-title" style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Desventajas:</div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="slide14-note-item" style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--cyan)', marginRight: '0.5rem' }}>•</span>
                  No ideal cuando el reprocesamiento masivo es frecuente.
                </li>
                <li className="slide14-note-item" style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--cyan)', marginRight: '0.5rem' }}>•</span>
                  Requiere un sistema de streaming maduro (Apache Kafka).
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="highlight-box">
          Lambda es ideal cuando se necesitan ambos tipos de análisis con requisitos distintos. Kappa simplifica el panorama cuando el streaming puede cubrir todas las necesidades del negocio (Joyanes Aguilar, 2016).
        </div>

        <div className="apa">
          (Joyanes Aguilar, 2016; López Murphy y Zarza, 2017)
        </div>
      </div>
    </div>
  );
}
