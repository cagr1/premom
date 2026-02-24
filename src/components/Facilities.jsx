import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Facilities() {
  const sectionRef = useRef(null)
  const { language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const tiles = sectionRef.current?.querySelectorAll('.facility-tile')
    tiles?.forEach((tile) => observer.observe(tile))

    return () => observer.disconnect()
  }, [])

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
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/>
          </svg>
        )
      case 'play':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        )
      case 'sun':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
          </svg>
        )
      case 'paint':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.25 12a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm-3-6a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H4.25zM4.25 16.5a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75z"/>
          </svg>
        )
      case 'home':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
          </svg>
        )
      default:
        return null
    }
  }

  const title = language === 'es' ? 'Espacios diseñados para aprender' : 'Spaces designed to learn'

  return (
    <section 
      id="instalaciones" 
      className="section-padding bg-white"
      ref={sectionRef}
    >
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">
            {title}
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((facility, index) => (
            <div
              key={facility.title + index}
              className="facility-tile relative aspect-[4/3] rounded-2xl overflow-hidden reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-103"
                loading="lazy"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-heading/60 via-transparent to-transparent" />

              {/* Badge Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-heading">
                  {renderBadgeIcon(facility.icon)}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-heading font-semibold text-lg text-white">
                  {facility.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
