import { createContext } from 'react'

export type Theme = 'light' | 'dark'

// Define the context type
export interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

// Create context with the type and initial value
export const ThemeContext = createContext<ThemeContextType | null>(null)

export default ThemeContext
