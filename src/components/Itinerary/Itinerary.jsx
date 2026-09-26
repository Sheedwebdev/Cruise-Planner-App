import styles from "./Itinerary.module.css";

function Itinerary({ itinerary }) {
  return (
    <div className={styles.container}>
      {itinerary.map((itineraryDay) => (
        <ItineraryDay key={itineraryDay.day} itineraryDay={itineraryDay} />
      ))}
    </div>
  );
}

function ItineraryDay({ itineraryDay }) {
  const {
    day,
    date,
    port: { name, country, type },
    arrivalTime,
    departureTime,
  } = itineraryDay;
  return (
    <article>
      <h2>Day: {day}</h2>
      <div>
        <p>Date: {date}</p>
        <p>Port Name: {name}</p>
        <p>Port Country: {country}</p>
        <p>Port Type: {type}</p>
        <p>Arrival Time: {arrivalTime}</p>
        <p>Departure Time: {departureTime}</p>
      </div>
      <div>
        {itineraryDay.activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </article>
  );
}

function ActivityCard({ activity }) {
  const { name, category, durationMinutes } = activity;

  return (
    <article className={styles.activity}>
      <p>Activity: {name}</p>
      <p>Category: {category}</p>
      <p>Duration: {durationMinutes} min</p>
    </article>
  );
}

/*
Acceptance criteria
 - All Criteria Completed!
*/

export default Itinerary;
