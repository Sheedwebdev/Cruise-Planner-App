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
    <main>
      <h1>Trip Summary</h1>
      <CruiseSummary cruise={selectedCruise} />
      <FlightSummary flight={selectedFlight} />
      <AirBnbSummary airbnb={selectedAirbnb} />
      <TripCostSummary
        cruise={selectedCruise}
        flight={selectedFlight}
        airbnb={selectedAirbnb}
      />
    </main>
  );
}

/*
Acceptance Criteria
  -All Criteria Completed!!!
*/

export default TripSummaryPage;
