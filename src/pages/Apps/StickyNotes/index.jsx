// React stuff
import { useState, useEffect } from "react";

// Draggable
import Draggable from "react-draggable";

// Styles
import "./styles.css";

// Icons
import { FaPlus, FaRedo, FaTrash, FaBold, FaItalic } from "react-icons/fa";

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
        x: Math.floor(Math.random() * 400),
        y: Math.floor(Math.random() * 400),
        bold: false,
        italic: false,
      },
    ]);
  };

  const updateCard = ({
    id,
    text = null,
    x = null,
    y = null,
    bold = null,
    italic = null,
  }) => {
    const newCards = cards.map((card) =>
      card.id === id
        ? {
            ...card,
            text: text ?? card.text,
            x: x ?? card.x,
            y: y ?? card.y,
            bold: bold ?? card.bold,
            italic: italic ?? card.italic,
          }
        : card
    );
    setCards(newCards);
  };

  const deleteCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
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
        <div className="action-buttons">
          <button onClick={addCard} title="Add Card">
            <FaPlus size={24} />
          </button>
          <button onClick={() => setCards([])} title="Reset">
            <FaRedo size={24} />
          </button>
        </div>
        {cards.map((card) => {
          const { id, text, x, y, bold, italic } = card;
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
                <div className="card-buttons">
                  <button
                    onClick={() =>
                      updateCard({
                        id: id,
                        italic: !italic,
                      })
                    }
                  >
                    <FaItalic size={18} />
                  </button>
                  <button
                    onClick={() =>
                      updateCard({
                        id: id,
                        bold: !bold,
                      })
                    }
                  >
                    <FaBold size={18} />
                  </button>
                  <button onClick={() => deleteCard(id)}>
                    <FaTrash size={18} />
                  </button>
                </div>
                <textarea
                  value={text}
                  onChange={(e) => updateCard({ id: id, text: e.target.value })}
                  placeholder="Write your note..."
                  style={{
                    fontWeight: card.bold ? "bold" : "",
                    fontStyle: card.italic ? "italic" : "",
                  }}
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
