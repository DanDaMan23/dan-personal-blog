import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './success-message.compnent.scss'

interface SuccessMessageProps {
  message: string
  className?: string
}

export default function SuccessMessage({
  message,
  className
}: SuccessMessageProps) {
  return (
    <div className={`success-message ${className}`} style={{color: "green"}}>
      <FontAwesomeIcon icon={faCircleCheck} />
      <p>{message}</p>
    </div>
  )
}
