// Apps
import { apps } from "../../data/apps";

// Styles
import "./styles.css";

// Icons
import { FaArrowRight } from "react-icons/fa6";

const Homepage = () => {
  return (
    <section className="welcome">
      <h1 className="margin-b">Welcome to Multi App!</h1>

      <div className="apps-selection">
        {apps.map((app, index) => {
          const {
            name,
            path,
            icon: Icon,
            className,
            component,
            description,
          } = app;
          return (
            <div className={`app-card ${className}`} key={index}>
              <div className="content">
                <Icon className="icon" size={64} />
                <h2 className="title">{name}</h2>
                <p>{description}</p>
              </div>
              <button className="card-button">
                Go To {name}
                <FaArrowRight size={24} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Homepage;
