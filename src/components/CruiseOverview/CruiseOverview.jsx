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

export default CruiseOverview;
