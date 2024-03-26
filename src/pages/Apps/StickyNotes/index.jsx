// React stuff
import { useState, useEffect } from "react";

// Draggable
import Draggable from "react-draggable";

// Styles
import "./styles.css";

// Icons
import { FaPlus } from "react-icons/fa6";

// Apps
import AppTitle from "../components/AppTitle";
import { apps } from "../../../data/apps";

const StickyNotes = () => {
  const app = apps.filter((app) => app.path === "sticky-notes")[0];

  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("sticky-notes") ?? "[]")
  );

  const addCard = () => {
    const id = (cards[cards.length - 1]?.id ?? 0) + 1;
    setCards([
      ...cards,
      {
        id: id,
        text: "",
        x: Math.floor(Math.random() * 200),
        y: Math.floor(Math.random() * 200),
      },
    ]);
  };

  const updateCard = ({ id, text = null, x = null, y = null }) => {
    const newCards = cards.map((card) =>
      card.id === id
        ? {
            ...card,
            text: text ?? card.text,
            x: x ?? card.x,
            y: y ?? card.y,
          }
        : card
    );
    setCards(newCards);
  };

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("sticky-notes", JSON.stringify(cards));
  }, [cards]);

  return (
    <>
      <AppTitle icon={app.icon} color={app.colors.main} title={app.name}>
        {app.description}
      </AppTitle>

      <div className="board">
        <button className="add-sticky-button" onClick={addCard}>
          <FaPlus size={32} />
        </button>
        {cards.map((card) => {
          const { id, text, x, y } = card;
          return (
            <Draggable
              key={id}
              bounds="parent"
              defaultPosition={{ x: x, y: y }}
              onStop={(e, data) =>
                updateCard({
                  id: id,
                  x: data.lastX,
                  y: data.lastY,
                })
              }
            >
              <div className="sticky-card">
                <textarea
                  value={text}
                  onChange={(e) => updateCard({ id: id, text: e.target.value })}
                  placeholder="Write your note..."
                ></textarea>
              </div>
            </Draggable>
          );
        })}
      </div>
    </>
  );
};

export default StickyNotes;
