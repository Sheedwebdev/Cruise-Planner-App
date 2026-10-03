import styles from "./TripCostSummary.module.css";

function TripCostSummary({ cruise, flight, airbnb }) {
  const selectedCabin = cruise.cabins[0];

  const totalCruisePrice = selectedCabin.price.amount;

  const totalFlightPrice = flight.price.amount;

  const totalAirbnbPrice = airbnb.price.total;

  const priceCurrency = selectedCabin.price.currency;

  const totalTripPrice = totalCruisePrice + totalFlightPrice + totalAirbnbPrice;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trip Cost Summary</h2>

      <div className={styles.costs}>
        <p className={styles.cost}>
          <strong>Total Cruise Price:</strong>
          <span>{totalCruisePrice}</span>
        </p>

        <p className={styles.cost}>
          <strong>Total Flight Price:</strong>
          <span>{totalFlightPrice}</span>
        </p>

        <p className={styles.cost}>
          <strong>Total Airbnb Price:</strong>
          <span>{totalAirbnbPrice}</span>
        </p>

        <p className={styles.cost}>
          <strong>Currency:</strong>
          <span>{priceCurrency}</span>
        </p>
      </div>

      <div className={styles.total}>
        <strong>Total Trip Price:</strong>
        <span>{totalTripPrice}</span>
      </div>
    </div>
  );
}

export default TripCostSummary;
