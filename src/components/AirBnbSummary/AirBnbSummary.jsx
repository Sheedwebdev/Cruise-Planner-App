import styles from "./AirBnbSummary.module.css";

function AirBnbSummary({ airbnb }) {
  const {
    property,
    location: { neighborhood, city, distanceFromCruisePort },
    stay: { checkIn, checkOut, nights },
    guests: { maxGuests },
    bedrooms,
    price: { total, currency },
  } = airbnb;
  return (
    <div className={styles.container}>
      <h2>Airbnb Summary</h2>
      <div>
        <p>
          <strong>Property:</strong> {property.name}
        </p>
        <p>
          <strong>Type:</strong> {property.type}
        </p>
        <p>
          <strong>Rating:</strong> {property.rating}
        </p>
      </div>
      <div>
        <p>
          <strong>Neighborhood:</strong> {neighborhood}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <p>
          <strong>Distance From Port:</strong> {distanceFromCruisePort.miles}{" "}
          miles
        </p>
      </div>
      <div>
        <p>
          <strong>Check In:</strong> {checkIn}
        </p>
        <p>
          <strong>Check Out:</strong> {checkOut}
        </p>
        <p>
          <strong>Total Nights:</strong> {nights}
        </p>
        <p>
          <strong>Guests:</strong> {maxGuests}
        </p>
        <p>
          <strong>Bedrooms:</strong> {bedrooms}
        </p>
      </div>
      <div>
        <p>
          <strong>Total Price:</strong> ${total}
        </p>
        <p>
          <strong>Currency:</strong> {currency}
        </p>
      </div>
    </div>
  );
}

/*
const airbnbData = [
  {
    id: "AB-1001",

    property: {
      name: "Cozy Cape Canaveral Beach House",
      type: "Entire Home",
      rating: 4.8,
      reviews: 214,
    },

    host: {
      name: "Marcus",
      isSuperhost: true,
    },

    location: {
      neighborhood: "Cape Canaveral",
      city: "Cape Canaveral",
      state: "Florida",
      country: "United States",

      distanceFromCruisePort: {
        miles: 1.7,
      },
    },

    stay: {
      checkIn: "2026-12-04",
      checkOut: "2026-12-05",
      nights: 1,
    },

    guests: {
      maxGuests: 6,
    },

    bedrooms: 3,

    price: {
      nightlyRate: 185,
      cleaningFee: 35,
      serviceFee: 28,
      total: 248,
      currency: "USD",
    },
*/

/*
Acceptance Criteria
 - All Criteria Completed!!!
*/

export default AirBnbSummary;
