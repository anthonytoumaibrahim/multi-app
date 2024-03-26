// Components
import Weather from "../pages/Apps/Weather";
import Calculator from "../pages/Apps/Calculator";
import StickyNotes from "../pages/Apps/StickyNotes";

// Icons
import { FaCloudSun, FaCalculator, FaNoteSticky } from "react-icons/fa6";

const apps = [
  {
    name: "Weather App",
    path: "weather",
    icon: FaCloudSun,
    class: "weather-card",
    component: <Weather />,
  },
  {
    name: "Calculator",
    path: "calculator",
    icon: FaCalculator,
    class: "calculator-card",
    component: <Calculator />,
  },
  {
    name: "Sticky Notes",
    path: "sticky-notes",
    icon: FaNoteSticky,
    class: "sticky-notes-card",
    component: <StickyNotes />,
  },
];

export { apps };
