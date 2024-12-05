import { useState } from "preact/hooks";
import classes from "./KnotenDisplay.module.css";

function KnotenDisplay({ threads }: { threads: { color: string }[] }) {
  const [knoten, setKnoten] = useState<{ layer: { color: string }[] }[]>([]);

  return (
    <div class={classes.hexagonContainer}>
      <div class={classes.container}>
        {threads.map((thread, index) => (
          <div
            key={index}
            class={classes.hexagon}
            style={{ backgroundColor: thread.color }}
          ></div>
        ))}
        {knoten.map((knotenLayer, index) =>
          knotenLayer.layer.map((knoten, index) => (
            <div
              key={index}
              class={classes.hexagon}
              style={{ backgroundColor: knoten.color }}
            ></div>
          ))
        )}
        {threads.map((thread, index) => (
          <div
            key={index}
            class={classes.hexagon}
            style={{ backgroundColor: "#000000", cursor: "pointer" }}
          >
            +
          </div>
        ))}
      </div>
    </div>
  );
}

export default KnotenDisplay;
