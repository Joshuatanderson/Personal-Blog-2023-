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

            {/* <div className="section">
                <h2>Features</h2>
                <div className="medium-wide">
                    <Markdown source={props.features} />
                </div>
            </div> */}

            <div className="section">
                <div className="post-card-container">
                    {props.posts.map((post, j) => {
                        return <PostCard post={post} key={j} />
                    })}
                </div>
            </div>

            {/* <div className="section">
                <h2>Testimonials</h2>
                <blockquote>
                    <p>
                        <em>Seems like it might be useful!</em>
                    </p>
                    <p>
                        — Dan Abramov, taken{' '}
                        <a
                            href="https://github.com/colinhacks/devii/issues/2"
                            target="_blank"
                        >
                            {' '}
                            utterly out of context
                        </a>
                    </p>
                </blockquote>
            </div> */}

            {/* <div className="section">
        <h2>README.md</h2>
        <p>
          Below is the README.md for devii. It was imported and rendered using
          Next.js dynamic imports. The rest of this page (including this
          paragraph) are rendered with React. You can also read the README on
          GitHub at{' '}
          <a href="https://github.com/colinhacks/devii">
            https://github.com/colinhacks/devii
          </a>
          .
        </p>
      </div> */}

            {/* <div className="section alternate">
        <div className="narrow">
          <Markdown source={props.readme} />
        </div>
      </div> */}
            {/* 
            <div className="section alternate">
                <h2 className="centered">Get started</h2>
                <a href="https://github.com/colinhacks/devii">
                    <button className="fork-button">Go to README</button>
                </a>
            </div> */}
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
