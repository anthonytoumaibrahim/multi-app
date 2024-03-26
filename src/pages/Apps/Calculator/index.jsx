// Styles
import "./styles.css";

// Apps
import AppTitle from "../components/AppTitle";
import { apps } from "../../../data/apps";

const Calculator = () => {
  const app = apps.filter((app) => app.path === "calculator")[0];

  return (
    <>
      <AppTitle icon={app.icon} color={app.colors.main} title={app.name}>
        {app.description}
      </AppTitle>
    </>
  );
};

export default Calculator;
