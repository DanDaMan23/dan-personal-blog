import { Outlet, useLocation, useNavigate } from "react-router"
import Carousel from "../../components/carousel/carousel.compoent"

import "./about-me.scss"

export default function AboutMe() {
  const navigate = useNavigate()

  const { pathname } = useLocation()

  const carouselItems = [
    {
      image: `url(${require("./photos/WebDevelopment.jpg")})`,
      title: "Web Development",
      details:
        "Front-end development is my specialty, and I thrive on constantly considering the user experience to enhance their day-to-day productivity.",
      onClick: () => navigate("/aboutMe/webDevelopment")
    },
    {
      image: `url(${require("./photos/Books.jpg")})`,
      title: "Books",
      details:
        "During the challenging pandemic era marked by lockdowns, I made a conscious decision to let go of one unproductive hobby and embraced reading, which has had a profound impact on my life and significantly expanded my knowledge base. ",
      onClick: () => navigate("/aboutMe/books")
    },
    {
      image: `url(${require("./photos/Boxing.jpg")})`,
      title: "Boxing",
      details:
        "Boxing is not just a sport for physical fitness but also a powerful tool for maintaining mental well-being. Whenever I find myself grappling with frustrations, I always channel them into my punches, finding solace and release in the rhythmic rhythm of the bag.",
      onClick: () => navigate("/aboutMe/boxing")
    },
    {
      image: `url(${require("./photos/Travel.jpg")})`,
      title: "Travel",
      details:
        "In August 2022, I embarked on a solo journey to Montreal, and the experience proved to be truly amazing. It not only allowed me to discover new places and cultures but also provided a valuable opportunity for self-reflection and personal growth. Through exploring the city independently, I gained a deeper understanding of myself and forged lasting memories that continue to resonate with me.",
      onClick: () => navigate("/aboutMe/travel")
    }
  ]

  // TODO: Will be added once I have a picture
  // {
  //   image: `url(${require('./photos/Books.jpg')})`,
  //   title: "Health and Fitness",
  //   details:
  //     "Maintaining a healthy diet and consistent workout routine are the driving forces that fuel my day-to-day life. They empower me to tackle each day with vitality and ensure I stay on track towards my goals"
  // },

  return (
    <main className='about-me'>
      <button
        type='button'
        className='about-me-title'
        onClick={() => navigate("/aboutMe")}
      >
        <h1>About Me</h1>
      </button>
      {pathname === "/aboutMe" && <Carousel items={carouselItems} />}

      <div className='outlet'>
        <Outlet />
      </div>
    </main>
  )
}
