import styles from "./CruiseSummary.module.css";

function CruiseSummary({ cruise }) {
  const {
    ship,
    destination,
    sailing: { departure, duration },
  } = cruise;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cruise Summary</h2>

      <p className={styles.cruiseLine}>
        <strong>Cruise Line:</strong> {cruise.cruiseLine}
      </p>

      <div className={styles.sections}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Ship Info</h3>

          <p className={styles.detail}>
            <strong>Ship:</strong> {ship.name}
          </p>

          <p className={styles.detail}>
            <strong>Class:</strong> {ship.class}
          </p>

          <p className={styles.detail}>
            <strong>Rating:</strong> {ship.rating}
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Destination Info</h3>

          <p className={styles.detail}>
            <strong>Region:</strong> {destination.region}
          </p>

          <p className={styles.detail}>
            <strong>Description:</strong> {destination.description}
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Departure Info</h3>

          <p className={styles.detail}>
            <strong>Port:</strong> {departure.port.name}
          </p>

          <p className={styles.detail}>
            <strong>Date:</strong> {departure.date}
          </p>

          <p className={styles.detail}>
            <strong>Time:</strong> {departure.time}
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Duration Info</h3>

          <p className={styles.detail}>
            <strong>Nights:</strong> {duration.nights}
          </p>

          <p className={styles.detail}>
            <strong>Days:</strong> {duration.days}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CruiseSummary;
