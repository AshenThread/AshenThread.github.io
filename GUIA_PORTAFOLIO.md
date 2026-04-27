# Guia rapida para escalar el portafolio AshenThread

Esta guia esta pensada para trabajar solo con `portafolio.html`.

## 1) Estructura minima por proyecto

Cada proyecto debe tener:
- Nombre del proyecto
- Tipo (`unity`, `motion`, `ux`, `game`, `brand`)
- Imagen principal (JPG/PNG)
- Descripcion corta (objetivo + resultado)
- Etiquetas (`tags`) de herramientas o enfoque
- Opcional: link de video (YouTube/Vimeo)

## 2) Convencion recomendada de archivos

- Imagenes Unity: `Imagenes/Unity_IMG/proyecto-nombre-01.png`
- Imagenes Motion: `Imagenes/Motion_IMG/proyecto-nombre-01.png`
- Mantener ratio 16:9 cuando sea posible (1600x900 o 1920x1080)

## 3) Herramientas permitidas

Usa solo herramientas que realmente manejas:
- Unity
- C#
- After Effects
- Illustrator
- Premiere Pro
- Photoshop
- HTML/CSS/JavaScript

No incluir Blender.

## 4) Template para agregar tarjeta al grid

```html
<div class="portfolio-item" data-category="unity ux">
  <div class="portfolio-image">
    <img src="Imagenes/Unity_IMG/tu-proyecto.png" alt="Nombre del proyecto">
    <div class="portfolio-overlay">
      <h3>Nombre del proyecto</h3>
      <p>Descripcion corta del objetivo y del resultado.</p>
      <div class="portfolio-tags">
        <span class="tag">Unity</span>
        <span class="tag">UI en Unity</span>
      </div>
    </div>
  </div>
</div>
```

## 5) Categorias de filtro disponibles

- `unity`
- `motion`
- `ux`
- `game`
- `brand`

Puedes combinar varias categorias separadas por espacio.

Ejemplo:

```html
data-category="unity game ux"
```

## 6) Si quieres agregar video

Opcion recomendada:
- Mantener imagen en el grid
- Agregar link externo al video dentro de la descripcion del caso de estudio

Ejemplo:

```html
<p>Ver demo: <a href="https://youtube.com/..." target="_blank" rel="noopener noreferrer">YouTube</a></p>
```

## 7) Checklist antes de publicar

- Verificar que la imagen carga
- Verificar que el `data-category` coincide con filtros
- Revisar ortografia
- Confirmar que no aparece Blender
- Revisar version ES y EN en selector de idioma
