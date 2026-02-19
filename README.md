# Big Data: Modelos y Arquitecturas (U2 Act 2.2)

Presentación en formato web sobre **modelos y arquitecturas para Big Data**, desarrollada para la asignatura **IH733 – Uso de Big Data para Toma de Decisiones** (Unidad 2, Actividad 2.2).

## Contenido de la presentación

- **Portada** · **Introducción**
- **Tradicional vs Big Data**
- **MapReduce** (modelo y ejemplo)
- **Hadoop** y pilares (HDFS, YARN, MapReduce)
- **Ecosistema Apache** · **Apache Spark**
- **Arquitecturas de datos** · Data Warehouse vs Data Lake
- **Lakehouse, Mesh y Fabric**
- **Modelos de almacenamiento**: Inmon, Kimball, Data Vault
- **Lambda y Kappa**
- **Conclusión** · **Referencias**

## Demo en vivo

- **Producción (Vercel):** [https://bigdata-modelos-arquitecturas-u2act.vercel.app](https://bigdata-modelos-arquitecturas-u2act.vercel.app)

## Cómo ejecutar en local

```bash
# Instalar dependencias
npm install

# Desarrollo (con recarga en caliente)
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview
```

## Stack

- **React 19** + **Vite 7**
- Despliegue en **Vercel** (build: `npm run build`, salida: `dist`)

## Estructura relevante

```
src/
├── App.jsx          # Navegación y lista de slides
├── slides/          # Componentes por slide (Slide01Portada … Slide16Referencias)
└── main.jsx
```
