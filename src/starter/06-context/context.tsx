import { createContext, useContext, useState } from 'react';

// createContext is a generic
const ThemeProviderContext = createContext<{ name: string } | undefined>(
  undefined
); // in ts we need to provide an initial value

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderContext.Provider value={{ name: 'hello' }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be usde within the ThemeProvider');
  }

  return context;
};
