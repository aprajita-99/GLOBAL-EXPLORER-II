import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [texxt, settexxt] = useState(() => {
      return localStorage.getItem('darkMode') === 'true' ? 'Light mode' : 'Dark mode';
    });

  return (
    <ThemeContext.Provider value={[texxt, settexxt]}>
      {children}
    </ThemeContext.Provider>
  )
}

//create context ke andar jo bhi value pass krenge wo pass ho jaayega and usko ham khi bhi use kr paayenge