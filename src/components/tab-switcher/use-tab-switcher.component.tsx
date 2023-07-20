import { useState } from "react"
import { TabSwitcherProps } from "./tab-switcher.component"

export default function useTabSwitcher(tabs: Array<string>): TabSwitcherProps {
  const [activeTab, setActiveTab] = useState<string>(tabs[0])

  return { activeTab, setActiveTab, tabs }
}
