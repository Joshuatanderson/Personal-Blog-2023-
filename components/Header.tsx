import React from 'react'
import { globals } from '../globals'
import { GitHub, Linkedin } from 'react-feather'

export const Header: React.FC = () => (
    <div className="header">
        <a href="/">{globals.siteName}</a>
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
    </div>
)
