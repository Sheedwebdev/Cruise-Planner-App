import CruiseCard from "../CruiseCard/CruiseCard";
import styles from "./CruiseList.module.css";

function CruiseList({ cruises }) {
  return (
    <div className={styles.container}>
      {cruises.map((cruise) => (
        <CruiseCard key={cruise.id} cruise={cruise} />
      ))}
    </div>
  );
}

/*
Acceptance Criteria
- All Criteria Completed!
*/

export default CruiseList;
