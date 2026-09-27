const flightData = [
  {
    id: "FL-1001",
    airline: "Delta Air Lines",
    flightNumber: "DL 1842",

    departure: {
      airport: {
        code: "ATL",
        name: "Hartsfield-Jackson Atlanta International Airport",
        city: "Atlanta",
        state: "Georgia",
        country: "United States",
      },
      date: "2026-12-05",
      time: "10:15 AM",
    },

    arrival: {
      airport: {
        code: "MCO",
        name: "Orlando International Airport",
        city: "Orlando",
        state: "Florida",
        country: "United States",
      },
      date: "2026-12-05",
      time: "11:48 AM",
    },

    duration: {
      hours: 1,
      minutes: 33,
    },

    stops: 0,

    price: {
      amount: 189,
      currency: "USD",
      perPerson: true,
    },

    cabinClass: "Economy",

    baggage: {
      carryOnIncluded: true,
      checkedBagIncluded: false,
    },
  },

  {
    id: "FL-1002",
    airline: "American Airlines",
    flightNumber: "AA 2678",

    departure: {
      airport: {
        code: "ATL",
        name: "Hartsfield-Jackson Atlanta International Airport",
        city: "Atlanta",
        state: "Georgia",
        country: "United States",
      },
      date: "2026-12-05",
      time: "12:40 PM",
    },

    arrival: {
      airport: {
        code: "MCO",
        name: "Orlando International Airport",
        city: "Orlando",
        state: "Florida",
        country: "United States",
      },
      date: "2026-12-05",
      time: "2:12 PM",
    },

    duration: {
      hours: 1,
      minutes: 32,
    },

    stops: 0,

    price: {
      amount: 205,
      currency: "USD",
      perPerson: true,
    },

    cabinClass: "Economy",

    baggage: {
      carryOnIncluded: true,
      checkedBagIncluded: false,
    },
  },

  {
    id: "FL-1003",
    airline: "Southwest Airlines",
    flightNumber: "WN 421",

    departure: {
      airport: {
        code: "ATL",
        name: "Hartsfield-Jackson Atlanta International Airport",
        city: "Atlanta",
        state: "Georgia",
        country: "United States",
      },
      date: "2026-12-05",
      time: "2:25 PM",
    },

    arrival: {
      airport: {
        code: "MCO",
        name: "Orlando International Airport",
        city: "Orlando",
        state: "Florida",
        country: "United States",
      },
      date: "2026-12-05",
      time: "3:58 PM",
    },

    duration: {
      hours: 1,
      minutes: 33,
    },

    stops: 0,

    price: {
      amount: 219,
      currency: "USD",
      perPerson: true,
    },

    cabinClass: "Economy",

    baggage: {
      carryOnIncluded: true,
      checkedBagIncluded: true,
    },
  },

  {
    id: "FL-1004",
    airline: "United Airlines",
    flightNumber: "UA 615",

    departure: {
      airport: {
        code: "ATL",
        name: "Hartsfield-Jackson Atlanta International Airport",
        city: "Atlanta",
        state: "Georgia",
        country: "United States",
      },
      date: "2026-12-05",
      time: "4:10 PM",
    },

    arrival: {
      airport: {
        code: "MCO",
        name: "Orlando International Airport",
        city: "Orlando",
        state: "Florida",
        country: "United States",
      },
      date: "2026-12-05",
      time: "7:05 PM",
    },

    duration: {
      hours: 2,
      minutes: 55,
    },

    stops: 1,

    price: {
      amount: 174,
      currency: "USD",
      perPerson: true,
    },

    cabinClass: "Economy",

    baggage: {
      carryOnIncluded: true,
      checkedBagIncluded: false,
    },
  },
];

export default flightData;
