import Head from 'next/head'
import { generateRSS } from '../rssUtil'
import { Markdown } from '../components/Markdown'
import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader'
import { PostCard } from '../components/PostCard'

const Home = (props: {
    home: string
    features: string
    readme: string
    posts: PostData[]
}) => {
    return (
        <div className="content">
            <Head>
                <title>Scribed by Stardust</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="introduction">
                <h1>Home page</h1>
                <h2>Posts</h2>
                <Markdown source={props.home} />
            </div>

            <div className="section">
                <div className="post-card-container">
                    {props.posts.map((post, j) => {
                        return <PostCard post={post} key={j} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home

export const getStaticProps = async () => {
    const home = await loadMarkdownFile('home.md')
    const features = await loadMarkdownFile('features.md')
    const readmeFile = await import(`../${'README.md'}`)
    const readme = readmeFile.default
    const posts = await loadBlogPosts()

    // comment out to turn off RSS generation during build step.
    await generateRSS(posts)

    const props = {
        home: home.contents,
        features: features.contents,
        readme: readme,
        posts,
    }

    return { props }
}
