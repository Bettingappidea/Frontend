import LoginPage from "./components/login/LoginInput";
import LandingPage from "./components/landingPage/LandingPage";
import Footer from "./components/footer/footer";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Fragment,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" Redirect to="/" />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
