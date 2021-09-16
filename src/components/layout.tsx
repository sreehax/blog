import { ReactComponent } from "~/types"
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LayoutProp extends ReactComponent {
    title?: string
}

const Layout = ({children, title = "Sreehari Sreedev"}: LayoutProp) => {
    const router = useRouter();
    const isRootPath = router.pathname === "/"
    let header_val

    if (isRootPath) {
        header_val = (
            <h1 className="main-heading site-title">
                <Link href="/">{title}</Link>
            </h1>
        )
    } else {
        header_val = (
            <Link href="/">
                <a className="header-link-home">{title}</a>
            </Link>
        )
    }
    return (
        <div className="global-wrapper" data-is-root-path={isRootPath}>
            <header className="global-header">{header_val}</header>
            <main>{children}</main>
        </div>
    )
}

export default Layout