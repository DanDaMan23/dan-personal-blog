import TabSwitcher from "../../../components/tab-switcher/tab-switcher.component"
import useTabSwitcher from "../../../components/tab-switcher/use-tab-switcher.component"
import text from "./travel.json"

import "./travel.scss"

export default function Travel() {
  const tabs = ["Montreal 2022", "New York September 2023"]

  const tabSwitcherProps = useTabSwitcher(tabs)

  return (
    <div className='travel'>
      <h3>{text.mainTitle}</h3>

      <p>{text.mainDescription}</p>

      <TabSwitcher {...tabSwitcherProps} />
    </div>
  )
}
