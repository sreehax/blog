import Image from 'next/image'
import getConfig from 'next/config'
import pfp from '~/assets/profile-pic.png'
import Link from 'next/link'

const { publicRuntimeConfig: config } = getConfig();

const Footer = () => <div className="bio">
    <Image
        src={pfp}
        alt={config.author.name}
        className="bio-avatar"
        width="50"
        height="50"
    />
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<strong><Link href="/">Return home</Link></strong>
    </p>
</div>

export default Footer