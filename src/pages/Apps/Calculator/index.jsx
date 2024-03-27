// React stuff
import { useState, useEffect } from "react";

// Styles
import "./styles.css";

// Apps
import AppTitle from "../components/AppTitle";
import { apps } from "../../../data/apps";

// Icons
import {
  FaPlus,
  FaMinus,
  FaTimes,
  FaEquals,
  FaDivide,
  FaSuperscript,
  FaBackspace,
} from "react-icons/fa";

const Calculator = () => {
  const app = apps.filter((app) => app.path === "calculator")[0];

  const [operation, setOperation] = useState("");

  const layout = [
    [
      {
        type: "clear",
        text: "C",
      },
      {
        type: "**",
        icon: FaSuperscript,
      },
      {
        type: "/",
        icon: FaDivide,
      },
      {
        type: "remove",
        icon: FaBackspace,
      },
    ],
    [
      "7",
      "8",
      "9",
      {
        type: "*",
        icon: FaTimes,
      },
    ],
    [
      "4",
      "5",
      "6",
      {
        type: "-",
        icon: FaMinus,
      },
    ],
    [
      "1",
      "2",
      "3",
      {
        type: "+",
        icon: FaPlus,
      },
    ],
    [
      "0",
      {
        type: ".",
        text: ".",
      },
      {
        type: "=",
        icon: FaEquals,
        span: 2,
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
    } catch (err) {
      setOperation("");
    }
  };

  const remove = () => {
    setOperation(operation.slice(0, operation.length - 1));
  };

  const reset = () => {
    setOperation("");
  };

  const handleOperation = (type) => {
    switch (type) {
      case "remove":
        remove();
        break;
      case "=":
        calculateResult();
        break;
      case "clear":
        reset();
        break;
      default:
        addOperation(type);
    }
  };

  // Add event listener to check for keyboard press
  const handleKeyDown = (e) => {
    const key = e.key.toLowerCase();
    switch (key) {
      case "backspace":
        remove();
        break;
      case "c":
        reset();
        break;
      case "enter":
        calculateResult();
        break;
      default:
    }
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
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup, thanks to: https://stackoverflow.com/a/61740188
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <AppTitle icon={app.icon} color={app.colors.main} title={app.name}>
        {app.description}
      </AppTitle>

      <div className="calculator">
        <h1 className="result">{operation || "0"}</h1>

        <div className="operations">
          {layout.map((row, index) => (
            <div className="row" key={index}>
              {row.map((operation, index) => {
                const { type, icon: Icon, text, span } = operation;
                if (type) {
                  return (
                    <button
                      key={index}
                      className="operator-button font-bold"
                      style={{ gridColumn: `span ${span} / span ${span}` }}
                      onClick={() => handleOperation(type)}
                    >
                      {operation?.icon ? <Icon size={24} /> : text}
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    className="operator-button-number"
                    onClick={() => addOperation(operation)}
                  >
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
