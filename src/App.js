import LoginPage from "./components/login/LoginInput2";
import LandingPage from "./components/landingPage/LandingPage";
import Footer from "./components/footer/footer";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Fragment,
  Redirect,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Account from "./components/account/Account";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Navigate replace to="/" />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
