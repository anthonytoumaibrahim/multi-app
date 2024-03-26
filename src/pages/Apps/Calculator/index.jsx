// React stuff
import { useState, useEffect } from "react";

// Styles
import "./styles.css";

// Apps
import AppTitle from "../components/AppTitle";
import { apps } from "../../../data/apps";

// Icons
import { FaPlus, FaMinus, FaTimes, FaEquals, FaDivide } from "react-icons/fa";

const Calculator = () => {
  const app = apps.filter((app) => app.path === "calculator")[0];

  const [operation, setOperation] = useState({
    num: 0,
    sign: "+",
    result: 0,
  });

  const layout = [
    [
      7,
      8,
      9,
      {
        type: "*",
        icon: FaTimes,
      },
    ],
    [
      4,
      5,
      6,
      {
        type: "-",
        icon: FaMinus,
      },
    ],
    [
      1,
      2,
      3,
      {
        type: "-",
        icon: FaPlus,
      },
    ],
    [
      0,
      {
        type: ".",
        text: ".",
      },
      {
        type: "/",
        icon: FaDivide,
      },
      {
        type: "=",
        icon: FaEquals,
      },
    ],
  ];

  const addOperation = (op) => {
    setOperation(operation + op);
  };

  const calculateResult = () => {
    try {
      const eval_operation = eval(operation);
      setOperation(eval_operation);
    } catch (err) {}
  };

  const reset = () => {
    setOperation("");
  };

  // Add event listener to check for keyboard press
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();
      const chars = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "/",
        "+",
        "-",
        "*",
        ".",
      ];
      if (chars.includes(key)) {
        addOperation(key);
      }
    });
  }, []);

  return (
    <>
      <AppTitle icon={app.icon} color={app.colors.main} title={app.name}>
        {app.description}
      </AppTitle>

      <div className="calculator">
        <h1 className="result">{operation.result}</h1>

        <div className="operations">
          {layout.map((row, index) => (
            <div className="row" key={index}>
              {row.map((operation, index) => {
                const { type, icon: Icon, text } = operation;
                if (operation?.type) {
                  return (
                    <button key={index} className="operator-button font-bold">
                      {operation?.icon ? <Icon size={24} /> : text}
                    </button>
                  );
                }
                return (
                  <button key={index} className="operator-button-number">
                    {operation}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
