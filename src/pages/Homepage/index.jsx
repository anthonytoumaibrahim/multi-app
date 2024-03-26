// React Router
import { Link } from "react-router-dom";

// Apps
import { apps } from "../../data/apps";

// Styles
import "./styles.css";

// Icons
import { FaArrowRight } from "react-icons/fa6";

const Homepage = () => {
  return (
    <section>
      <h1 className="margin-b text-center">Welcome to Multi App!</h1>

      <div className="apps-selection">
        {apps.map((app, index) => {
          const { name, path, icon: Icon, description, colors } = app;
          return (
            <div
              className="app-card"
              style={{
                backgroundColor: colors.bg,
                boxShadow: `0 6px ${colors.main}`,
              }}
              key={index}
            >
              <div className="content">
                <Icon size={64} style={{ color: colors.main }} />
                <h2 style={{ color: colors.main }}>{name}</h2>
                <p>{description}</p>
              </div>
              <Link
                to={`/apps/${path}`}
                className="card-button"
                style={{ color: colors.main }}
              >
                Go To {name}
                <FaArrowRight size={24} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Homepage;
