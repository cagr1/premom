import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Admissions() {
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
      { threshold: 0.2 }
    )

    const steps = sectionRef.current?.querySelectorAll('.admission-step')
    steps?.forEach((step) => observer.observe(step))

    return () => observer.disconnect()
  }, [])

  const steps = language === 'es'
    ? [
        {
          number: '1',
          icon: '/isometric/globe-icon.png',
          title: 'Contacto',
          description: 'Envíanos un mensaje o llámanos para conocer más sobre nuestra propuesta educativa.',
        },
        {
          number: '2',
          icon: '/isometric/backpack-icon.png',
          title: 'Visita a la institución',
          description: 'Conoce nuestras instalaciones, maestros y vive la experiencia Preciosos Momentos.',
        },
        {
          number: '3',
          icon: '/isometric/ruler-icon.png',
          title: 'Inscripción',
          description: 'Completa el proceso de matriculación y únete a nuestra comunidad educativa.',
        },
      ]
    : [
        {
          number: '1',
          icon: '/isometric/globe-icon.png',
          title: 'Contact',
          description: 'Send us a message or call us to learn more about our educational proposal.',
        },
        {
          number: '2',
          icon: '/isometric/backpack-icon.png',
          title: 'School Visit',
          description: 'Visit our facilities, meet our teachers, and experience Preciosos Momentos.',
        },
        {
          number: '3',
          icon: '/isometric/ruler-icon.png',
          title: 'Enrollment',
          description: 'Complete the enrollment process and join our educational community.',
        },
      ]

  const renderStepIcon = (iconPath) => {
    return (
      <img
        src={iconPath}
        alt="Icono paso"
        className="w-[120px] h-[120px] icon-3d object-contain"
        loading="lazy"
      />
    )
  }

  const title = language === 'es' ? 'Proceso de admisión sencillo' : 'Simple admission process'
  const subtitle = language === 'es' 
    ? 'Tres pasos para formar parte de nuestra comunidad'
    : 'Three steps to join our community'

  return (
    <section 
      id="admisiones" 
      className="section-padding bg-primary-soft"
      ref={sectionRef}
    >
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-4">
            {title}
          </h2>
          <p className="font-body text-text text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.title + index}
              className="admission-step flex-1 flex flex-col items-center text-center relative reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[40px] left-[60%] w-[80%] border-t-2 border-dashed border-primary/40 -z-10" />
              )}

              {/* Step Number */}
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
                <span className="font-heading font-bold text-2xl text-white">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                {renderStepIcon(step.icon)}
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-xl text-heading mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-text text-sm leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
