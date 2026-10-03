import styles from "./TripCostSummary.module.css";

function TripCostSummary() {
  return (
    <div className={styles.container}>
      <h2>Trip Cost Summary</h2>
    </div>
  );
}

/*
Acceptance Criteria
 Receive cruise through props
 Receive flight through props
 Receive airbnb through props
 Access the first cabin from the selected cruise using cruise.cabins[0]
 Retrieve the cabin's price amount
 Display the cruise/cabin price
 Retrieve the flight price amount
 Display the flight price
 Retrieve the Airbnb total price
 Display the Airbnb price
 Retrieve the currency from the appropriate price objects
 Calculate the combined trip cost using the cruise cabin price + flight price + Airbnb total
 Store the calculated combined cost in a variable
 Display the calculated combined trip cost
 Do not hard-code the combined trip cost
 Use the actual data received through props
 Use appropriate nested destructuring where it makes the code clearer
 Organize the cruise, flight, Airbnb, and total costs into logical JSX sections
 Apply the CSS Module using className
 Do not use React hooks
 Do not add event handlers
 Do not add user interaction
 Export TripCostSummary as the default export
*/

export default TripCostSummary;
