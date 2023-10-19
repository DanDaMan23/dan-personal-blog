import { DeveloperProject } from "../developer-project.model"

import "./project-card.component.scss"

export default function ProjectCard({
  title,
  description,
  imagePath
}: DeveloperProject) {
  console.log(title)
  return (
    <div className='project-card'>
      <img src={imagePath} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
