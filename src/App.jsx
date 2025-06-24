import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
import AllServicePage from "./pages/services/all-services/AllServicePage";
import HourlyRecruiting from "./pages/services/hourly-recruiting/HourlyRecruiting";
import PayPerHiar from "./pages/services/pay-per-hire/PayPerHiar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-services" element={<AllServicePage />} />
          <Route path="/hourly-recruiting" element={<HourlyRecruiting />} />
          <Route path="/pay-par-hire" element={<PayPerHiar />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
