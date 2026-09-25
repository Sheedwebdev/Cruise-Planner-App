import styles from "./CabinOptions.module.css";

function CabinOptions() {
  return (
    <div className={styles.container}>
      <h2>CabinOptions</h2>
    </div>
  );
}

/*
 General Structure of Cruises Dataset

 const cruiseData = [
  {
   
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
  },
 */

/*
Acceptance Criteria

*/

export default CabinOptions;
