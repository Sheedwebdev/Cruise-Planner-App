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

    amenities: [
      {
        name: "Wi-Fi",
        included: true,
      },
      {
        name: "Free Parking",
        included: true,
      },
      {
        name: "Kitchen",
        included: true,
      },
      {
        name: "Washer & Dryer",
        included: true,
      },
    ],

    features: [
      {
        name: "Beach Access",
        available: true,
      },
      {
        name: "Private Patio",
        available: true,
      },
      {
        name: "Pool",
        available: false,
      },
    ],
  },

  {
    id: "AB-1002",

    property: {
      name: "Modern Cocoa Beach Condo",
      type: "Entire Condo",
      rating: 4.6,
      reviews: 178,
    },

    host: {
      name: "Jessica",
      isSuperhost: true,
    },

    location: {
      neighborhood: "Cocoa Beach",
      city: "Cocoa Beach",
      state: "Florida",
      country: "United States",

      distanceFromCruisePort: {
        miles: 4.5,
      },
    },

    stay: {
      checkIn: "2026-12-04",
      checkOut: "2026-12-05",
      nights: 1,
    },

    guests: {
      maxGuests: 4,
    },

    bedrooms: 2,

    price: {
      nightlyRate: 165,
      cleaningFee: 30,
      serviceFee: 25,
      total: 220,
      currency: "USD",
    },

    amenities: [
      {
        name: "Wi-Fi",
        included: true,
      },
      {
        name: "Free Parking",
        included: true,
      },
      {
        name: "Kitchen",
        included: true,
      },
      {
        name: "Washer & Dryer",
        included: false,
      },
    ],

    features: [
      {
        name: "Beach Access",
        available: true,
      },
      {
        name: "Ocean View",
        available: true,
      },
      {
        name: "Pool",
        available: true,
      },
    ],
  },

  {
    id: "AB-1003",

    property: {
      name: "Affordable Port Canaveral Apartment",
      type: "Entire Apartment",
      rating: 4.4,
      reviews: 96,
    },

    host: {
      name: "Daniel",
      isSuperhost: false,
    },

    location: {
      neighborhood: "Port Canaveral",
      city: "Cape Canaveral",
      state: "Florida",
      country: "United States",

      distanceFromCruisePort: {
        miles: 1.1,
      },
    },

    stay: {
      checkIn: "2026-12-04",
      checkOut: "2026-12-05",
      nights: 1,
    },

    guests: {
      maxGuests: 4,
    },

    bedrooms: 1,

    price: {
      nightlyRate: 119,
      cleaningFee: 25,
      serviceFee: 20,
      total: 164,
      currency: "USD",
    },

    amenities: [
      {
        name: "Wi-Fi",
        included: true,
      },
      {
        name: "Free Parking",
        included: true,
      },
      {
        name: "Kitchen",
        included: true,
      },
      {
        name: "Washer & Dryer",
        included: false,
      },
    ],

    features: [
      {
        name: "Beach Access",
        available: false,
      },
      {
        name: "Private Balcony",
        available: true,
      },
      {
        name: "Pool",
        available: false,
      },
    ],
  },

  {
    id: "AB-1004",

    property: {
      name: "Luxury Oceanfront Retreat",
      type: "Entire Condo",
      rating: 4.9,
      reviews: 321,
    },

    host: {
      name: "Taylor",
      isSuperhost: true,
    },

    location: {
      neighborhood: "Cocoa Beach",
      city: "Cocoa Beach",
      state: "Florida",
      country: "United States",

      distanceFromCruisePort: {
        miles: 5.2,
      },
    },

    stay: {
      checkIn: "2026-12-04",
      checkOut: "2026-12-05",
      nights: 1,
    },

    guests: {
      maxGuests: 8,
    },

    bedrooms: 3,

    price: {
      nightlyRate: 275,
      cleaningFee: 50,
      serviceFee: 40,
      total: 365,
      currency: "USD",
    },

    amenities: [
      {
        name: "Wi-Fi",
        included: true,
      },
      {
        name: "Free Parking",
        included: true,
      },
      {
        name: "Kitchen",
        included: true,
      },
      {
        name: "Washer & Dryer",
        included: true,
      },
    ],

    features: [
      {
        name: "Beach Access",
        available: true,
      },
      {
        name: "Ocean View",
        available: true,
      },
      {
        name: "Pool",
        available: true,
      },
    ],
  },
];

export default airbnbData;
