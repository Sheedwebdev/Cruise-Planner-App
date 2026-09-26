import styles from "./CruiseDetailsPage.module.css";

import cruiseData from "../data/cruiseData";

import CruiseOverview from "../components/CruiseOverview/CruiseOverview";
import SailingDetails from "../components/SailingDetails/SailingDetails";
import Itinerary from "../components/Itinerary/Itinerary";
import CabinOptions from "../components/CabinOptions/CabinOptions";
import CruiseFeatures from "../components/CruiseFeatures/CruiseFeatures";

function CruiseDetailsPage() {
  const selectedCruise = cruiseData[3];

  return (
    <main className={styles.container}>
      <CruiseOverview cruise={selectedCruise} />

      <SailingDetails cruise={selectedCruise} />

      <Itinerary itinerary={selectedCruise.itinerary} />

      <CabinOptions cabins={selectedCruise.cabins} />

      <CruiseFeatures features={selectedCruise.features} />
    </main>
  );
}

export default CruiseDetailsPage;
