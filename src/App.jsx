// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";

const App = () => {
  return (
    <>
      <header></header>
      <main className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>Hello World</>} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
