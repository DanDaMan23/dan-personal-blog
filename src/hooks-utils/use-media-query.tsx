import { useState, useEffect } from "react"

export enum DeviceViewType {
  Mobile,
  Tablet,
  Desktop
}

export default function useMediaQuery() {
  const [deviceView, setDeviceView] = useState<DeviceViewType>(
    DeviceViewType.Mobile
  )

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= 850) {
        setDeviceView(DeviceViewType.Desktop)
      } else {
        setDeviceView(DeviceViewType.Mobile)
      }
    }

    window.addEventListener("resize", resizeHandler)
    resizeHandler()

    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  return { deviceView }
}
