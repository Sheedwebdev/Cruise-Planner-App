import styles from "./CruiseSummary.module.css";

function CruiseSummary({ cruise }) {
  const {
    ship,
    destination,
    sailing: { departure, duration },
  } = cruise;
  return (
    <div className={styles.container}>
      <h2>Cruise Summary</h2>
      <p>
        <strong>Cruise Line:</strong> {cruise.cruiseLine}
      </p>
      <div>
        <h3>Ship Info</h3>
        <p>
          <strong>Ship:</strong> {ship.name}
        </p>
        <p>
          <strong>Class:</strong> {ship.class}
        </p>
        <p>
          <strong>Rating:</strong> {ship.rating}
        </p>
      </div>
      <div>
        <h3>Destination Info</h3>
        <p>
          <strong>Region:</strong> {destination.region}
        </p>
        <p>
          <strong>Description:</strong> {destination.description}
        </p>
      </div>
      <div>
        <h3>Departure Info</h3>
        <p>
          <strong>Port:</strong> {departure.port.name}
        </p>
        <p>
          <strong>Date:</strong> {departure.date}
        </p>
        <p>
          <strong>Time:</strong> {departure.time}
        </p>
      </div>
      <div>
        <h3>Duration Info</h3>
        <p>
          <strong>Nights:</strong> {duration.nights}
        </p>
        <p>
          <strong>Days:</strong> {duration.days}
        </p>
      </div>
    </div>
  );
}

/*
Acceptance Criteria
 - All Acceptance Criteria Completed!!!
*/

export default CruiseSummary;
