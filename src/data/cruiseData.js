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
      {
        day: 2,
        date: "2026-12-07",
        port: {
          name: "CocoCay",
          country: "Bahamas",
          type: "port_of_call",
        },
        arrivalTime: "7:00 AM",
        departureTime: "5:00 PM",
        activities: [
          {
            id: "ACT-102",
            name: "Perfect Day at CocoCay",
            category: "Excursion",
            durationMinutes: 480,
          },
        ],
      },
      {
        day: 3,
        date: "2026-12-08",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-103",
            name: "Pool and Entertainment",
            category: "Entertainment",
            durationMinutes: 240,
          },
        ],
      },
      {
        day: 4,
        date: "2026-12-09",
        port: {
          name: "Cozumel",
          country: "Mexico",
          type: "port_of_call",
        },
        arrivalTime: "8:00 AM",
        departureTime: "6:00 PM",
        activities: [
          {
            id: "ACT-104",
            name: "Cozumel Island Tour",
            category: "Excursion",
            durationMinutes: 360,
          },
        ],
      },
      {
        day: 5,
        date: "2026-12-10",
        port: {
          name: "Costa Maya",
          country: "Mexico",
          type: "port_of_call",
        },
        arrivalTime: "8:00 AM",
        departureTime: "5:00 PM",
        activities: [
          {
            id: "ACT-105",
            name: "Mayan Ruins Excursion",
            category: "Excursion",
            durationMinutes: 300,
          },
        ],
      },
      {
        day: 6,
        date: "2026-12-11",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-106",
            name: "Specialty Dining",
            category: "Dining",
            durationMinutes: 120,
          },
        ],
      },
      {
        day: 7,
        date: "2026-12-12",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-107",
            name: "Final Day Entertainment",
            category: "Entertainment",
            durationMinutes: 180,
          },
        ],
      },
      {
        day: 8,
        date: "2026-12-13",
        port: {
          name: "Port Canaveral",
          country: "United States",
          type: "arrival",
        },
        arrivalTime: "6:30 AM",
        departureTime: null,
        activities: [
          {
            id: "ACT-108",
            name: "Disembarkation",
            category: "Cruise",
            durationMinutes: 120,
          },
        ],
      },
    ],

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

  {
    id: "CR-1002",
    cruiseLine: "Carnival Cruise Line",
    ship: {
      name: "Carnival Celebration",
      class: "Excel Class",
      yearBuilt: 2022,
      capacity: 5374,
      rating: 4.6,
    },

    sailing: {
      departure: {
        port: {
          name: "PortMiami",
          city: "Miami",
          state: "Florida",
          country: "United States",
        },
        date: "2027-01-10",
        time: "4:00 PM",
      },

      arrival: {
        port: {
          name: "PortMiami",
          city: "Miami",
          state: "Florida",
          country: "United States",
        },
        date: "2027-01-17",
        time: "8:00 AM",
      },

      duration: {
        nights: 7,
        days: 8,
      },
    },

    destination: {
      region: "Caribbean",
      description: "Eastern Caribbean",
    },

    itinerary: [
      {
        day: 1,
        date: "2027-01-10",
        port: {
          name: "PortMiami",
          country: "United States",
          type: "departure",
        },
        arrivalTime: null,
        departureTime: "4:00 PM",
        activities: [
          {
            id: "ACT-201",
            name: "Embarkation",
            category: "Cruise",
            durationMinutes: 120,
          },
        ],
      },
      {
        day: 2,
        date: "2027-01-11",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-202",
            name: "Ship Activities",
            category: "Entertainment",
            durationMinutes: 240,
          },
        ],
      },
      {
        day: 3,
        date: "2027-01-12",
        port: {
          name: "Amber Cove",
          country: "Dominican Republic",
          type: "port_of_call",
        },
        arrivalTime: "9:00 AM",
        departureTime: "6:00 PM",
        activities: [
          {
            id: "ACT-203",
            name: "Puerto Plata Adventure",
            category: "Excursion",
            durationMinutes: 360,
          },
        ],
      },
      {
        day: 4,
        date: "2027-01-13",
        port: {
          name: "San Juan",
          country: "Puerto Rico",
          type: "port_of_call",
        },
        arrivalTime: "8:00 AM",
        departureTime: "5:00 PM",
        activities: [
          {
            id: "ACT-204",
            name: "Old San Juan Tour",
            category: "Excursion",
            durationMinutes: 300,
          },
        ],
      },
      {
        day: 5,
        date: "2027-01-14",
        port: {
          name: "St. Thomas",
          country: "U.S. Virgin Islands",
          type: "port_of_call",
        },
        arrivalTime: "8:00 AM",
        departureTime: "6:00 PM",
        activities: [
          {
            id: "ACT-205",
            name: "St. Thomas Beach Excursion",
            category: "Excursion",
            durationMinutes: 300,
          },
        ],
      },
      {
        day: 6,
        date: "2027-01-15",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-206",
            name: "Comedy Show",
            category: "Entertainment",
            durationMinutes: 120,
          },
        ],
      },
      {
        day: 7,
        date: "2027-01-16",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-207",
            name: "Final Night Celebration",
            category: "Entertainment",
            durationMinutes: 180,
          },
        ],
      },
      {
        day: 8,
        date: "2027-01-17",
        port: {
          name: "PortMiami",
          country: "United States",
          type: "arrival",
        },
        arrivalTime: "8:00 AM",
        departureTime: null,
        activities: [
          {
            id: "ACT-208",
            name: "Disembarkation",
            category: "Cruise",
            durationMinutes: 120,
          },
        ],
      },
    ],

    cabins: [
      {
        id: "CAB-201",
        category: "Ocean View",
        description: "Ocean view stateroom with large window",
        price: {
          amount: 1049,
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
        name: "Celebration Central",
        category: "Entertainment",
        available: true,
      },
    ],
  },

  {
    id: "CR-1003",
    cruiseLine: "Norwegian Cruise Line",
    ship: {
      name: "Norwegian Prima",
      class: "Prima Class",
      yearBuilt: 2022,
      capacity: 3215,
      rating: 4.7,
    },

    sailing: {
      departure: {
        port: {
          name: "Port Canaveral",
          city: "Orlando",
          state: "Florida",
          country: "United States",
        },
        date: "2027-02-14",
        time: "5:00 PM",
      },

      arrival: {
        port: {
          name: "Port Canaveral",
          city: "Orlando",
          state: "Florida",
          country: "United States",
        },
        date: "2027-02-21",
        time: "7:00 AM",
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
        date: "2027-02-14",
        port: {
          name: "Port Canaveral",
          country: "United States",
          type: "departure",
        },
        arrivalTime: null,
        departureTime: "5:00 PM",
        activities: [
          {
            id: "ACT-301",
            name: "Embarkation",
            category: "Cruise",
            durationMinutes: 120,
          },
        ],
      },
      {
        day: 2,
        date: "2027-02-15",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-302",
            name: "Pool Day",
            category: "Entertainment",
            durationMinutes: 240,
          },
        ],
      },
      {
        day: 3,
        date: "2027-02-16",
        port: {
          name: "Roatan",
          country: "Honduras",
          type: "port_of_call",
        },
        arrivalTime: "8:00 AM",
        departureTime: "5:00 PM",
        activities: [
          {
            id: "ACT-303",
            name: "Roatan Island Adventure",
            category: "Excursion",
            durationMinutes: 300,
          },
        ],
      },
      {
        day: 4,
        date: "2027-02-17",
        port: {
          name: "Costa Maya",
          country: "Mexico",
          type: "port_of_call",
        },
        arrivalTime: "8:00 AM",
        departureTime: "5:00 PM",
        activities: [
          {
            id: "ACT-304",
            name: "Mayan Culture Tour",
            category: "Excursion",
            durationMinutes: 300,
          },
        ],
      },
      {
        day: 5,
        date: "2027-02-18",
        port: {
          name: "Cozumel",
          country: "Mexico",
          type: "port_of_call",
        },
        arrivalTime: "8:00 AM",
        departureTime: "6:00 PM",
        activities: [
          {
            id: "ACT-305",
            name: "Snorkeling Adventure",
            category: "Excursion",
            durationMinutes: 240,
          },
        ],
      },
      {
        day: 6,
        date: "2027-02-19",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-306",
            name: "Specialty Dining",
            category: "Dining",
            durationMinutes: 120,
          },
        ],
      },
      {
        day: 7,
        date: "2027-02-20",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-307",
            name: "Live Entertainment",
            category: "Entertainment",
            durationMinutes: 180,
          },
        ],
      },
      {
        day: 8,
        date: "2027-02-21",
        port: {
          name: "Port Canaveral",
          country: "United States",
          type: "arrival",
        },
        arrivalTime: "7:00 AM",
        departureTime: null,
        activities: [
          {
            id: "ACT-308",
            name: "Disembarkation",
            category: "Cruise",
            durationMinutes: 120,
          },
        ],
      },
    ],

    cabins: [
      {
        id: "CAB-301",
        category: "Balcony",
        description: "Balcony stateroom with private outdoor space",
        price: {
          amount: 1399,
          currency: "USD",
          perPerson: true,
        },
        availability: "available",
        amenities: [
          {
            name: "Wi-Fi",
            included: true,
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
        name: "Ocean Boulevard",
        category: "Dining",
        available: true,
      },
    ],
  },

  {
    id: "CR-1004",
    cruiseLine: "Disney Cruise Line",
    ship: {
      name: "Disney Wish",
      class: "Wish Class",
      yearBuilt: 2022,
      capacity: 4000,
      rating: 4.9,
    },

    sailing: {
      departure: {
        port: {
          name: "Port Canaveral",
          city: "Orlando",
          state: "Florida",
          country: "United States",
        },
        date: "2027-03-07",
        time: "5:45 PM",
      },

      arrival: {
        port: {
          name: "Port Canaveral",
          city: "Orlando",
          state: "Florida",
          country: "United States",
        },
        date: "2027-03-11",
        time: "9:00 AM",
      },

      duration: {
        nights: 4,
        days: 5,
      },
    },

    destination: {
      region: "Bahamas",
      description: "Bahamas & Castaway Cay",
    },

    itinerary: [
      {
        day: 1,
        date: "2027-03-07",
        port: {
          name: "Port Canaveral",
          country: "United States",
          type: "departure",
        },
        arrivalTime: null,
        departureTime: "5:45 PM",
        activities: [
          {
            id: "ACT-401",
            name: "Embarkation",
            category: "Cruise",
            durationMinutes: 120,
          },
        ],
      },
      {
        day: 2,
        date: "2027-03-08",
        port: {
          name: "Nassau",
          country: "Bahamas",
          type: "port_of_call",
        },
        arrivalTime: "8:00 AM",
        departureTime: "5:00 PM",
        activities: [
          {
            id: "ACT-402",
            name: "Nassau Island Tour",
            category: "Excursion",
            durationMinutes: 300,
          },
        ],
      },
      {
        day: 3,
        date: "2027-03-09",
        port: {
          name: "Castaway Cay",
          country: "Bahamas",
          type: "port_of_call",
        },
        arrivalTime: "8:30 AM",
        departureTime: "5:00 PM",
        activities: [
          {
            id: "ACT-403",
            name: "Castaway Cay Beach Day",
            category: "Excursion",
            durationMinutes: 360,
          },
        ],
      },
      {
        day: 4,
        date: "2027-03-10",
        port: {
          name: "At Sea",
          country: "International Waters",
          type: "sea_day",
        },
        arrivalTime: null,
        departureTime: null,
        activities: [
          {
            id: "ACT-404",
            name: "Family Entertainment",
            category: "Entertainment",
            durationMinutes: 240,
          },
        ],
      },
      {
        day: 5,
        date: "2027-03-11",
        port: {
          name: "Port Canaveral",
          country: "United States",
          type: "arrival",
        },
        arrivalTime: "9:00 AM",
        departureTime: null,
        activities: [
          {
            id: "ACT-405",
            name: "Disembarkation",
            category: "Cruise",
            durationMinutes: 120,
          },
        ],
      },
    ],

    cabins: [
      {
        id: "CAB-401",
        category: "Deluxe Oceanview",
        description: "Family-friendly stateroom with ocean view",
        price: {
          amount: 1599,
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
        name: "Disney's Oceaneer Club",
        category: "Family",
        available: true,
      },
    ],
  },
];

export default cruiseData;
