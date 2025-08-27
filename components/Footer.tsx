import React from 'react'
import { globals } from '../globals'
import { Rss } from 'lucide-react'

export const Footer: React.FC = () => (
    <div className="footer">
        <p>{`© ${globals.yourName} ${new Date().getFullYear()}`}</p>
        <a href="/rss.xml">
            <Rss />
        </a>
    </div>
)
