import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function CTASection() {
  const sectionRef = useRef(null)
  const { language, t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      className="section-padding bg-primary relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Subtle Pattern Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="white"/>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="container-main relative z-10">
        {/* Content */}
        <div className="max-w-2xl mx-auto text-center reveal">
          {/* Label */}
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-6">
            {language === 'es' ? 'Inscripciones 2025 Abiertas' : '2025 Admissions Open'}
          </span>

          {/* H2 */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            {t('cta', 'title')}
          </h2>

          {/* Subtitle */}
          <p className="font-body text-white/80 text-lg mb-8 max-w-lg mx-auto">
            {t('cta', 'subtitle')}
          </p>

          {/* Button */}
          <button className="bg-white text-primary font-heading font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
            {t('cta', 'button')}
          </button>

          {/* Contact Info */}
          <p className="font-body text-white/70 text-sm mt-8">
            {language === 'es' ? 'También puedes escribirnos a ' : 'You can also write to us at '}
            <a 
              href="mailto:info@preciososmomentos.edu.ec" 
              className="text-white underline underline-offset-2 hover:text-white/80"
            >
              info@preciososmomentos.edu.ec
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
