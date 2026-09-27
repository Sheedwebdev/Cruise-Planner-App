import styles from "./FlightStayPage.module.css";

import FlightOptions from "../components/FlightOptions/FlightOptions";
import AirbnbOptions from "../components/AirbnbOptions/AirbnbOptions";

import flightData from "../data/flightData";
import airbnbData from "../data/airbnbData";

function FlightStayPage() {
  return (
    <main className={styles.container}>
      <FlightOptions flights={flightData} />

      <AirbnbOptions airbnbs={airbnbData} />
    </main>
  );
}

export default FlightStayPage;
