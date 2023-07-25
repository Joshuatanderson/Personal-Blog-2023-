import React from 'react'
import Code from './Code'
import ReactMarkdown from 'react-markdown'

interface MarkdownProps {
    source: string
}

export const Markdown = ({ source }: MarkdownProps) => {
    return (
        <div style={{ width: '100%' }} className="devii-markdown">
            <ReactMarkdown
                children={source}
                components={{
                    code: ({ node, inline, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline ? (
                            <Code
                                language={match ? match[1] : 'typescript'}
                                value={String(children)}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    },
                }}
            />
        </div>
    )
}
