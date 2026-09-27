import styles from "./AirbnbCard.module.css";

function AirbnbCard({ airbnb }) {
  const {
    property,
    host,
    location,
    stay,
    guests,
    bedrooms,
    price,
    amenities,
    features,
  } = airbnb;

  return (
    <article className={styles.container}>
      <div>
        <p>
          <strong>Property</strong>: {property.name}
        </p>
        <p>
          <strong>Type:</strong> {property.type}
        </p>
        <p>
          <strong>Rating:</strong> {property.rating}
        </p>
        <p>
          <strong>Number of Reviews:</strong> {property.reviews}
        </p>
      </div>
      <div>
        <p>
          <strong>Host:</strong> {host.name}
        </p>
        <p>
          <strong>Super Host Status:</strong> {host.isSuperhost ? "Yes" : "No"}
        </p>
      </div>
      <div>
        <p>
          <strong>Neighborhood:</strong> {location.neighborhood}
        </p>
        <p>
          <strong>City:</strong> {location.city}
        </p>
        <p>
          <strong>State:</strong> {location.state}
        </p>
        <p>
          <strong>Country:</strong> {location.country}
        </p>
        <p>
          <strong>Cruise Port Distance:</strong>{" "}
          {location.distanceFromCruisePort.miles} mi
        </p>
      </div>
      <div>
        <p>
          <strong>Check In Date:</strong> {stay.checkIn}
        </p>
        <p>
          <strong>Check Out Date:</strong> {stay.checkOut}
        </p>
        <p>
          <strong>Total Nights:</strong> {stay.nights}
        </p>
      </div>
      <div>
        <p>
          <strong>Max Guests:</strong> {guests.maxGuests}
        </p>
        <p>
          <strong>Bedrooms:</strong> {bedrooms}
        </p>
      </div>
      <div>
        <p>
          <strong>Nightly Rate:</strong> ${price.nightlyRate} / night
        </p>
        <p>
          <strong>Cleaning Fee:</strong> ${price.cleaningFee}
        </p>
        <p>
          <strong>Service Fee:</strong> ${price.serviceFee}
        </p>
        <p>
          <strong>Total Price:</strong> ${price.total}
        </p>
        <p>
          <strong>Currency:</strong> {price.currency}
        </p>
      </div>
      <div className={styles.amenities}>
        <h3>Amenities</h3>
        {amenities.map(({ name, included }) => (
          <div key={name}>
            <p>
              {name}: {included ? "Included" : "Not Included"}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.features}>
        <h3>Features</h3>
        {features.map(({ name, available }) => (
          <div key={name}>
            <p>
              {name}: {available ? "Available" : "Not Available"}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

/*
Acceptance Criteria
- All Criteria Completed!
*/
export default AirbnbCard;
