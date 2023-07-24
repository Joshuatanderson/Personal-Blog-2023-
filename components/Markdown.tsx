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
                        return !inline && match ? (
                            <Code
                                language={match[1]}
                                value={String(children)}
                            />
                        ) : (
                            <code className={className} {...props} />
                        )
                    },
                }}
            />
        </div>
    )
}
