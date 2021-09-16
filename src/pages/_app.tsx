import type { AppProps } from 'next/app'

import '@fontsource/rubik/latin-400.css'
import '@fontsource/rubik/latin-700.css'
import '@fontsource/jetbrains-mono'

import 'normalize.css'
import '~/styles/blog.scss'

const App = ({ Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />
}

export default App