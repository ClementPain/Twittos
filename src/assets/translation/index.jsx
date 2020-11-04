import { createContext } from 'react'

const CurrentLanguageContext = createContext({
  language: "fr",
});

export default CurrentLanguageContext;