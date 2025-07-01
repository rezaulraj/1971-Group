import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
import AllServicePage from "./pages/services/all-services/AllServicePage";
import HourlyRecruiting from "./pages/services/hourly-recruiting/HourlyRecruiting";
import PayPerHiar from "./pages/services/pay-per-hire/PayPerHiar";
import HRPage from "./pages/services/hr/HRPage";
import StaffingPage from "./pages/services/staffing/StaffingPage";
import SubscriptionPage from "./pages/services/subscription/SubscriptionPage";
import Compnay from "./pages/company/Compnay";
import BlogPage from "./pages/resources/blog/BlogPage";
import BlogDetails from "./pages/resources/blog/BlogDetailes";
import GuidePage from "./pages/resources/guide/GuidePage";
import GuideDetails from "./pages/resources/guide/GuideDetails";
import Web3Page from "./pages/industries/Web3Page";
import AiPage from "./pages/industries/ai/AiPage";
import SubLayout from "./components/SubLayout";
import FintechPage from "./pages/industries/fintech/FintechPage";
import CloudPage from "./pages/industries/cloud/CloudPage";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="recruitment-services" element={<AllServicePage />} />
          <Route
            path="hourly-recruiting-services"
            element={<HourlyRecruiting />}
          />
          <Route path="pay-par-hire-services" element={<PayPerHiar />} />
          <Route path="hr-services" element={<HRPage />} />
          <Route path="staffing-services" element={<StaffingPage />} />
          <Route path="subscription-services" element={<SubscriptionPage />} />
          <Route path="company" element={<Compnay />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="blogs/:slug" element={<BlogDetails />} />
          <Route path="guides" element={<GuidePage />} />
          <Route path="/guides/:slug" element={<GuideDetails />} />
          {/* <Route path="web3" element={<Web3Page />} />
          <Route path="ai" element={<AiPage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<SubLayout />}>
          <Route path="web3" element={<Web3Page />} />
          <Route path="ai" element={<AiPage />} />
          <Route path="fintech" element={<FintechPage />} />
          <Route path="cloud-computing" element={<CloudPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
