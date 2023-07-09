import { Outlet } from "react-router"
import Carousel from "../../components/carousel/carousel.compoent"

export default function AboutMe() {
  const carouselItems = [
    { image: "red", title: "Web Development", details: "Hello World" },
    { image: "green", title: "Travel", details: "Hello World" },
    { image: "blue", title: "Boxing", details: "Hello World" }
  ]

  return (
    <main>
      <h1>About Me Page</h1>
      {/* TODO: Think about a carousel below the outlet */}

      <Carousel items={carouselItems} />

      <Outlet />
    </main>
  )
}
