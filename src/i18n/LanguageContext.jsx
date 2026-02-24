import { createContext, useContext, useState, useMemo } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es')

  const t = (section, key) => {
    try {
      const translation = translations[language]?.[section]?.[key]
      if (translation) return translation
      
      // Fallback to Spanish
      const fallback = translations.es?.[section]?.[key]
      if (fallback) return fallback
      
      // Return key if nothing found
      return key
    } catch (e) {
      console.warn(`Translation missing: ${section}.${key}`)
      return key
    }
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage,
    t
  }), [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
