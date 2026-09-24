import styles from "./CruiseCard.module.css";

function CruiseCard({ cruise }) {
  const {
    cruiseLine,
    ship,
    sailing,
    destination,
    // itinerary,
    // cabins,
    // features,
  } = cruise;

  return (
    <article className={styles.container}>
      <h2>{cruiseLine}</h2>

      <p>{ship.name}</p>

      <div className={styles.port}>
        <strong>Departure Port Info</strong>

        <p>{sailing.departure.port.name}</p>
        <p>{sailing.departure.port.city}</p>
        <p>{sailing.departure.port.state}</p>
        <p>{sailing.departure.port.country}</p>
      </div>

      <p>
        <strong>Destination:</strong> {destination.region}
      </p>
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

    destination: {
      region: "Caribbean",
      description: "Western Caribbean",
    },

    itinerary: [
      {
        day: 1,
        date: "2026-12-06",
        port: {
          name: "Port Canaveral",
          country: "United States",
          type: "departure",
        },
        arrivalTime: null,
        departureTime: "4:30 PM",
        activities: [
          {
            id: "ACT-101",
            name: "Embarkation",
            category: "Cruise",
            durationMinutes: 120,
          },
        ],
      },
    ]
    cabins: [
      {
        id: "CAB-101",
        category: "Interior",
        description: "Comfortable interior stateroom",
        price: {
          amount: 899,
          currency: "USD",
          perPerson: true,
        },
        availability: "available",
        amenities: [
          {
            name: "Wi-Fi",
            included: false,
          },
          {
            name: "Room Service",
            included: true,
          },
          {
            name: "Television",
            included: true,
          },
        ],
      },
    ],

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
Acceptance Criteria
- All Criteria Completed!
*/

export default CruiseCard;
