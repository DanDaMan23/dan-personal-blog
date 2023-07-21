import TabSwitcher from "../../../components/tab-switcher/tab-switcher.component"
import useTabSwitcher from "../../../components/tab-switcher/use-tab-switcher.component"
import MontrealTrip from "./montreal-trip/montreal-trip"
import NewYorkTrip from "./new-york-trip/new-york-trip"
import text from "./travel.json"

import "./travel.scss"

export default function Travel() {
  const tabs = [text.trips.montreal.title, text.trips.newYork.title]

  const tabSwitcherProps = useTabSwitcher(tabs)

  const tripSection = () => {
    switch (tabSwitcherProps.activeTab) {
      case tabs[0]:
        return <MontrealTrip />
      case tabs[1]:
        return <NewYorkTrip />
      default:
        return <></>
    }
  }

  return (
    <div className='travel'>
      <h3>{text.mainTitle}</h3>

      <p>{text.mainDescription}</p>

      <TabSwitcher {...tabSwitcherProps} />
      <div className='trip-section'>{tripSection()}</div>
    </div>
  )
}
