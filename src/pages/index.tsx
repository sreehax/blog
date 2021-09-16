import Layout from "~/components/layout"
import Bio from "~/components/bio"
import SEO from "~/components/seo"
import { getPosts } from "~/utils/posts"
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import "~/utils/date"
import type { PostMetadata } from "~/types"

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (posts.length == 0) {
        return (
            <Layout>
                <SEO title="All posts" />
                <p>No blog posts found</p>
            </Layout>
        )
    }
    return (
        <Layout>
            <SEO title="All posts" />
            <Bio />
            <ol style={{ listStyle: "none"}}>
                {posts.map((post: PostMetadata) => {
                    return <li key={post.id}>
                        <article className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article">
                            <header>
                                <h2>
                                    <Link href={{
                                        pathname: "/posts/[id]",
                                        query: { id: post.id}
                                    }}>
                                        <a itemProp="headline">{post.title}</a>
                                    </Link>
                                </h2>
                                <small>{new Date(post.date).prettyFmt()}</small>
                            </header>
                            <section>
                                {post.description}
                            </section>
                        </article>
                    </li>
                })}
            </ol>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            posts: await getPosts()
        }
    }
}

export default Index