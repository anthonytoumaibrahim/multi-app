// Apps
import { apps } from "../../data/apps";

const Homepage = () => {
  return (
    <section className="welcome">
      <h1>Welcome to Multi App!</h1>

      <div className="apps-selection">
        {apps.map((app, index) => {
          const { name, path, icon: Icon } = app;
          return (
            <div className="app-card" key={index}>
              <Icon size={54} />
              <h2>{name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Homepage;
