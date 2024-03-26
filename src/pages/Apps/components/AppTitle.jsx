// React Router
import { Link } from "react-router-dom";

// Styles
import "./AppTitle.css";

// Icons
import { FaArrowLeftLong } from "react-icons/fa6";

const AppTitle = ({ icon: Icon, color, title = "App", children }) => {
  return (
    <div className="margin-b">
      <Link className="text-sm back-to-apps" to="/" style={{ color: color }}>
        <FaArrowLeftLong />
        Back to all Apps
      </Link>
      <div className="app-title">
        <Icon size={64} style={{ color: color }} />
        <div>
          <h1 style={{ color: color }}>{title}</h1>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default AppTitle;
