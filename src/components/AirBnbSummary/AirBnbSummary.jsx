import styles from "./AirBnbSummary.module.css";

function AirBnbSummary({ airbnb }) {
  const {
    property,
    location: { neighborhood, city, distanceFromCruisePort },
    stay: { checkIn, checkOut, nights },
    guests: { maxGuests },
    bedrooms,
    price: { total, currency },
  } = airbnb;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Airbnb Summary</h2>

      <div className={styles.sections}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Property Info</h3>

          <p className={styles.detail}>
            <strong>Property:</strong> {property.name}
          </p>

          <p className={styles.detail}>
            <strong>Type:</strong> {property.type}
          </p>

          <p className={styles.detail}>
            <strong>Rating:</strong> {property.rating}
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Location Info</h3>

          <p className={styles.detail}>
            <strong>Neighborhood:</strong> {neighborhood}
          </p>

          <p className={styles.detail}>
            <strong>City:</strong> {city}
          </p>

          <p className={styles.detail}>
            <strong>Distance From Port:</strong> {distanceFromCruisePort.miles}{" "}
            miles
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Stay Info</h3>

          <p className={styles.detail}>
            <strong>Check In:</strong> {checkIn}
          </p>

          <p className={styles.detail}>
            <strong>Check Out:</strong> {checkOut}
          </p>

          <p className={styles.detail}>
            <strong>Total Nights:</strong> {nights}
          </p>

          <p className={styles.detail}>
            <strong>Guests:</strong> {maxGuests}
          </p>

          <p className={styles.detail}>
            <strong>Bedrooms:</strong> {bedrooms}
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Price Info</h3>

          <p className={styles.detail}>
            <strong>Total Price:</strong> {total}
          </p>

          <p className={styles.detail}>
            <strong>Currency:</strong> {currency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AirBnbSummary;
