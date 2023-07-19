import { useNavigate } from "react-router-dom"

export default function useNavigationItems() {
  const navigate = useNavigate()

  const navigationItems = [
    {
      label: "Home",
      routeLocation: "/",
      onClick: () => navigate("/"),
      subItems: null
    },
    {
      label: "About Me",
      onClick: () => navigate("/aboutMe"),
      routeLocation: "/aboutMe",
      subItems: [
        {
          label: "Web Development",
          routeLocation: "/aboutMe/webDevelopment",
          onClick: () => navigate("/aboutMe/webDevelopment")
        },
        {
          label: "Boxing",
          routeLocation: "/aboutMe/boxing",
          onClick: () => navigate("/aboutMe/boxing")
        },
        {
          label: "Books",
          routeLocation: "/aboutMe/books",
          onClick: () => navigate("/aboutMe/books")
        },
        {
          label: "Travel",
          routeLocation: "/aboutMe/travel",
          onClick: () => navigate("/aboutMe/travel")
        }
        // Will be added after
        // {
        //   label: "Fitness",
        //   routeLocation: "/aboutMe/fitness",
        //   onClick: () => navigate("/aboutMe/fitness")
        // }
      ]
    },
    {
      label: "Contact Me",
      routeLocation: "/contactMe",
      onClick: () => navigate("/contactMe"),
      subItems: null
    }
  ]

  return { navigationItems }
}
