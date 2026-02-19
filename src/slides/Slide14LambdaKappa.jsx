export default function Slide14LambdaKappa() {
  return (
    <div className="slide">
      <div className="slide-titulo">Arquitecturas Lambda y Kappa</div>
      <div className="slide-subtitulo">Procesamiento batch y streaming</div>

      <div className="slide-body">
        <div className="split">
          <div className="split-col">
            <div className="split-titulo" style={{ color: 'var(--cyan)' }}>Arquitectura Lambda</div>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--white)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Propuesta por Nathan Marz, Lambda combina dos capas de procesamiento paralelas que trabajan sobre los mismos datos: la capa batch (lotes históricos procesados con alta precisión) y la capa speed (streaming en tiempo real para baja latencia). Ambas alimentan una capa de servicio que unifica los resultados para las consultas.
            </p>

            <div style={{
              backgroundColor: 'var(--bg-card)',
              padding: '1.5rem',
              borderRadius: '6px',
              marginBottom: '1.5rem',
              fontSize: '0.85rem'
            }}>
              <div style={{ marginBottom: '0.5rem' }}>Fuente de datos</div>
              <div style={{ textAlign: 'center', color: 'var(--cyan)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>↓</div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.5rem', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderLeft: '3px solid var(--cyan)' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Capa Batch</div>
                </div>
                <div style={{ padding: '0.5rem', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderLeft: '3px solid var(--cyan)' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Capa Speed</div>
                </div>
              </div>
              
              <div style={{ textAlign: 'center', color: 'var(--cyan)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>↓</div>
              
              <div style={{ padding: '0.5rem', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderLeft: '3px solid var(--cyan)' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Capa de Servicio</div>
              </div>
              
              <div style={{ textAlign: 'center', color: 'var(--cyan)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>↓</div>
              
              <div style={{ padding: '0.5rem', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderLeft: '3px solid var(--cyan)' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--cyan)' }}>Consultas</div>
              </div>
            </div>

            <div style={{ fontSize: '0.9rem' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--cyan)', marginBottom: '0.8rem' }}>Ventajas:</div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                <li style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--cyan)', marginRight: '0.5rem' }}>•</span>
                  Combina precisión histórica con datos en tiempo real.
                </li>
                <li style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--cyan)', marginRight: '0.5rem' }}>•</span>
                  Cada capa puede optimizarse independientemente.
                </li>
              </ul>

              <div style={{ fontWeight: 'bold', color: 'var(--orange)', marginBottom: '0.8rem' }}>Desventajas:</div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--orange)', marginRight: '0.5rem' }}>•</span>
                  Mantener dos pipelines duplicados incrementa la complejidad.
                </li>
                <li style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--orange)', marginRight: '0.5rem' }}>•</span>
                  El mismo código debe escribirse dos veces.
                </li>
              </ul>
            </div>
          </div>

          <div className="split-col">
            <div className="split-titulo" style={{ color: 'var(--orange)' }}>Arquitectura Kappa</div>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--white)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Propuesta por Jay Kreps (cofundador de Confluent), Kappa simplifica la arquitectura Lambda eliminando la capa batch. Todos los datos, históricos y en tiempo real, se procesan a través de un único pipeline de streaming. Cuando se necesita reprocesar el historial, se reproduce el log de eventos desde el inicio.
            </p>

            <div style={{
              backgroundColor: 'var(--bg-card)',
              padding: '1.5rem',
              borderRadius: '6px',
              marginBottom: '1.5rem',
              fontSize: '0.85rem'
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

            <div style={{ fontSize: '0.9rem' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--orange)', marginBottom: '0.8rem' }}>Ventajas:</div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                <li style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--orange)', marginRight: '0.5rem' }}>•</span>
                  Un solo pipeline: menos complejidad operativa.
                </li>
                <li style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--orange)', marginRight: '0.5rem' }}>•</span>
                  El código se escribe y mantiene una sola vez.
                </li>
              </ul>

              <div style={{ fontWeight: 'bold', color: 'var(--cyan)', marginBottom: '0.8rem' }}>Desventajas:</div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'var(--gray)' }}>
                  <span style={{ color: 'var(--cyan)', marginRight: '0.5rem' }}>•</span>
                  No ideal cuando el reprocesamiento masivo es frecuente.
                </li>
                <li style={{ paddingLeft: '1.5rem', color: 'var(--gray)' }}>
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
