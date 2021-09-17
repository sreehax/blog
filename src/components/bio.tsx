import Image from 'next/image'
import pfp from '~/assets/profile-pic.png'
import getConfig from 'next/config'
const { publicRuntimeConfig: config } = getConfig();

const Bio = () => {
    return (
        <div className="bio">
            <Image
                src={pfp}
                alt={config.author.name}
                width={50}
                height={50}
                className="bio-avatar"
                priority
            />
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Written by <a href={`https://github.com/${config.social.github}`}><strong>{config.author.name}</strong></a>
            </p>
            <br />
        </div>

    )
}

export default Bio