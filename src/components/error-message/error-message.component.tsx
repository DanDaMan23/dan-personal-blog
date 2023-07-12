import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./error-message.component.scss"

interface ErrorMessageProps {
  message: string,
  className?: string
}

export default function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <div className={`error-message ${className}`}>
      <FontAwesomeIcon
        icon={faCircleExclamation}
        style={{ color: "red !important" }}
      />
      <p>{message}</p>
    </div>
  )
}
