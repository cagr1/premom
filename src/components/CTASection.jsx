import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function CTASection() {
  const sectionRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const { language, t } = useLanguage()

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sectionPosition = sectionRef.current?.offsetTop || 0
      const relativeScroll = scrollPosition - sectionPosition
      setScrollY(relativeScroll)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
      className="relative"
      style={{ backgroundColor: '#F9F8F6' }}
      ref={sectionRef}
    >
      {/* Extended Background Blobs - Visible beyond section bounds */}
      <div className="absolute -top-32 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ 
        background: 'linear-gradient(135deg, #32AA9D 0%, #2dd4bf 100%)',
        zIndex: 0
      }}></div>
      
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full opacity-15 blur-3xl pointer-events-none" style={{ 
        background: 'linear-gradient(135deg, #F4C756 0%, #fbbf24 100%)',
        zIndex: 0
      }}></div>

      {/* Floating Cards - Behind content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {/* Card 1 */}
        <div 
          className="absolute w-20 h-24 md:w-24 md:h-32 rounded-2xl shadow-lg md:rotate-[-12deg] transition-transform duration-75"
          style={{ 
            backgroundColor: 'white',
            top: '12%',
            left: '5%',
            transform: isDesktop 
              ? `rotate(-12deg) translateY(${-scrollY * 0.4}px)` 
              : 'rotate(-12deg)'
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F5F3' }}>
              <span className="text-xl md:text-2xl">📚</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="absolute w-24 h-28 md:w-28 md:h-36 rounded-2xl shadow-lg md:rotate-[8deg] transition-transform duration-75"
          style={{ 
            backgroundColor: 'white',
            top: '8%',
            right: '5%',
            transform: isDesktop 
              ? `rotate(8deg) translateY(${-scrollY * 0.35}px)` 
              : 'rotate(8deg)'
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF6E3' }}>
              <span className="text-2xl md:text-3xl">⭐</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          className="absolute w-16 h-20 md:w-20 md:h-28 rounded-2xl shadow-lg md:rotate-[-6deg] transition-transform duration-75"
          style={{ 
            backgroundColor: 'white',
            bottom: '20%',
            left: '8%',
            transform: isDesktop 
              ? `rotate(-6deg) translateY(${-scrollY * 0.45}px)` 
              : 'rotate(-6deg)'
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FDEEF3' }}>
              <span className="text-lg md:text-xl">🎨</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div 
          className="absolute w-20 h-26 md:w-24 md:h-32 rounded-2xl shadow-lg md:rotate-[10deg] transition-transform duration-75"
          style={{ 
            backgroundColor: 'white',
            bottom: '15%',
            right: '6%',
            transform: isDesktop 
              ? `rotate(10deg) translateY(${-scrollY * 0.3}px)` 
              : 'rotate(10deg)'
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F5F3' }}>
              <span className="text-xl md:text-2xl">🏫</span>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div 
          className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full opacity-50 md:opacity-60 transition-transform duration-75"
          style={{ 
            backgroundColor: '#F4C756',
            top: '30%',
            left: '2%',
            transform: isDesktop 
              ? `translateY(${-scrollY * 0.5}px)` 
              : 'none'
          }}
        />
        <div 
          className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full opacity-30 md:opacity-40 transition-transform duration-75"
          style={{ 
            backgroundColor: '#DB5D8E',
            bottom: '30%',
            right: '2%',
            transform: isDesktop 
              ? `translateY(${-scrollY * 0.55}px)` 
              : 'none'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container-main relative z-10 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Badge */}
          <div className="mb-6">
            <span 
              className="inline-block px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
              style={{ 
                backgroundColor: '#E8F5F3',
                color: '#32AA9D'
              }}
            >
              {language === 'es' ? 'Inscripciones 2025' : '2025 Admissions'}
            </span>
          </div>

          {/* Heading */}
          <h2 
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
            style={{ color: '#0F172A' }}
          >
            {t('cta', 'title')}
          </h2>

          {/* Description */}
          <p 
            className="font-body text-lg md:text-xl mb-10 max-w-lg mx-auto"
            style={{ color: '#475569' }}
          >
            {t('cta', 'subtitle')}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a 
              href="#admissions"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl font-heading font-semibold text-lg px-10 py-4 transition-all duration-500"
              style={{ 
                backgroundColor: '#32AA9D',
                color: 'white'
              }}
            >
              <span 
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-out translate-x-full group-hover:translate-x-0"
                style={{ backgroundColor: '#DB5D8E' }}
              />
              <span 
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-out translate-x-full group-hover:translate-x-0 delay-75"
                style={{ backgroundColor: '#0F172A' }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                <span className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-4">
                  {t('cta', 'button')}
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </span>
            </a>
          </div>

          {/* Contact Info */}
          <p 
            className="font-body text-sm mt-8"
            style={{ color: '#475569' }}
          >
            {language === 'es' ? 'También puedes escribirnos a ' : 'You can also write to us at '}
            <a 
              href="mailto:info@preciososmomentos.edu.ec" 
              className="font-medium transition-colors hover:underline"
              style={{ color: '#32AA9D' }}
            >
              info@preciososmomentos.edu.ec
            </a>
          </p>

        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}
