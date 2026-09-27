import styles from "./AirbnbOptions.module.css";
import AirbnbCard from "../AirbnbCard/AirbnbCard";

function AirbnbOptions({ airbnbs }) {
  return (
    <div className={styles.container}>
      <h2>Airbnb Options</h2>
      {airbnbs.map((airbnb) => (
        <AirbnbCard key={airbnb.id} airbnb={airbnb} />
      ))}
    </div>
  );
}

/*
Acceptance Criteria
 - All Criteria Completed!
*/

export default AirbnbOptions;
