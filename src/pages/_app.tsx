import type { AppProps } from 'next/app'

import '@fontsource/rubik/latin-400.css'
import '@fontsource/rubik/latin-700.css'
import '@fontsource/jetbrains-mono'

import 'normalize.css'
import '~/styles/blog.scss'
import Layout from '~/components/layout'

const App = ({ Component, pageProps}: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App