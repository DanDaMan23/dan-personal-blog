import "./backdrop.component.scss"

interface BackDropProps {
  show: boolean
  onClick: () => void
}

export default function Backdrop({ show, onClick }: BackDropProps) {
  return (
    <div
      className='backdrop'
      style={{ display: show ? "block" : "none" }}
      onClick={onClick}
    />
  )
}
