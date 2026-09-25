import cruiseData from "../data/cruiseData";
import CruiseOverview from "../components/CruiseOverview/CruiseOverview";
import SailingDetails from "../components/SailingDetails/SailingDetails";
import Itinerary from "../components/Itinerary/Itinerary";
import CabinOptions from "../components/CabinOptions/CabinOptions";
import CruiseFeatures from "../components/CruiseFeatures/CruiseFeatures";

function CruiseDetailsPage() {
  const selectedCruise = cruiseData[3];
  return (
    <main>
      <CruiseOverview cruise={selectedCruise} />
      <SailingDetails cruise={selectedCruise} />
      <Itinerary itinerary={selectedCruise.itinerary} />
      <CabinOptions />
      <CruiseFeatures />
    </main>
  );
}

export default CruiseDetailsPage;

/*
Acceptance Criteria
- Assign values to all props for the each component instance being rendered.
*/
