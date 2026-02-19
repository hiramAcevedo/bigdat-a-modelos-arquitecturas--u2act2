export default function Slide13ModelosAlmacen() {
  return (
    <div className="slide">
      <div className="slide-titulo">Modelos de almacén de datos</div>
      <div className="slide-subtitulo">Inmon, Kimball y Data Vault</div>

      <div className="slide-body">
        <p className="p-slide">
          Dentro del mundo de los Data Warehouses, tres modelos clásicos definen cómo se organiza y estructura la información. Cada uno responde a una filosofía distinta sobre cómo debe fluir el dato desde las fuentes hasta el análisis, con implicaciones directas en el costo, la flexibilidad y la velocidad de entrega (Todbi.com, s.f.).
        </p>

        <div className="tabla-wrap">
          <table>
            <thead>
              <tr>
                <th>Criterio</th>
                <th>Inmon (Top-Down)</th>
                <th>Kimball (Bottom-Up)</th>
                <th>Data Vault</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enfoque</td>
                <td>Corporativo: de lo general a lo particular</td>
                <td>Departamental: de lo particular a lo general</td>
                <td>Híbrido: auditabilidad e historial completo</td>
              </tr>
              <tr>
                <td>Estructura</td>
                <td>Tercera forma normal (normalizado)</td>
                <td>Esquema estrella o copo de nieve (dimensional)</td>
                <td>Hub, Satellite y Link</td>
              </tr>
              <tr>
                <td>Complejidad de diseño</td>
                <td>Alta: requiere modelo empresarial completo</td>
                <td>Moderada: diseño iterativo por área</td>
                <td>Alta: flexible pero más componentes</td>
              </tr>
              <tr>
                <td>Velocidad de entrega</td>
                <td>Lenta: modelo completo antes de entregar</td>
                <td>Rápida: entrega por departamento</td>
                <td>Media: escalable pero inicial compleja</td>
              </tr>
              <tr>
                <td>Ventaja clave</td>
                <td>Consistencia y fuente única de verdad</td>
                <td>Entrega rápida de valor por área de negocio</td>
                <td>Escalabilidad y trazabilidad histórica completa</td>
              </tr>
              <tr>
                <td>Mejor para</td>
                <td>Grandes corporaciones con visión unificada</td>
                <td>Departamentos que necesitan resultados rápidos</td>
                <td>Entornos regulados con datos cambiantes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="highlight-box">
          <strong>La elección entre estos modelos no es técnica sino estratégica:</strong> depende del tamaño de la organización, la velocidad de cambio del negocio y el nivel de gobernanza requerido por la industria.
        </div>

        <div className="apa">
          (Todbi.com, s.f.; López Murphy y Zarza, 2017)
        </div>
      </div>
    </div>
  );
}
