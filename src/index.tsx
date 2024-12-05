import { hydrate, prerender as ssr } from "preact-iso";

import DesignBoard from "./components/DesignBoard/DesignBoard";
import "./style.css";

export function App() {
  return (
    <div>
      <div class={"container"}>
        <h1>Knoten Layout Designer</h1>
        <DesignBoard />
      </div>
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
