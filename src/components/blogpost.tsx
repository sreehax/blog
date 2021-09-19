import SEO from "./seo"
import Footer from "./footer"
import "~/utils/date"
import { Fragment } from "react"
import type { ReactComponent, PostMetadataPart } from "~/types"

interface BlogPostComponent extends ReactComponent {
    fm: PostMetadataPart
}

const BlogPost = ({ children, fm }: BlogPostComponent) => {
    return (
        <Fragment>
            <SEO
                title={fm.title}
                description={fm.description}
            />
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{fm.title}</h1>
                    <p>{new Date(fm.date).prettyFmt()}</p>
                </header>
                <section itemProp="articleBody">
                    {children}
                </section>
                <hr />
                <footer>
                    <Footer />
                </footer>
            </article>
        </Fragment>
    )
}

export default BlogPost