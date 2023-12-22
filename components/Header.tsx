import React from 'react'
import { globals } from '../globals'
import { GitHub, Linkedin, Moon, Sun } from 'react-feather'
import ThemeContext from '../contexts/theme/ThemeContext'

export const Header: React.FC = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext)

    return (
        <div className="header">
            <strong>
                <a href="/">{globals.siteName}</a>
            </strong>
            <div className="flex-spacer" />
            <a
                href="https://github.com/Joshuatanderson?tab=repositories"
                alt-text="github"
            >
                <GitHub />
            </a>
            <a
                href="https://www.linkedin.com/in/joshua-anderson-mba-2aab9b89/"
                alt-text="linkedin"
            >
                <Linkedin />
            </a>
            <a role="button">
                {theme === 'light' ? (
                    <Moon onClick={toggleTheme} />
                ) : (
                    <Sun onClick={toggleTheme} />
                )}
            </a>
        </div>
    )
}
