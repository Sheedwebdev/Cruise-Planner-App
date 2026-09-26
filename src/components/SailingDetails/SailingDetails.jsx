import styles from "./SailingDetails.module.css";

function SailingDetails({ cruise }) {
  const {
    sailing: { departure, arrival, duration },
  } = cruise;

  return (
    <article className={styles.container}>
      <h2>Departure</h2>
      <div>
        <p>Port: {departure.port.name}</p>
        <p>City: {departure.port.city}</p>
        <p>State: {departure.port.state}</p>
        <p>Country: {departure.port.country}</p>
        <p>Date: {departure.date}</p>
        <p>Time: {departure.time}</p>
      </div>
      <h2>Arrival</h2>
      <div>
        <p>Port: {arrival.port.name}</p>
        <p>City: {arrival.port.city}</p>
        <p>State: {arrival.port.state}</p>
        <p>Country: {arrival.port.country}</p>
        <p>Date: {arrival.date}</p>
        <p>Time: {arrival.time}</p>
      </div>
      <h2>Duration</h2>
      <div>
        <p>Nights: {duration.nights}</p>
        <p>Days: {duration.days}</p>
      </div>
    </article>
  );
}

/*
 General Structure of Cruises Dataset

   sailing: {
      departure: {
        port: {
          name: "Port Canaveral",
          city: "Orlando",
          state: "Florida",
          country: "United States",
        },
        date: "2026-12-06",
        time: "4:30 PM",
      },

      arrival: {
        port: {
          name: "Port Canaveral",
          city: "Orlando",
          state: "Florida",
          country: "United States",
        },
        date: "2026-12-13",
        time: "6:30 AM",
      },

      duration: {
        nights: 7,
        days: 8,
      },
    },
 */

/*
Acceptance criteria
 - All Criteria Completed!
*/

export default SailingDetails;
