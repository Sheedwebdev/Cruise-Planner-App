import styles from "./TripSummaryPage.module.css";
import CruiseSummary from "../components/CruiseSummary/CruiseSummary";
import FlightSummary from "../components/FlightSummary/FlightSummary";
import AirBnbSummary from "../components/AirBnbSummary/AirBnbSummary";
import TripCostSummary from "../components/TripCostSummary/TripCostSummary";

import cruiseData from "../data/cruiseData";
import flightData from "../data/flightData";
import airbnbData from "../data/airbnbData";

function TripSummaryPage() {
  const selectedCruise = cruiseData[3];
  const selectedFlight = flightData[0];
  const selectedAirbnb = airbnbData[0];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Trip Summary</h1>

      <section className={styles.section}>
        {<CruiseSummary cruise={selectedCruise} />}
      </section>

      <section className={styles.section}>
        {<FlightSummary flight={selectedFlight} />}
      </section>

      <section className={styles.section}>
        {<AirBnbSummary airbnb={selectedAirbnb} />}
      </section>

      <section className={styles.section}>
        {
          <TripCostSummary
            cruise={selectedCruise}
            flight={selectedFlight}
            airbnb={selectedAirbnb}
          />
        }
      </section>
    </main>
  );
}

/*
Acceptance Criteria
  -All Criteria Completed!!!
*/

export default TripSummaryPage;
