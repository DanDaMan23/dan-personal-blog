import { useNavigate } from "react-router-dom"

export default function useNavigationItems() {
  const navigate = useNavigate()

  const navigationItems = [
    { label: "Home", onClick: () => navigate("/"), subItems: null },
    {
      label: "About Me",
      onClick: () => navigate("/aboutMe"),
      subItems: [
        { label: "Web Development", onClick: () => {} },
        { label: "Books", onClick: () => {} },
        { label: "Fitness", onClick: () => {} },
        { label: "Boxing", onClick: () => {} },
        { label: "Travel", onClick: () => {} }
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
