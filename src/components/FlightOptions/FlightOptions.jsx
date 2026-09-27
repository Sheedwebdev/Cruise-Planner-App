import FlightCard from "../FlightCard/FlightCard";
import styles from "./FlightOptions.module.css";

function FlightOptions({ flights }) {
  return (
    <div className={styles.container}>
      <h2>Flight Options</h2>
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

/*
Acceptance Criteria
 - All Criteria Completed!
*/

export default FlightOptions;
