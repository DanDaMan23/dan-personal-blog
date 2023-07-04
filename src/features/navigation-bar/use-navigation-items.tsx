import { useNavigate } from "react-router-dom"

export default function useNavigationItems() {
  const navigate = useNavigate()

  const navigationItems = [
    { label: "Home", onClick: () => navigate("/"), subItems: null },
    {
      label: "About Me",
      onClick: () => navigate("/aboutMe"),
      subItems: [
        {
          label: "Web Development",
          onClick: () => navigate("/aboutMe/webDevelopment")
        },
        { label: "Books", onClick: () => navigate("/aboutMe/books") },
        { label: "Fitness", onClick: () => navigate("/aboutMe/fitness") },
        { label: "Boxing", onClick: () => navigate("/aboutMe/boxing") },
        { label: "Travel", onClick: () => navigate("/aboutMe/travel") }
      ]
    },
    {
      label: "Contact Me",
      onClick: () => navigate("/contactMe"),
      subItems: null
    }
  ]

  return { navigationItems }
}
