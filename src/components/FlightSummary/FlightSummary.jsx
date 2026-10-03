import styles from "./FlightSummary.module.css";

function FlightSummary({ flight }) {
  const {
    airline,
    flightNumber,
    departure,
    arrival,
    duration,
    stops,
    cabinClass,
    price,
  } = flight;

  return (
    <div className={styles.container}>
      <h2>Flight Summary</h2>
      <div>
        <p>
          <strong>Airline:</strong> {airline}
        </p>
        <p>
          <strong>Flight Number:</strong> {flightNumber}
        </p>
      </div>
      <div>
        <h3>Departure Info:</h3>
        <p>
          <strong>Airport Code:</strong> {departure.airport.code}
        </p>
        <p>
          <strong>City:</strong> {departure.airport.city}
        </p>
        <p>
          <strong>Date:</strong> {departure.date}
        </p>
        <p>
          <strong>Time:</strong> {departure.time}
        </p>
      </div>
      <div>
        <h3>Arrival Info:</h3>
        <p>
          <strong>Airport Code:</strong> {arrival.airport.code}
        </p>
        <p>
          <strong>City:</strong> {arrival.airport.city}
        </p>
        <p>
          <strong>Date:</strong> {arrival.date}
        </p>
        <p>
          <strong>Time:</strong> {arrival.time}
        </p>
      </div>
      <div>
        <p>
          <strong>Duration:</strong>{" "}
          {`${duration.hours}hr ${duration.minutes}min`}
        </p>
      </div>
      <div>
        <p>
          <strong>Stops:</strong> {stops}
        </p>
        <p>
          <strong>Cabin Class:</strong> {cabinClass}
        </p>
        <p>
          <strong>Price:</strong> ${price.amount}{" "}
          {price.perPerson && "per person"}
        </p>
        <p>
          <strong>Currency:</strong> {price.currency}
        </p>
      </div>
    </div>
  );
}

/*
Acceptance Criteria
 - All Criteria Completed!!!
*/

export default FlightSummary;
