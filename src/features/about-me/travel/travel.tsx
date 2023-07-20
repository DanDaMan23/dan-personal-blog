import TabSwitcher from "../../../components/tab-switcher/tab-switcher.component"
import useTabSwitcher from "../../../components/tab-switcher/use-tab-switcher.component"
import MontrealTrip from "./montreal-trip/montreal-trip"
import NewYorkTrip from "./new-york-trip/new-york-trip"
import text from "./travel.json"

import "./travel.scss"

export default function Travel() {
  const tabs = [text.trips.montreal.title, text.trips.newYork.title]

  const tabSwitcherProps = useTabSwitcher(tabs)

  return (
    <div className='travel'>
      <h3>{text.mainTitle}</h3>

      <p>{text.mainDescription}</p>

      <TabSwitcher {...tabSwitcherProps} />

      {/* TODO: Try refactoring the whole tab switcher component. */}
      {/* Scenario: What if there are 100 pages, are we going to do tabs[0], tabs[1] ... tabs[100]? */}
      <div className='trip-section'>
        <MontrealTrip show={tabSwitcherProps.activeTab === tabs[0]} />
        <NewYorkTrip show={tabSwitcherProps.activeTab === tabs[1]} />
      </div>
    </div>
  )
}
