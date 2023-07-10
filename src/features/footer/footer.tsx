import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"

import "./footer.scss"

interface MediaLinkProps {
  label: string
  url: string
  icon: IconDefinition
}

function MediaLink({ label, url, icon }: MediaLinkProps) {
  return (
    <div className='media-link'>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className='brand-icon'>
          <FontAwesomeIcon icon={icon} />
        </div>
        {label}
      </a>
    </div>
  )
}

export default function Footer() {
  const footerItems = [
    {
      label: "Instagram",
      url: "https://www.instagram.com/dandaman_23/",
      icon: faInstagram
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/consengcodanlaw236/",
      icon: faLinkedin
    },
    { label: "GitHub", url: "https://github.com/DanDaMan23", icon: faGithub }
  ]

  return (
    <div className='footer'>
      {footerItems.map(({ label, url, icon }) => (
        <MediaLink key={label} label={label} url={url} icon={icon} />
      ))}
    </div>
  )
}
