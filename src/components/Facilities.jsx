import { useLanguage } from '../i18n/LanguageContext'
import FadeInReveal from './FadeInReveal'

export default function Facilities() {
  const { language } = useLanguage()

  const facilities = language === 'es' 
    ? [
        {
          title: 'Aula Inicial',
          image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
          icon: 'book',
        },
        {
          title: 'Área de Juegos',
          image: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?w=600&q=80',
          icon: 'play',
        },
        {
          title: 'Espacio de Lectura',
          image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
          icon: 'book',
        },
        {
          title: 'Patio',
          image: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=600&q=80',
          icon: 'sun',
        },
        {
          title: 'Actividades',
          image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80',
          icon: 'paint',
        },
        {
          title: 'Fachada',
          image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
          icon: 'home',
        },
      ]
    : [
        {
          title: 'Initial Classroom',
          image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
          icon: 'book',
        },
        {
          title: 'Play Area',
          image: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?w=600&q=80',
          icon: 'play',
        },
        {
          title: 'Reading Space',
          image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
          icon: 'book',
        },
        {
          title: 'Playground',
          image: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=600&q=80',
          icon: 'sun',
        },
        {
          title: 'Activities',
          image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80',
          icon: 'paint',
        },
        {
          title: 'Front View',
          image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
          icon: 'home',
        },
      ]

  const renderBadgeIcon = (icon) => {
    switch (icon) {
      case 'book':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      case 'play':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'sun':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      case 'paint':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        )
      case 'home':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )
      default:
        return null
    }
  }

  const title = language === 'es' ? 'Espacios diseñados para aprender y crecer' : 'Spaces designed to learn and grow'

  return (
    <section 
      id="instalaciones" 
      className="section-padding relative"
      style={{ backgroundColor: '#F9F8F6' }}
    >
      <div className="container-main relative z-10">
        {/* Header */}
        <FadeInReveal className="text-center mb-16 md:mb-20">
          <p className="font-body text-sm uppercase tracking-widest text-primary font-bold mb-4">
            {language === 'es' ? 'NUESTRAS INSTALACIONES' : 'OUR FACILITIES'}
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-heading max-w-3xl mx-auto leading-tight">
            {title}
          </h2>
        </FadeInReveal>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <FadeInReveal 
              key={facility.title + index} 
              delay={index * 0.1}
            >
              <div
                className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-transparent hover:border-white/20"
              >
                {/* Image */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500" />

                {/* Badge Icon */}
                <div className="absolute top-5 right-5 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-primary group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-1">
                  {renderBadgeIcon(facility.icon)}
                </div>

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-heading font-bold text-2xl text-white drop-shadow-md mb-2">
                    {facility.title}
                  </h3>
                  <div className="w-12 h-1 bg-secondary rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                </div>
              </div>
            </FadeInReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
