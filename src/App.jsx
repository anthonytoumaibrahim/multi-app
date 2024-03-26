// React Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import "./styles/header.css";

// Assets
import logo from "./assets/images/logo.svg";

// Pages
import Homepage from "./pages/Homepage";

// Apps Data
import { apps } from "./data/apps";

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
            {apps.map((app, index) => (
              <Route key={index} path={app.path} element={app.component} />
            ))}
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
