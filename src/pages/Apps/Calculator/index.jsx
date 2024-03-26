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

      <div className="calculator">
        <h1 className="result">0</h1>

        <div className="operations">
          <div className="row">
            <div className="numbers">
              <button>7</button>
              <button>8</button>
              <button>9</button>
            </div>
            <button className="operator-button">*</button>
          </div>
          <div className="row">
            <div className="numbers">
              <button>4</button>
              <button>5</button>
              <button>6</button>
            </div>
            <button className="operator-button">-</button>
          </div>
          <div className="row">
            <div className="numbers">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <button className="operator-button">+</button>
          </div>
          <div className="row">
            <div className="numbers">
              <span></span>
              <button>0</button>
            </div>
            <button className="operator-button">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
