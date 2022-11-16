import React from 'react'

const ExternalLinkIconComponent: React.FC = ({link, icon}) => {
  return (
    // target="_blank" = link opens up in a new tab
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIconComponent