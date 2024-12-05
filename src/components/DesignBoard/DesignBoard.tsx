import { useState } from "preact/hooks";
import KnotenDisplay from "../KnotenDisplay/KnotenDisplay";
import classes from "./DesignBoard.module.css";

function DesignBoard() {
  const [threads, setThreads] = useState<{ color: string }[]>([]);

  const [newTreadColor, setNewTreadColor] = useState("#000000");

  const addColor = () => {
    setThreads([...threads, { color: newTreadColor }]);
    const newColor = "#" + Math.random().toString(16).slice(2, 8);
    setNewTreadColor(newColor);
  };

  return (
    <main class={classes.main}>
      <KnotenDisplay threads={threads} />
      <hr />
      <span>
        <input
          type="color"
          name="newTreadColor"
          id="newTreadColor"
          value={newTreadColor}
          onChange={(e) => setNewTreadColor(e.currentTarget.value)}
        />
        <button onClick={addColor}>Add Color</button>
      </span>
    </main>
  );
}

export default DesignBoard;
