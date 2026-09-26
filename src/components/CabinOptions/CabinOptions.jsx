import styles from "./CabinOptions.module.css";

function CabinOptions({ cabins }) {
  return (
    <div className={styles.container}>
      <h2>Cabin Options</h2>
      {cabins.map((cabin) => (
        <Cabin key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}

function Cabin({ cabin }) {
  const {
    category,
    description,
    price: { amount, currency, perPerson },
    availability,
    amenities,
  } = cabin;
  return (
    <article>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>
        Price: {amount} {perPerson && "Per Person"}
      </p>
      <p>Currency: {currency}</p>
      <p>
        {availability === "available"
          ? "✅ Currently Available"
          : "❌ No Longer Available"}
      </p>
      <h3>Amenities</h3>
      {amenities.map((amenity) => (
        <Amenity key={amenity.name} amenityOption={amenity} />
      ))}
    </article>
  );
}

function Amenity({ amenityOption }) {
  const { name, included } = amenityOption;

  return (
    <article className={styles.amenity}>
      <p>{included ? `${name} is included` : `${name} is not included`}</p>
    </article>
  );
}

/*
Acceptance Criteria
 - All Acceptance Criteria Completed!
*/

export default CabinOptions;
