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
      <div className='picture-container'>
        <img src={imagePath} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
