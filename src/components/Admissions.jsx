import { useLanguage } from '../i18n/LanguageContext'
import FadeInReveal from './FadeInReveal'

export default function Admissions() {
  const { language } = useLanguage()

  const steps = language === 'es'
    ? [
        {
          number: '01',
          icon: '/isometric/globe-icon.png',
          title: 'Contacto',
          description: 'Envíanos un mensaje o llámanos para conocer más sobre nuestra propuesta educativa.',
        },
        {
          number: '02',
          icon: '/isometric/backpack-icon.png',
          title: 'Visita Guiada',
          description: 'Conoce nuestras instalaciones, maestros y vive la experiencia de Preciosos Momentos.',
        },
        {
          number: '03',
          icon: '/isometric/abacus-icon.png',
          title: 'Inscripción',
          description: 'Completa el proceso de matriculación y únete a nuestra familia educativa.',
        },
      ]
    : [
        {
          number: '01',
          icon: '/isometric/globe-icon.png',
          title: 'Contact',
          description: 'Send us a message or call us to learn more about our educational proposal.',
        },
        {
          number: '02',
          icon: '/isometric/backpack-icon.png',
          title: 'Guided Tour',
          description: 'Visit our facilities, meet our teachers, and experience Preciosos Momentos.',
        },
        {
          number: '03',
          icon: '/isometric/abacus-icon.png',
          title: 'Enrollment',
          description: 'Complete the enrollment process and join our educational family.',
        },
      ]

  const title = language === 'es' ? 'Proceso de admisión sencillo' : 'Simple admission process'
  const subtitle = language === 'es' 
    ? 'Tres simples pasos para formar parte de nuestra gran comunidad'
    : 'Three simple steps to join our great community'

  return (
    <section 
      id="admisiones" 
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#F9F8F6' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container-main relative z-10">
        {/* Header */}
        <FadeInReveal className="text-center mb-20 md:mb-24">
          <p className="font-body text-sm uppercase tracking-widest text-primary font-bold mb-4">
            {language === 'es' ? 'ADMISIONES' : 'ADMISSIONS'}
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-heading mb-6 max-w-2xl mx-auto leading-tight">
            {title}
          </h2>
          <p className="font-body text-text/80 text-lg md:text-xl max-w-xl mx-auto">
            {subtitle}
          </p>
        </FadeInReveal>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-6 lg:gap-10 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] border-t-[2px] border-dashed border-primary/30 -z-10"></div>

          {steps.map((step, index) => (
            <FadeInReveal 
              key={step.title + index} 
              delay={index * 0.2} 
              direction="up" 
              className="flex-1"
            >
              <div className="admission-step h-full flex flex-col items-center text-center relative group">
                
                {/* Step Number Badge */}
                <div className="absolute -top-6 w-14 h-14 bg-white border-4 border-primary-soft text-primary font-heading font-black text-xl rounded-full flex items-center justify-center shadow-lg z-20 group-hover:-translate-y-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {step.number}
                </div>

                {/* Card Body */}
                <div className="bg-white pt-14 pb-10 px-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 w-full h-full flex flex-col items-center">
                  
                  {/* Icon */}
                  <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-secondary/10 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-500"></div>
                    <img
                      src={step.icon}
                      alt="Icono paso"
                      className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] icon-3d object-contain relative z-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-2xl text-heading mb-4 px-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-text/80 text-base leading-relaxed max-w-[260px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeInReveal>
          ))}
        </div>
        
        {/* Bottom CTA Element */}
        <FadeInReveal delay={0.6} className="mt-20 flex justify-center">
          <button className="btn-primary text-base font-semibold py-4 px-10 shadow-[0_8px_25px_rgba(50,170,158,0.25)] hover:shadow-[0_8px_35px_rgba(50,170,158,0.4)] group relative overflow-hidden rounded-xl">
             <span className="relative z-10">{language === 'es' ? 'Iniciar Proceso' : 'Start Process'}</span>
             <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
          </button>
        </FadeInReveal>
      </div>
    </section>
  )
}
