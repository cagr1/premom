# Estado Actual del Proyecto

## Fecha: 24 de febrero de 2026

### Repositorio
- **URL:** https://github.com/cagr1/premom.git
- **Estado:** Vacío (recién creado)
- **Rama principal:** main (por defecto)

### Estado del Código
- **Archivos:** 0
- **Commits:** 0

### Documentación
- [x] `plans/project.md` - Definición del proyecto ✓
- [x] `plans/now.md` - Este archivo
- [x] `plans/next.md` - Próximos pasos

---

## Lo que YA está definido

| Aspecto | Estado |
|---------|--------|
| Nombre institución | ✓ Definido |
| Colores (CSS variables) | ✓ Especificados |
| Tipografía (Poppins + Inter) | ✓ Elegida |
| Estructura de 8 secciones | ✓ Diseñada |
| Iconos 3D (.PNG) | ✓ En `public/isometric/` |
| Layout Hero | ✓ Left 55% / Right 45% |
| Responsive | ✓ Desktop/mobile definidos |
| Stack técnico | ✓ React + Vite + Tailwind |

---

## Sistema de Layout (Responsive)

### Container Principal
- **Desktop:** max-w-[1200px] mx-auto px-8
- **Mobile:** 90% width px-6

### Espaciado Vertical
- **Desktop:** py-20 (80px)
- **Mobile:** py-14 (56px)

### Gap
- **Mínimo:** gap-8 (32px)
- **Ideal:** gap-12 (48px)

---

## Sistema de Grids

### Hero
- **Mobile:** grid-cols-1
- **Desktop:** md:grid-cols-2
- **Left:** 55% text
- **Right:** 45% image

### Mobile Layout
```
Text (H1, subtext, buttons, trust)
Image (abajo)
```

---

## Sistema de Imágenes

### Formato
- WebP (preferido)
- JPEG (aceptable)

### Hero
- max-height: 520px
- object-fit: cover
- rounded-2xl

### Facilities
- aspect-ratio: 4/3
- rounded-xl

---

## Nueva Estructura de Proyecto

```
/premom
├── public/
│   └── isometric/      ← Iconos 3D (SOLO .PNG)
│       ├── hero-1.png    (160px)
│       ├── hero-2.png    (160px)
│       ├── book.png      (120px)
│       ├── heart.png     (120px)
│       ├── star.png      (120px)
│       ├── contact.png   (120px)
│       ├── visit.png     (120px)
│       └── enroll.png    (120px)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx      ← Layout: left H1+subtext+CTA, right hero image + 2 floating icons
│   │   ├── Methodology.jsx
│   │   ├── Facilities.jsx   ← Fotos reales (NO SVGs)
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

---

## Reglas de Consistencia Iconos 3D

### Deben tener todos:
- ✅ Misma perspectiva (~30°)
- ✅ Mismo estilo de iluminación
- ✅ Fondo transparente
- ✅ Proporciones similares
- ✅ Tamaño visual consistente
- ✅ Formato: **.PNG**

### Evitar:
- ❌ Mezclar estilos
- ❌ Iconos muy detallados + minimalistas
- ❌ Colores saturados

---

## Assets Necesarios

### Iconos 3D (public/isometric/) - SOLO .PNG
- [ ] `hero-1.png` - Elemento decorativo (160px)
- [ ] `hero-2.png` - Elemento decorativo (160px)
- [ ] `book.png` - Aprendizaje lúdico (120px)
- [ ] `heart.png` - Atención personalizada (120px)
- [ ] `star.png` - Valores y disciplina (120px)
- [ ] `contact.png` - Contacto (120px)
- [ ] `visit.png` - Visita (120px)
- [ ] `enroll.png` - Inscripción (120px)

### Fotografías Reales
- [ ] Hero: niño/niños en clase (WebP/JPEG)
- [ ] Facilities: 6 fotos de espacios reales (WebP/JPEG)

### Estilo de sombra para todos los iconos
```css
filter: drop-shadow(0 10px 20px rgba(0,0,0,0.08));
```

---

## Lo que FALTA por hacer

- [ ] Configurar proyecto React con Vite
- [ ] Crear estructura de carpetas
- [ ] Agregar iconos .PNG en public/isometric/
- [ ] Agregar fotografías en public/
- [ ] Implementar Navbar con scroll effect
- [ ] Implementar Hero (left 55% / right 45%)
- [ ] Implementar sección Metodología
- [ ] Implementar sección Instalaciones con FOTOS REALES
- [ ] Implementar proceso de Admisión
- [ ] Implementar Testimonios
- [ ] Implementar CTA Final
- [ ] Implementar Footer
- [ ] Configurar Git y primer commit

---

*Este archivo refleja el estado actual. Actualizar regularmente.*
