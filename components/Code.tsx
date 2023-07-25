import React from 'react'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import { PrismLight, PrismAsyncLight } from 'react-syntax-highlighter'

const SyntaxHighlighter =
    typeof window === 'undefined' ? PrismLight : PrismAsyncLight

SyntaxHighlighter.registerLanguage('typescript', typescript)

interface CodeProps {
    language: string
    value: string
}

const Code = ({ language, value }: CodeProps) => {
    return (
        <SyntaxHighlighter language={language} style={darcula}>
            {value}
        </SyntaxHighlighter>
    )
}

export default Code
