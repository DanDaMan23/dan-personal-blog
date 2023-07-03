import "./hamburger-button.component.scss"

interface HamburgerButtonProps {
  className?: string
  onClick: () => void
}

export default function HamburgerButton({
  className,
  onClick
}: HamburgerButtonProps) {
  return (
    <button className={`toggle-button ${className}`} onClick={onClick}>
      <span className='bar' />
      <span className='bar' />
      <span className='bar' />
    </button>
  )
}
