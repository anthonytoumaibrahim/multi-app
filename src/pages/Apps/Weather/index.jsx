// Styles
import "./styles.css";

// Apps
import AppTitle from "../components/AppTitle";
import { apps } from "../../../data/apps";

const Weather = () => {
  const app = apps.filter((app) => app.path === "weather")[0];

  return (
    <>
      <AppTitle icon={app.icon} color={app.colors.main} title={app.name}>
        {app.description}
      </AppTitle>
    </>
  );
};

export default Weather;
