# Próximos Pasos

## FASE 1: Preparación

### 1. Configurar Proyecto React
- [ ] Inicializar proyecto con Vite
- [ ] Instalar Tailwind CSS
- [ ] Configurar Google Fonts (Poppins + Inter)
- [ ] Crear estructura de carpetas `/src/components`

### 2. Preparar Assets
- [ ] Crear `public/isometric/` para iconos 3D (.PNG)
- [ ] Crear `public/facilities/` para fotografías
- [ ] Agregar iconos .PNG:
  - Hero (160px): `hero-1.png`, `hero-2.png`
  - Metodología (120px): `book.png`, `heart.png`, `star.png`
  - Admisión (120px): `contact.png`, `visit.png`, `enroll.png`
- [ ] Agregar fotografías:
  - Hero: niño/niños en clase (WebP/JPEG)
  - Facilities: 6 fotos de espacios reales (WebP/JPEG)

---

## FASE 2: Componentes

### Estructura de Componentes
```
/src/components
├── Navbar.jsx      # Sticky nav con blur on scroll
├── Hero.jsx        # Left: H1+subtext+CTA | Right: Image + 2 floating icons
├── Methodology.jsx # 3 cards con iconos 120px
├── Facilities.jsx  # 6 fotos reales (NO SVGs)
├── Admissions.jsx  # 3 pasos proceso
├── Testimonials.jsx # 3 testimonios familias
├── CTASection.jsx  # CTA final
└── Footer.jsx      # 4 columnas
```

---

## FASE 3: Implementación por Componente

### Step 1: Configuración Global
- [ ] App.jsx - estructura principal
- [ ] index.css - variables CSS, tipografía, animaciones base
- [ ] Navbar.jsx - con scroll listener

### Step 2: Hero Section (LAYOUT CLAVE)

**Container:**
```html
<!-- Mobile: 90% width -->
<!-- Desktop: max-w-[1200px] mx-auto px-6 md:px-8 -->
<div class="max-w-[1200px] mx-auto px-6 md:px-8">
```

**Grid:**
```html
<!-- Mobile: grid-cols-1 -->
<!-- Desktop: md:grid-cols-2 -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
```

**Left (55%):**
```html
<div class="order-2 md:order-1">
  <!-- Eyebrow -->
  <!-- H1 con "amor" en #F5C758 -->
  <!-- Subtext -->
  <!-- CTA buttons -->
  <!-- Trust row -->
</div>
```

**Right (45%):**
```html
<div class="order-1 md:order-2 relative">
  <!-- Hero image -->
  <img 
    src="/hero-children.jpg" 
    alt="Niños en clase"
    class="max-h-[520px] w-full object-cover rounded-2xl"
  />
  <!-- Floating icons (position absolute) -->
  <img class="absolute floating-icon-1" src="/isometric/hero-1.png" />
  <img class="absolute floating-icon-2" src="/isometric/hero-2.png" />
</div>
```

**Mobile order:** Text (order-2) → Image (order-1)  
**Desktop order:** Text (order-1) → Image (order-2)

- [ ] Implementar grid responsive 1fr → 2fr
- [ ] Left: H1 + subtext + botones + trust row
- [ ] Right: Hero image + 2 iconos 3D flotando (position absolute)
- [ ] Animación float: `float 4s ease-in-out infinite`
- [ ] "amor" en H1 con color #F5C758
- [ ] Iconos con sombra: `drop-shadow(0 10px 20px rgba(0,0,0,0.08))`
- [ ] Imagen: max-h-[520px], rounded-2xl, object-cover

### Step 3: Metodología
- [ ] Grid de 3 tarjetas
- [ ] Iconos 3D de 120px cada uno (book, heart, star)
- [ ] Effect hover lift (4-6px)

### Step 4: Instalaciones (CRÍTICO)
- [ ] **6 fotografías reales** - esta sección vende
- [ ] Grid: 3 columnas desktop, 2 mobile, 1 small mobile
- [ ] Formato: Card con imagen + título
- [ ] Imagen: aspect-[4/3], rounded-xl, object-cover
- [ ] NO usar SVGs placeholder

### Step 5: Admisión
- [ ] Proceso de 3 pasos horizontales
- [ ] Iconos 3D de 120px (contact, visit, enroll)
- [ ] Connector lines entre pasos

### Step 6: Testimonios
- [ ] 3 tarjetas
- [ ] Línea de acento amarillo (#F5C758)
- [ ] Avatar con iniciales

### Step 7: CTA Final
- [ ] Background pattern sutil
- [ ] Botón prominence

### Step 8: Footer
- [ ] 4 columnas desktop
- [ ] Stacked mobile
- [ ] Dark theme (#0F172A)

---

## FASE 4: Espaciado y Responsive

### Container (todas las secciones)
```css
/* Base */
max-width: 1200px;
margin: 0 auto;

/* Desktop */
padding: 0 32px;  /* px-8 */

/* Mobile */
padding: 0 24px;  /* px-6 */
width: 90%;
```

### Vertical Spacing
```css
/* Desktop */
padding-top: 80px;    /* py-20 */
padding-bottom: 80px; /* py-20 */

/* Mobile */
padding-top: 56px;    /* py-14 */
padding-bottom: 56px; /* py-14 */
```

### Grid Gaps
```css
gap: 32px;  /* gap-8 - mínimo */
gap: 48px;  /* gap-12 - ideal */
```

---

## FASE 5: Animaciones (Motion System)

### AnimSaciones sutiles:
- [ ] Fade-in on scroll (IntersectionObserver)
- [ ] Icon hover lift (4-6px)
- [ ] Card hover elevation
- [ ] Smooth navbar transition
- [ ] Float para iconos 3D en Hero (4s infinite)

### Evitar:
- ❌ Animaciones flashy
- ❌ Motion pesado
- ❌ Parallax abuse

---

## FASE 6: Git y Despliegue
- [ ] Inicializar Git
- [ ] Primer commit
- [ ] Push a GitHub
- [ ] Configurar hosting (Vercel/Netlify/GitHub Pages)

---

## Quality Gates

### Layout
- [ ] Container: max-w-[1200px] mx-auto px-6 md:px-8
- [ ] Hero grid: grid-cols-1 md:grid-cols-2
- [ ] Mobile order swap para Hero

### Imágenes
- [ ] Hero: max-h-[520px], rounded-2xl, object-cover
- [ ] Facilities: aspect-[4/3], rounded-xl

### Espaciado
- [ ] Desktop: py-20
- [ ] Mobile: py-14
- [ ] Gap: gap-8 mínimo, gap-12 ideal

### Contenido
- [ ] Poppins en TODOS encabezados
- [ ] Inter en TODO texto de cuerpo
- [ ] Variables CSS para colores
- [ ] "amor" en H1 con #F5C758

### Navbar
- [ ] Navbar: transparent → white blur

### Iconos
- [ ] Iconos flotando en Hero (position absolute)
- [ ] Cards con hover lift (4-6px)
- [ ] **Facilities con FOTOS REALES** (no SVGs)
- [ ] Iconos .PNG (no SVG)
- [ ] Sombra iconos: `drop-shadow(0 10px 20px rgba(0,0,0,0.08))`

### Estilo
- [ ] Testimonios con línea acento amarillo
- [ ] CTA con patrón sutil
- [ ] Footer 4 columnas / stacked mobile

### Performance
- [ ] IntersectionObserver para reveals
- [ ] Responsive breakpoints
- [ ] Animaciones sutiles (no flashy)

---

## Breakpoints

| Breakpoint | Ancho | px- | py- |
|------------|-------|-----|-----|
| Mobile | < 640px | px-6 | py-14 |
| Tablet | 640-1024px | px-6 | py-14 |
| Desktop | > 1024px | px-8 | py-20 |

---

## Notas Importantes

### Iconos 3D - Reglas de Consistencia
- Misma perspectiva (~30°)
- Mismo estilo de iluminación
- Fondo transparente
- Proporciones similares
- Tamaño visual consistente
- **SOLO .PNG**

### Hero Layout
- Left 55%: contenido textual
- Right 45%: imagen principal
- 2 iconos 3D flotando en área derecha (position absolute)
- Mobile: imagen ARRIBA (order-1), texto ABAJO (order-2)

### Formato Imágenes
- WebP preferido
- JPEG aceptable
- PNG solo para iconos/transparencias

---

*Documento de seguimiento. Actualizar conforme avanza el proyecto.*
