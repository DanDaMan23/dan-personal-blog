import { useState, useEffect } from "react"

export enum DeviceView {
  Mobile,
  Tablet,
  Desktop
}

export default function useMediaQuery() {
  const [deviceView, setDeviceView] = useState<DeviceView>(
    DeviceView.Mobile
  )

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= 850) {
        setDeviceView(DeviceView.Desktop)
      } else {
        setDeviceView(DeviceView.Mobile)
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
