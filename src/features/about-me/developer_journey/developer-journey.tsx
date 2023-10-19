import text from "./developer-journey.json"
import { DeveloperProject, developerProjects } from "./developer-project.model"

import "./developer-journey.scss"
import ProjectCard from "./project-card/project-card.component"

// Not sure if I just wanted Web development so I just name the function DeveloperJourney
export default function DeveloperJourney() {
  const projectList = developerProjects.map(
    (project: DeveloperProject, index: number) => (
      <li key={index}>
        <ProjectCard {...project} />
      </li>
    )
  )

  return (
    <div className='developer-journey'>
      <h3>{text.webDevelopment.title}</h3>
      <div className='developer-journey-image__container'>
        <img
          className='developer-journey-image'
          src={require("./photos/Web_Development_Setup.jpg")}
          alt='Web Development Setup'
          width='100%'
        />
      </div>

      <h4>{text.webDevelopment.specializationDetails.heading}</h4>
      <p>{text.webDevelopment.specializationDetails.details}</p>

      <ul className='projects'>{projectList}</ul>

      <h4>{text.webDevelopment.learningDetails.heading}</h4>
      <p>{text.webDevelopment.learningDetails.details}</p>

      <h4>{text.webDevelopment.learningMethods.heading}</h4>
      {text.webDevelopment.learningMethods.details.map((detail) => (
        <p key={detail}>{detail}</p>
      ))}

      <h5>{text.webDevelopment.learningMethods.analogy.heading}</h5>
      {text.webDevelopment.learningMethods.analogy.details.map((detail) => (
        <p key={detail}>{detail}</p>
      ))}
    </div>
  )
}
