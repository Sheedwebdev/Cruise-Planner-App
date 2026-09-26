import styles from "./CruiseFeatures.module.css";

function CruiseFeatures({ features }) {
  return (
    <div className={styles.container}>
      <h2>Cruise Features</h2>
      {features.map((feature) => (
        <Feature key={feature.name} featureOption={feature} />
      ))}
    </div>
  );
}

function Feature({ featureOption }) {
  const { name, category, available } = featureOption;
  return (
    <article>
      <p>Feature: {name}</p>
      <p>Category: {category}</p>
      <p>{available ? "✅ Available" : "❌ Not Available"}</p>
    </article>
  );
}

/*
 General Structure of Cruises Dataset

 const cruiseData = [
  {
    id: "CR-1001",
    cruiseLine: "Royal Caribbean",
    ship: {
      name: "Wonder of the Seas",
      class: "Oasis Class",
      yearBuilt: 2022,
      capacity: 6988,
      rating: 4.8,
    },
    features: [
      {
        name: "AquaTheater",
        category: "Entertainment",
        available: true,
      },
    ],
  },
 */

/*
Acceptance criteria
 - All Criteria Completed!
*/

export default CruiseFeatures;
