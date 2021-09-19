import { Fragment } from "react"
import SEO from "~/components/seo"

const NotFound = () => (
    <Fragment>
        <SEO title="404: Not Found" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
    </Fragment>
)

export default NotFound