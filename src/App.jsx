// React Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import "./styles/header.css";

// Assets
import logo from "./assets/images/logo.svg";

// Pages & Apps
import Homepage from "./pages/Homepage";
import Weather from "./pages/Apps/Weather";
import Calculator from "./pages/Apps/Calculator";
import StickyNotes from "./pages/Apps/StickyNotes";

const App = () => {
  return (
    <BrowserRouter>
      <header className="site-header">
        <nav className="site-nav container">
          <Link to="/">
            <img src={logo} className="logo" alt="Multi App" />
          </Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/apps">
            <Route path="weather" element={<Weather />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="sticky-notes" element={<StickyNotes />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
