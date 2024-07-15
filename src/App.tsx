import { Route, Routes } from "react-router-dom";
import LandingPageIndex from "./LandingPage/LandingPageIndex";
import PrivacyPolicy from "./Privacy/PrivacyPolicy";
import HowWeWork from "./Privacy/Howwework";
import Navbar from "./LandingPage/Navbar/Navbar";
import TermsAndConditions from "./Privacy/Terms";
import DeletePage from "./LandingPage/DeleteAccount";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={LandingPageIndex} />
        <Route path="/privacy" Component={PrivacyPolicy} />
        <Route path="/how-we-work" Component={HowWeWork} />
        <Route path="/terms" Component={TermsAndConditions} />
        <Route path="/delete-account" Component={DeletePage} />
      </Routes>
    </>
  );
}

export default App;
