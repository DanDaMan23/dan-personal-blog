export interface DeveloperProject {
  title: string
  description: string
  imagePath: string
}

export const developerProjects: DeveloperProject[] = [
  {
    title: "Pokemon Data",
    description:
      "I integrated PokeAPI to get the pokemon data and used Next.js, TypeScript and SCSS",
    imagePath: require("./photos/Web_Development_Setup.jpg")
  },
  {
    title: "Tech Thursday Site",
    description:
      "I was part of the team that developed the Tech Thursday site to show upcoming networking events. Tech Stack we used for this is Next.js TypeScript for the front-end and Drupal on the Back-end.",
    imagePath: require("./photos/Web_Development_Setup.jpg")
  },
  {
    title: "Dating-REST-API",
    description:
      "I am developing a REST API for dating for people to find a compatible partner. Tech stack that I used here is Express TypeScript and MongoDB.",
    imagePath: require("./photos/Web_Development_Setup.jpg")
  }
]
