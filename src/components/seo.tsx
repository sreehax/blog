import { ReactComponent } from "~/types";
import Head from "next/head"
import getConfig from 'next/config'
const { publicRuntimeConfig: config } = getConfig();

interface SEOProp extends ReactComponent {
    description?: string,
    title: string
}

const SEO = ({ title, description = config.description }: SEOProp) => <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
</Head>

export default SEO