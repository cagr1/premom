import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Methodology() {
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

    const cards = sectionRef.current?.querySelectorAll('.methodology-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const cards = language === 'es' ? [
    {
      icon: '/isometric/book-icon.png',
      title: 'Aprendizaje Lúdico',
      description: 'Metodología activa que estimula la curiosidad y el desarrollo cognitivo.',
      tag: 'Inicial',
    },
    {
      icon: '/isometric/student-icon.png',
      title: 'Atención Personalizada',
      description: 'Grupos reducidos para acompañar el ritmo único de cada niño.',
      tag: 'Básica',
    },
    {
      icon: '/isometric/microscope-icon.png',
      title: 'Valores y Disciplina',
      description: 'Formación integral en respeto, responsabilidad y excelencia.',
      tag: 'Integral',
    },
  ] : [
    {
      icon: '/isometric/book-icon.png',
      title: 'Learning Through Play',
      description: 'Active methodology that stimulates curiosity and cognitive development.',
      tag: 'Initial',
    },
    {
      icon: '/isometric/student-icon.png',
      title: 'Personalized Attention',
      description: 'Small groups to accompany each child\'s unique pace.',
      tag: 'Basic',
    },
    {
      icon: '/isometric/microscope-icon.png',
      title: 'Values and Discipline',
      description: 'Comprehensive training in respect, responsibility, and excellence.',
      tag: 'Holistic',
    },
  ]

  return (
    <section 
      id="metodologia" 
      className="section-padding bg-bg-section"
      ref={sectionRef}
    >
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            {language === 'es' ? 'NUESTRA METODOLOGÍA' : 'OUR METHODOLOGY'}
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">
            {language === 'es' ? 'Aprendemos jugando, crecemos con valores' : 'We learn through play, we grow with values'}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="methodology-card bg-white rounded-2xl p-8 md:p-10 card-hover reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-[120px] h-[120px] icon-3d object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-xl text-heading text-center mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-body text-text text-center mb-6">
                {card.description}
              </p>

              {/* Tag */}
              <div className="flex justify-center">
                <span className="px-4 py-2 bg-primary-soft text-primary rounded-full text-xs font-semibold uppercase tracking-wide">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
