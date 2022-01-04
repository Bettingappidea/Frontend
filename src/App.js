import LoginPage from "./components/login/LoginInput";
import LandingPage from "./components/landingPage/LandingPage";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Fragment,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
