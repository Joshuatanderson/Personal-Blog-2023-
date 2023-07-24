import React from 'react'
import fs from 'fs'
import path from 'path'

import { BlogPost } from '../../components/BlogPost'
import { loadPost } from '../../loader'

function Post(props: any) {
    const { post } = props
    return <BlogPost post={post} />
}

export const getStaticPaths = async () => {
    try {
        const blogsDirectory = path.join(process.cwd(), './md/blog')
        const filenames = fs.readdirSync(blogsDirectory)

        const slugs = filenames.map((filename) => filename.replace('.md', ''))

        console.log(slugs)
        const paths = slugs.map((slug) => ({ params: { blog: slug } }))

        return { paths, fallback: false }
    } catch (error) {
        console.error('Error generating static paths', error)
        return { paths: [], fallback: false }
    }
}

export const getStaticProps = async ({ params }: any) => {
    const post = await loadPost(`blog/${params.blog}.md`)
    return { props: { post } }
}

export default Post
