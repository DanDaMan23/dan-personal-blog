import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement, ReactNode, cloneElement, useState } from "react"

import './accordion.component.scss'

interface AccordionProps {
  button: ReactElement
  children: ReactNode
  buttonLabel: string
}

export default function Accordion({
  button,
  children,
  buttonLabel
}: AccordionProps) {
  const [showAccordionBody, setShowAccordionBody] = useState<boolean>(false)

  return (
    <div className='accordion' onMouseLeave={() => setShowAccordionBody(false)}>
      {cloneElement(
        button,
        {
          className: "accordion-button",
          onMouseOver: () => setShowAccordionBody(true)
        },
        <>
          {buttonLabel} <FontAwesomeIcon icon={faChevronDown} size={"xs"} />
        </>
      )}
      <div
        className='accordion-body'
        style={{
          display: showAccordionBody ? "block" : "none"
        }}
      >
        {children}
      </div>
    </div>
  )
}
