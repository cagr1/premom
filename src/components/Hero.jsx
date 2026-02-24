import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="pt-[72px]">
      {/* Background gradient */}
      <div className="bg-gradient-to-r from-white to-primary-soft min-h-screen">
        <div className="container-main py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Content */}
            <div className="order-2 md:order-1">
              {/* Eyebrow */}
              <p 
                className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-4 animate-fade-up"
                style={{ animationDelay: '0ms' }}
              >
                {t('hero', 'location')}
              </p>

              {/* H1 */}
              <h1 
                className="font-heading font-bold text-4xl md:text-5xl lg:text-[56px] leading-[1.15] text-heading mb-6 animate-fade-up"
                style={{ animationDelay: '150ms' }}
              >
                {t('hero', 'title')}
                <br />
                <span className="text-secondary">{t('hero', 'withLove')}</span> {t('hero', 'andExcellence')}
              </h1>

              {/* Subtitle */}
              <p 
                className="font-body text-base md:text-lg text-text mb-8 max-w-lg animate-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                {t('hero', 'subtitle')}
              </p>

              {/* Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-up"
                style={{ animationDelay: '450ms' }}
              >
                <button className="btn-primary">
                  {t('hero', 'ctaPrimary')}
                </button>
                <button className="btn-secondary">
                  {t('hero', 'ctaSecondary')}
                </button>
              </div>

              {/* Trust Row */}
              <div 
                className="flex items-center gap-4 text-sm text-text font-body animate-fade-up"
                style={{ animationDelay: '600ms' }}
              >
                <span>500+ {t('hero', 'students')}</span>
                <span className="text-primary">·</span>
                <span>15 {t('hero', 'years')}</span>
                <span className="text-primary">·</span>
                <span>{t('hero', 'bilingual')}</span>
              </div>
            </div>

            {/* Right Content - Image + Floating Icons */}
            <div className="order-1 md:order-2 relative">
              {/* Hero Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80"
                  alt={t('hero', 'imageAlt')}
                  className="w-full max-h-[520px] object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
                
                {/* Floating Icon 1 */}
                <img
                  src="/isometric/book.png"
                  alt="Icono aprendizaje"
                  className="absolute -top-8 -left-8 w-32 md:w-40 icon-3d animate-float hidden"
                  style={{ animationDelay: '0ms' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                  loading="lazy"
                />
                
                {/* Floating Icon 2 */}
                <img
                  src="/isometric/heart.png"
                  alt="Icono cuidado"
                  className="absolute -bottom-6 -right-6 w-28 md:w-32 icon-3d animate-float hidden"
                  style={{ animationDelay: '1000ms' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                  loading="lazy"
                />
              </div>

              {/* Fallback floating elements if no icons */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-soft rounded-full flex items-center justify-center animate-float md:hidden">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-soft rounded-full flex items-center justify-center animate-float md:hidden" style={{ animationDelay: '1s' }}>
                <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
