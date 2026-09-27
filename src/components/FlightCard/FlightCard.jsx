import styles from "./FlightCard.module.css";
// baggage: {
//   carryOnIncluded: true,
//   checkedBagIncluded: false,
// },

function FlightCard({ flight }) {
  const {
    airline,
    flightNumber,
    departure,
    arrival,
    duration,
    stops,
    cabinClass,
    price: { amount, currency, perPerson },
    baggage: { carryOnIncluded, checkedBagIncluded },
  } = flight;
  return (
    <article className={styles.container}>
      <div>
        <p>{airline}</p>
        <p>{flightNumber}</p>
      </div>
      <div>
        <p>{departure.airport.code}</p>
        <p>{departure.airport.name}</p>
        <p>{departure.airport.city}</p>
        <p>{departure.airport.state}</p>
        <p>{departure.airport.country}</p>
        <p>{departure.date}</p>
        <p>{departure.time}</p>
      </div>
      <div>
        <p>{arrival.airport.code}</p>
        <p>{arrival.airport.name}</p>
        <p>{arrival.airport.city}</p>
        <p>{arrival.airport.state}</p>
        <p>{arrival.airport.country}</p>
        <p>{arrival.date}</p>
        <p>{arrival.time}</p>
      </div>
      <div>
        <p>{`${duration.hours} hr ${duration.minutes} min`}</p>
        <p>{stops === 0 ? "Nonstop" : `${stops} Stop`}</p>
        <p>{cabinClass}</p>
      </div>
      <div>
        <p>
          {amount} {perPerson && "Per Person"}
        </p>
        <p>{currency}</p>
      </div>
      <div>
        <p>
          {carryOnIncluded
            ? "Carry On Bags Are Included"
            : "Carry On Bags Are Not Included!"}
        </p>
        <p>
          {checkedBagIncluded
            ? "Checked Bags Are Included"
            : "Checked Bags Are Not Included!"}
        </p>
      </div>
    </article>
  );
}

/*
Acceptance Criteria
  - All Criteria Completed!
*/

export default FlightCard;
