import { createSignal, type Component } from "solid-js";
import RouterCompenent, { activeRoute, setRoute } from "./modules/Router";

import Home from "./routes/Home";
import Info from "./routes/Info";
import Map from "./routes/Map";

const routeMap = {
  home: Home,
  map: Map,
  info: Info,
};

const App: Component = () => {
  return (
    <div class="flex flex-col w-screen h-screen">
      <main class="h-full w-full">
        <RouterCompenent routeMap={routeMap} />
      </main>

      <header class="h-24 w-full">
        <button
          class="bg-black w-23 h-23"
          on:click={() => {
            setRoute("info");
            console.log(activeRoute());
          }}
        />
      </header>
    </div>
  );
};

export default App;
