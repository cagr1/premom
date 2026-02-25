import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Testimonials() {
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

    const cards = sectionRef.current?.querySelectorAll('.testimonial-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const testimonials = language === 'es' ? [
    {
      text: "La mejor decisión para nuestra familia. Los maestros son excepcionales.",
      name: 'María García',
      role: 'Madre de familia',
      initials: 'MG',
    },
    {
      text: "Mi hijo creció no solo en conocimiento sino en valores y confianza.",
      name: 'Carlos Rodríguez',
      role: 'Padre de familia',
      initials: 'CR',
    },
    {
      text: "Un ambiente seguro y estimulante. Recomendado al 100%.",
      name: 'Ana Torres',
      role: 'Madre de familia',
      initials: 'AT',
    },
  ] : [
    {
      text: "The best decision for our family. The teachers are exceptional.",
      name: 'María García',
      role: 'Mother',
      initials: 'MG',
    },
    {
      text: "My son grew not only in knowledge but also in values and confidence.",
      name: 'Carlos Rodríguez',
      role: 'Father',
      initials: 'CR',
    },
    {
      text: "A safe and stimulating environment. 100% recommended.",
      name: 'Ana Torres',
      role: 'Mother',
      initials: 'AT',
    },
  ]

  return (
    <section 
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#F9F8F6' }}
      ref={sectionRef}
    >
      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">
            {language === 'es' ? 'Lo que dicen las familias' : 'What families say'}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card bg-white rounded-2xl p-8 card-hover relative reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Yellow Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-10 bg-secondary rounded-l-2xl" />

              {/* Quote Mark */}
              <span className="font-heading font-bold text-[72px] text-primary-soft leading-none">
                "
              </span>

              {/* Testimonial Text */}
              <p className="font-body text-text italic text-base mb-6 relative z-10">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center">
                  <span className="font-heading font-semibold text-primary text-sm">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Name & Role */}
                <div>
                  <p className="font-heading font-semibold text-heading text-sm">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-text/70 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
