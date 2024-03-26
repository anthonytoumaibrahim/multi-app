// React stuff
import { useState } from "react";

// Draggable
import Draggable from "react-draggable";

// Styles
import "./styles.css";

// Apps
import AppTitle from "../components/AppTitle";
import { apps } from "../../../data/apps";

const StickyNotes = () => {
  const app = apps.filter((app) => app.path === "sticky-notes")[0];

  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Do something...",
      x: 44,
      y: 122,
    },
  ]);

  const moveCard = ({ id, x = 0, y = 0 }) => {
    const newCards = cards.filter((card) =>
      card.id === id
        ? {
            ...card,
            x: x,
            y: y,
          }
        : card
    );
    setCards(newCards);
  };

  return (
    <>
      <AppTitle icon={app.icon} color={app.colors.main} title={app.name}>
        {app.description}
      </AppTitle>

      <div className="board">
        {cards.map((card) => {
          const { id, text, x, y } = card;
          return (
            <Draggable
              key={id}
              bounds="parent"
              defaultPosition={{ x: x, y: y }}
              onStop={(e, data) =>
                moveCard({
                  id: id,
                  x: data.lastX,
                  y: data.lastY,
                })
              }
            >
              <div className="sticky-card">{text}</div>
            </Draggable>
          );
        })}
      </div>
    </>
  );
};

export default StickyNotes;
