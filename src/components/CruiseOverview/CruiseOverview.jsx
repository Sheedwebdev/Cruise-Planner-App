import styles from "./CruiseOverview.module.css";

function CruiseOverview({ cruise }) {
  const { cruiseLine, ship, destination } = cruise;

  return (
    <article className={styles.container}>
      <h2>{cruiseLine}</h2>
      <div>
        <p>{ship.name}</p>
        <p>{ship.class}</p>
        <p>{ship.yearBuilt}</p>
        <p>{ship.capacity}</p>
        <p>{ship.rating}</p>
      </div>
      <div>
        <p>{destination.region}</p>
        <p>{destination.description}</p>
      </div>
    </article>
  );
}

/*
Acceptance Criteria
- All Criteria Completed!
*/

export default CruiseOverview;
