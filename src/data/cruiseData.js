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
