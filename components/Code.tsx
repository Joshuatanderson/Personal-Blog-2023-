import React from 'react'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { PrismLight, PrismAsyncLight } from 'react-syntax-highlighter'

const SyntaxHighlighter =
    typeof window === 'undefined' ? PrismLight : PrismAsyncLight

interface CodeProps {
    language: string
    value: string
}

const Code = ({ language = 'typescript', value }: CodeProps) => {
    return (
        <SyntaxHighlighter language={language} style={darcula}>
            {value}
        </SyntaxHighlighter>
    )
}

export default Code
