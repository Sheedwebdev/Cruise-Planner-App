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
      <h2 className={styles.title}>Flight Summary</h2>

      <div className={styles.flightInfo}>
        <p className={styles.detail}>
          <strong>Airline:</strong> {airline}
        </p>

        <p className={styles.detail}>
          <strong>Flight Number:</strong> {flightNumber}
        </p>
      </div>

      <div className={styles.sections}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Departure Info</h3>

          <p className={styles.detail}>
            <strong>Airport Code:</strong> {departure.airport.code}
          </p>

          <p className={styles.detail}>
            <strong>City:</strong> {departure.airport.city}
          </p>

          <p className={styles.detail}>
            <strong>Date:</strong> {departure.date}
          </p>

          <p className={styles.detail}>
            <strong>Time:</strong> {departure.time}
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Arrival Info</h3>

          <p className={styles.detail}>
            <strong>Airport Code:</strong> {arrival.airport.code}
          </p>

          <p className={styles.detail}>
            <strong>City:</strong> {arrival.airport.city}
          </p>

          <p className={styles.detail}>
            <strong>Date:</strong> {arrival.date}
          </p>

          <p className={styles.detail}>
            <strong>Time:</strong> {arrival.time}
          </p>
        </div>
      </div>

      <div className={styles.tripDetails}>
        <p className={styles.detail}>
          <strong>Duration:</strong>{" "}
          {`${duration.hours}hr ${duration.minutes}min`}
        </p>

        <p className={styles.detail}>
          <strong>Stops:</strong> {stops}
        </p>

        <p className={styles.detail}>
          <strong>Cabin Class:</strong> {cabinClass}
        </p>
      </div>

      <div className={styles.price}>
        <p className={styles.detail}>
          <strong>Price:</strong> {price.amount}{" "}
          {price.perPerson && "per person"}
        </p>

        <p className={styles.detail}>
          <strong>Currency:</strong> {price.currency}
        </p>
      </div>
    </div>
  );
}

export default FlightSummary;
