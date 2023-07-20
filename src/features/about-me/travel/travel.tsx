import TabSwitcher from "../../../components/tab-switcher/tab-switcher.component"
import useTabSwitcher from "../../../components/tab-switcher/use-tab-switcher.component"
import MontrealTrip from "./montreal-trip/montreal-trip"
import text from "./travel.json"

import "./travel.scss"

export default function Travel() {
  const tabs = [text.trips.montreal.title, "New York September 2023 Plan"]

  const tabSwitcherProps = useTabSwitcher(tabs)

  return (
    <div className='travel'>
      <h3>{text.mainTitle}</h3>

      <p>{text.mainDescription}</p>

      <TabSwitcher {...tabSwitcherProps} />

      <div className='trip-section'>
        <MontrealTrip show={tabSwitcherProps.activeTab === tabs[0]} />
        <div
          className='new-york-trip'
          style={{
            display: tabSwitcherProps.activeTab === tabs[1] ? "block" : "none"
          }}
        >
          {tabSwitcherProps.activeTab}
        </div>
      </div>
    </div>
  )
}
