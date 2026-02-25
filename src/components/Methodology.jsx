import { useLanguage } from '../i18n/LanguageContext'
import FadeInReveal from './FadeInReveal'

export default function Methodology() {
  const { language } = useLanguage()

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
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#F9F8F6' }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container-main relative z-10">
        {/* Header */}
        <FadeInReveal className="text-center mb-16 md:mb-20">
          <p className="font-body text-xs md:text-sm uppercase tracking-widest text-primary font-bold mb-4">
            {language === 'es' ? 'NUESTRA METODOLOGÍA' : 'OUR METHODOLOGY'}
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-heading max-w-3xl mx-auto leading-tight">
            {language === 'es' ? 'Aprendemos jugando, crecemos con valores' : 'We learn through play, we grow with values'}
          </h2>
        </FadeInReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <FadeInReveal 
              key={card.title} 
              delay={index * 0.15}
              className="h-full"
            >
              <div
                className="group h-full bg-white rounded-3xl p-8 md:p-10 card-hover shadow-sm border border-gray-100 flex flex-col items-center relative overflow-hidden hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(50,170,158,0.08)]"
              >
                {/* Background Accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

                {/* Icon */}
                <div className="mb-8 flex justify-center relative z-10">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] icon-3d object-contain group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl md:text-2xl text-heading text-center mb-4 relative z-10">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-body text-text/80 text-center mb-8 flex-grow relative z-10 leading-relaxed max-w-sm">
                  {card.description}
                </p>

                {/* Tag */}
                <div className="flex justify-center w-full mt-auto relative z-10">
                  <span className="px-5 py-2.5 bg-gray-50 text-text rounded-xl text-sm font-semibold tracking-wide border border-gray-100 group-hover:bg-primary-soft group-hover:text-primary group-hover:border-primary/20 transition-colors w-full text-center">
                    {card.tag}
                  </span>
                </div>
              </div>
            </FadeInReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
