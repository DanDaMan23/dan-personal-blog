import text from "../travel.json"

export default function NewYorkTrip() {
  return (
    <div className='new-york-trip'>
      <h4>{text.trips.newYork.title}</h4>
      <p>{text.trips.newYork.description}</p>
      <h4>{text.trips.newYork.thingsToDo.title}</h4>
      <ul>
        {text.trips.newYork.thingsToDo.list.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
    </div>
  )
}
