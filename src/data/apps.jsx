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
    component: <Weather />,
    description:
      "Check out the current weather and the expectations for the upcoming 3 days.",
    colors: {
      main: "#4f46e5",
      bg: "#eef2ff",
    },
  },
  {
    name: "Calculator",
    path: "calculator",
    icon: FaCalculator,
    component: <Calculator />,
    description: "The most basic tool: the calculator!",
    colors: {
      main: "#0d9488",
      bg: "#f0fdfa",
    },
  },
  {
    name: "Sticky Notes",
    path: "sticky-notes",
    icon: FaNoteSticky,
    component: <StickyNotes />,
    description:
      "Draggable sticky notes which can be removed, added and edited.",
    colors: {
      main: "#d97706",
      bg: "#fffbeb",
    },
  },
];

export { apps };
