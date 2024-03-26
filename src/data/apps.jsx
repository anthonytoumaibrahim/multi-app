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
    className: "weather-card",
    component: <Weather />,
    description:
      "Check out the current weather and the expectations for the upcoming 3 days.",
  },
  {
    name: "Calculator",
    path: "calculator",
    icon: FaCalculator,
    className: "calculator-card",
    component: <Calculator />,
    description: "The most basic tool: the calculator!",
  },
  {
    name: "Sticky Notes",
    path: "sticky-notes",
    icon: FaNoteSticky,
    className: "sticky-notes-card",
    component: <StickyNotes />,
    description:
      "Draggable sticky notes which can be removed, added and edited.",
  },
];

export { apps };
