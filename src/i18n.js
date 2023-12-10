// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';

 
//Navbar
import Navbar_enTranslation from '../src/components/Translations/Navbar/en.json';
import Navbar_SpnTranslation from '../src/components/Translations/Navbar/Spn.json';
 
 
const selected = Cookies.get('selectedLanguage')
i18n.use(initReactI18next).init({
  
  resources: {
 
    Navbar_en: { translation: Navbar_enTranslation },
    Navbar_Spn: { translation: Navbar_SpnTranslation },
    //Home
   
    
  },
  lng: selected, // Default language
  fallbackLng: 'Navbar_en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes variables
  },
});

export default i18n;
