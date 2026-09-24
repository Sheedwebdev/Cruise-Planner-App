import CruiseList from "../components/CruiseList/CruiseList";
import cruiseData from "../data/cruiseData";

function HomePage() {
  return (
    <main>
      <CruiseList cruises={cruiseData} />
    </main>
  );
}

/**
 Acceptance Criteria
- All Criteria Completed!
*/

export default HomePage;
