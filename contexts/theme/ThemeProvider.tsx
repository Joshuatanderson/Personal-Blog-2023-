import React, { useState, useEffect } from 'react'
import ThemeContext, { Theme } from './ThemeContext'

interface ThemeProviderProps {
    children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches

        setTheme(localTheme ?? (prefersDark ? 'dark' : 'light'))
    }, [])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        window.localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
