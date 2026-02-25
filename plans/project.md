# Proyecto: Preciosos Momentos - Sitio Web Institucional

## Visión General

**Institución:** Unidad Educativa Particular Preciosos Momentos  
**Ubicación:** Machala, El Oro, Ecuador  
**Nivel Educativo:** Educación Inicial (niños 1-8 años)  
**Tipo:** Sitio web institucional corporativo

## Referencia de Diseño

**Inspiración:** Singapore American School (SAS)  
**Enfoque:** Estilo premium institucional pero más cálido, visual y humano  
**Sensación objetivo:** Modern · Professional · Warm · Trustworthy

### Lo que BUSCAMOS:
- Diseño premium de escuela internacional
- Tono cálido y acogedor (no fría institución)
- Fotografía real como base visual
- Iconos 3D como acento secundario
- Profesional pero accesible

### Lo que EVITAMOS:
- Sitios de kindergarten económicos
- Portales institucionales aburridos
- Estética de startup tecnológica
- Iconos genéricos sin personalidad
- Mezclar estilos de iconos

---

## Arquitectura del Proyecto

### Estructura de Archivos
```
/premom
├── /public
│   └── /isometric        # Iconos 3D (SOLO .PNG)
│       ├── hero-1.png
│       ├── hero-2.png
│       ├── book.png
│       ├── heart.png
│       ├── star.png
│       ├── contact.png
│       ├── visit.png
│       └── enroll.png
├── /src
│   ├── /components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Methodology.jsx
│   │   ├── Facilities.jsx
│   │   ├── Admissions.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTASection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── index.html
└── package.json
```

### Stack Tecnológico
- **Framework:** React (Vite)
- **Estilos:** Tailwind CSS
- **Fuentes:** Google Fonts (Poppins + Inter)
- **Iconos:** Archivos .PNG en `public/isometric/`

---

## Sistema de Colores (CSS Variables)
```css
:root {
  --primary:        #32AA9D;      /* Verde Menta - principal */
  --primary-soft:   #E8F5F3;      /* Verde Menta claro - fondos */
  --secondary:      #F4C756;      /* Amarillo dorado */
  --secondary-soft: #FEF6E3;      /* Amarillo dorado claro */
  --accent:         #DB5D8E;      /* Rosa Dulce Recuerdo - acentos */
  --accent-soft:    #FDEEF3;      /* Rosa claro */
  --beige:          #F9F8F6;      /* Beige - fondo general */
  
  --heading:        #0F172A;      /* Azul oscuro - encabezados */
  --text:           #475569;      /* Gris - texto cuerpo */
  --bg-section:     #F8FAFC;      /* Gris muy claro - fondos sección */
  --white:          #FFFFFF;
}
```

### Sistema Tipográfico
- **Encabezados:** Nunito (600/700/800) - amigable, moderno, educativo
- **Cuerpo:** Nunito (400/500) - legible, amigable
- **Especial:** Great Vibes - para acentos calligráficos en palabras destacadas

### Paleta de Colores
| Color | Hex | Nombre | Uso |
|-------|-----|--------|-----|
| Primary | #32AA9D | Verde Menta | Botones, links principales |
| Primary Soft | #E8F5F3 | Verde Menta Claro | Fondos de secciones |
| Secondary | #F4C756 | Amarillo Dorado | Acentos, highlights |
| Secondary Soft | #FEF6E3 | Amarillo Dorado Claro | Fondos sutiles |
| Accent | #DB5D8E | Rosa Dulce Recuerdo | Botones CTA, acentos especiales |
| Accent Soft | #FDEEF3 | Rosa Claro | Fondos de tarjetas |
| Beige | #F9F8F6 | Beige | Fondo general de la página |

### Escala Tipográfica
| Elemento | Tamaño | Peso | Línea |
|----------|--------|------|-------|
| H1 Hero | 56px | 700 | 1.15 |
| H2 Sección | 36px | 700 | 1.2 |
| H3 Subtítulo | 22px | 600 | 1.35 |
| Cuerpo | 17px | 400 | 1.7 |
| Label | 13px | 600 | - |

---

## Sistema de Layout (Responsive)

### Container Principal
```css
/* Desktop */
max-width: 1200px;
margin: 0 auto;
padding: 0 24px;  /* px-6 */

/* Mobile */
width: 90%;
padding: 0 16px;  /* px-4 */

/* Clase base Tailwind */
max-w-[1200px] mx-auto px-6 md:px-8
```

### Espaciado Vertical
| Sección | Desktop | Mobile |
|---------|---------|--------|
| py | 80px (py-20) | 56px (py-14) |
| gap mínimo | 32px (gap-8) | 32px (gap-8) |
| gap ideal | 48px (gap-12) | 48px (gap-12) |

---

## Sistema de Imágenes

### Formato Preferido
- ✅ WebP (preferido)
- ✅ JPEG (aceptable)
- ❌ PNG solo para iconos/transparencias

### Hero Image
```css
max-height: 520px;
object-fit: cover;
border-radius: 24px;  /* rounded-2xl */
```

### Facilities Images
```css
aspect-ratio: 4 / 3;
border-radius: 16px;  /* rounded-xl */
```

---

## Sistema de Grids

### Hero Grid
```css
/* Mobile first */
grid-template-columns: 1fr;

/* Desktop */
grid-template-columns: repeat(2, 1fr);  /* md:grid-cols-2 */

/* Layout Desktop */
Left:  contenido textual (55%)
Right: imagen (45%)

/* Layout Mobile */
Text arriba
Image abajo
```

---

## Reglas de Consistencia - Iconos 3D

### Requisitos para todos los iconos:
- ✅ Misma perspectiva (~30°)
- ✅ Mismo estilo de iluminación
- ✅ Fondo transparente
- ✅ Proporciones similares
- ✅ Tamaño visual consistente
- ✅ Formato: **.PNG** (no SVG)

### Evitar:
- ❌ Mezclar estilos diferentes
- ❌ Iconos demasiado detallados junto a minimalistas
- ❌ Colores saturados excesivos

---

## Sistema de Iconos 3D

### Ubicación
`public/isometric/` - **SOLO archivos .PNG**

### Usos y Tamaños
| Sección | Icono | Tamaño |
|---------|-------|--------|
| Hero | 2 iconos flotantes (position absolute) | 160px |
| Metodología | 3 iconos principales | 120px |
| Admisión | 3 iconos proceso | 120px |

### Estilo Común
```css
/* Todos los iconos 3D usan esta sombra */
filter: drop-shadow(0 10px 20px rgba(0,0,0,0.08));
```

### Iconos Necesarios (.PNG)
1. `hero-1.png` - Elemento decorativo flotante Hero
2. `hero-2.png` - Segundo elemento decorativo Hero
3. `book.png` - Aprendizaje lúdico (Metodología)
4. `heart.png` - Atención personalizada (Metodología)
5. `star.png` - Valores y disciplina (Metodología)
6. `contact.png` - Contacto (Admisión)
7. `visit.png` - Visita (Admisión)
8. `enroll.png` - Inscripción (Admisión)

---

## Layouts Específicos

### Hero Section Layout

**Desktop (md:grid-cols-2)**
```
+----------------------------------------------------------+
|  NAVBAR (sticky)                                         |
+----------------------------------------------------------+
|                                                          |
|  LEFT (55%)              RIGHT (45%)                    |
|  +------------------+    +------------------------+      |
|  | EYEBROW          |    |                        |      |
|  | MACHALA · ECUADOR|    |   HERO IMAGE          |      |
|  +------------------+    |   max-h: 520px        |      |
|  | H1               |    |   rounded-2xl         |      |
|  | Educación        |    |   object-cover        |      |
|  | inicial          |    |                        |      |
|  | con [amor] y     |    |   [floating icon 3D] |      |
|  | excelencia       |    |        [floating icon]|      |
|  +------------------+    |              3D         |      |
|  | Subtext          |    |                        |      |
|  +------------------+    +------------------------+      |
|  | [CTA Button]     |                                     |
|  | [Sec Button]     |                                     |
|  +------------------+                                     |
|  | 500+ Alumnos · 15 Años · Bilingüe                     |
|  +--------------------------------------------------+    |
+----------------------------------------------------------+
```

**Mobile (grid-cols-1)**
```
+---------------------------+
| NAVBAR                    |
+---------------------------+
| EYEBROW                   |
| H1                        |
| Subtext                   |
| [CTA] [Sec]               |
| Trust row                 |
+---------------------------+
| HERO IMAGE                |
| max-h: 520px              |
| [floating icons]          |
+---------------------------+
```

**Detalle técnico Hero:**
- Left: 55% width - contenido de texto
- Right: 45% width - imagen principal
- 2 iconos 3D flotando en el área derecha (position absolute)
- Animación float en iconos: `float 4s ease-in-out infinite`
- "amor" en H1 con color #F5C758
- Imagen: max-height 520px, rounded-2xl, object-cover

---

## Sistema Visual Principal

### Principio Clave
> Los iconos 3D NO reemplazan contenido real. Son elementos de apoyo visual.

### Composición
- **Fotografía real** como base visual (especialmente Instalaciones)
- **Iconos 3D (.PNG)** como acento decorativo
- **Fondos limpios** para destacar contenido

---

## Estructura del Sitio

### Secciones Planificadas

1. **Navbar** - Navegación sticky con scroll effect
2. **Hero** - Foto real de niños + 2 iconos 3D flotantes (position absolute)
3. **Metodología** - 3 tarjetas con iconos 3D (120px)
4. **Instalaciones** - 6 fotografías reales de espacios
5. **Admisión** - Proceso de 3 pasos con iconos 3D
6. **Testimonios** - 3 tarjetas de familias
7. **CTA Final** - Llamada a acción para inscripciones
8. **Footer** - 4 columnas con información de contacto

---

## Sistema de Animaciones (Motion)

### AnimSaciones Permitidas
- **Fade-in on scroll** - Reveal de secciones
- **Icon hover lift** - 4-6px hacia arriba
- **Card hover elevation** - Sombra más pronunciada
- **Smooth navbar transition** - Transición de scroll
- **Float** - Para iconos 3D en Hero (4s infinite)

### Evitar
- ❌ Animaciones flashy o excesivas
- ❌ Motion pesado que distraiga
- ❌ Abuso de parallax
- ❌ GSAP o timelines complejos

---

## Diferenciación Clave

### Elementos Premium:
- Footer en #0F172A para máximo contraste
- Fotografías reales de instalaciones (no SVGs)
- Patrón sutil en sección CTA
- Líneas de acento amarillas en testimonios

---

## Breakpoints Recomendados

| Breakpoint | Ancho | Características |
|------------|-------|-----------------|
| Mobile | < 640px | 90% width, py-14, single column |
| Tablet | 640-1024px | px-6, py-14, grid adjustments |
| Desktop | > 1024px | max-w-1200px, px-8, py-20, 2 columns |

---

## Links de Referencia

- **Repositorio:** https://github.com/cagr1/premom.git
- **Inspiración:** https://www.sas.edu.sg/
- **Correo institucional:** info@preciososmomentos.edu.ec
- **Iconos:** `public/isometric/*.png`

---

## Instalaciones - Fotografías

Esta sección es la más importante para una escuela. Formato: Card con imagen real + título.

1. **Aula Inicial** - Ambiente de aprendizaje
2. **Área de Juegos** - Espacio de recreation
3. **Espacio de Lectura** - Biblioteca/lectura
4. **Patio** - Área abierta
5. **Actividades** - Clases/actividades
6. **Fachada** - Vista exterior de la institución

### Especificaciones
- aspect-ratio: 4/3
- rounded-xl
- object-fit: cover

---

*Documento actualizado. Revisión: 24 feb 2026*
