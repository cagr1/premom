import { useLanguage } from '../i18n/LanguageContext'
import { motion } from 'framer-motion'

export default function Hero() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  }

  return (
    <section className="pt-[72px] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary-soft/50 z-0"></div>
      
      {/* Abstract blurred blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="container-main py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-primary rounded-full"></span>
              <p className="font-body text-xs md:text-sm uppercase tracking-widest text-primary font-bold">
                {t('hero', 'location')}
              </p>
            </motion.div>

            {/* H1 */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading font-extrabold text-5xl md:text-5xl lg:text-6xl xl:text-[68px] leading-[1.1] text-heading mb-6 tracking-tight"
            >
              {t('hero', 'title')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent relative inline-block">
                {t('hero', 'withLove')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              {t('hero', 'andExcellence')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="font-body text-lg md:text-xl text-text/80 mb-10 max-w-lg leading-relaxed mix-blend-multiply"
            >
              {t('hero', 'subtitle')}
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 mb-12"
            >
              <button className="btn-primary flex items-center justify-center gap-2 group shadow-[0_8px_20px_rgba(50,170,158,0.2)] hover:shadow-[0_8px_30px_rgba(50,170,158,0.35)] relative overflow-hidden text-base py-4 px-8 rounded-xl font-semibold">
                <span className="relative z-10">{t('hero', 'ctaPrimary')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <button className="btn-secondary py-4 px-8 rounded-xl text-base font-semibold group flex items-center justify-center gap-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all">
                {t('hero', 'ctaSecondary')}
              </button>
            </motion.div>

            {/* Trust Row */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 text-sm md:text-base text-heading font-medium bg-white/60 backdrop-blur-sm py-4 px-6 rounded-2xl border border-white/50 shadow-sm w-fit"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary-soft border-2 border-white flex items-center justify-center shadow-sm">
                      <span className="text-xs text-primary">🧒</span>
                    </div>
                  ))}
                </div>
                <span>500+ <span className="text-text font-normal">{t('hero', 'students')}</span></span>
              </div>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>15 <span className="text-text font-normal">{t('hero', 'years')}</span></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
              <span className="hidden sm:inline-block text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold tracking-wide">{t('hero', 'bilingual')}</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Image + Premium Floating Elements */}
          <motion.div 
            className="order-1 md:order-2 relative h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-[3/4] max-w-md mx-auto z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] -rotate-3 scale-[1.02] -z-10 transition-transform hover:rotate-0 duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80"
                alt={t('hero', 'imageAlt')}
                className="w-full h-full object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] pointer-events-none"></div>
              
              {/* Floating Icon 1 (Book) */}
              <motion.img
                variants={floatingVariants}
                animate="animate"
                src="/isometric/book.png"
                alt="Icono aprendizaje"
                className="absolute -top-10 -left-10 w-32 md:w-40 xl:w-48 drop-shadow-2xl z-20"
                style={{ filter: "drop-shadow(0px 25px 35px rgba(0,0,0,0.15))" }}
                onError={(e) => { e.target.style.display = 'none' }}
                loading="lazy"
              />
              
              {/* Floating Icon 2 (Heart) */}
              <motion.img
                variants={floatingVariants}
                animate="animate"
                src="/isometric/heart.png"
                alt="Icono cuidado"
                className="absolute -bottom-8 -right-8 w-28 md:w-36 xl:w-40 drop-shadow-2xl z-20"
                style={{ filter: "drop-shadow(0px 25px 35px rgba(50,170,158,0.2))", animationDelay: "1s" }}
                onError={(e) => { e.target.style.display = 'none' }}
                loading="lazy"
              />
            </div>
            
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-gray-200 rounded-full -z-20 opacity-50"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
