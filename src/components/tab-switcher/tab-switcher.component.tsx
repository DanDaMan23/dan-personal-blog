import "./tab-switcher.component.scss"

export interface TabSwitcherProps {
  tabs: Array<string>
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function TabSwitcher({
  tabs,
  activeTab,
  setActiveTab
}: TabSwitcherProps) {
  return (
    <div className='tab-switcher'>
      {tabs.map((tab) => (
        <button
          key={tab}
          type='button'
          className={`${activeTab === tab ? "active-tab" : " "}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
