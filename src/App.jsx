import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import CruiseDetailsPage from "./pages/CruiseDetailsPage";
import FlightStayPage from "./pages/FlightStayPage";
import TripSummaryPage from "./pages/TripSummaryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cruise-details" element={<CruiseDetailsPage />} />
        <Route path="/flight-stay" element={<FlightStayPage />} />
        <Route path="/trip-summary" element={<TripSummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
