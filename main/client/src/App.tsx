// App.tsx
import { For, Component, createSignal } from "solid-js";
import RouterComponent, { setRoute, Route } from "./modules/Router";

import Home from "./routes/Home";
import Info from "./routes/Info";
import Map from "./routes/Map";
import Event from "./routes/Event";

import HomeIcon from "./assets/icons/home.svg";
import MapIcon from "./assets/icons/map.svg";
import InfoIcon from "./assets/icons/info.svg";
import EventIcon from "./assets/icons/event.svg";

const routeMap: Record<
  Route,
  {
    name: string;
    component: Component<{}>;
    icon: string | null;
  }
> = {
  home: {
    name: "Home",
    component: Home,
    icon: HomeIcon,
  },
  map: {
    name: "Map",
    component: Map,
    icon: MapIcon,
  },
  events: {
    name: "Events",
    component: Event,
    icon: EventIcon,
  },
  info: {
    name: "Info",
    component: Info,
    icon: InfoIcon,
  },
};

const App: Component = () => {
  const [currentRoute, setCurrentRoute] = createSignal<Route>("home");

  const handleRouteChange = (route: Route) => {
    // document.body.requestFullscreen(); // TODO: Remove upon public release
    setRoute(route);
    setCurrentRoute(route);
  };

  return (
    <div class="bg-root-bg dark:bg-root-bg-dark flex flex-col w-screen h-screen">
      <main class="h-full w-full overflow-y-auto">
        <RouterComponent routeMap={routeMap} />
      </main>

      <header class="fixed bottom-0 p-4 w-full z-10">
        <nav class="w-full h-17 flex justify-between items-center bg-white/80 dark:bg-black/50 backdrop-blur-lg rounded-full border border-neutral-200 dark:border-neutral-900">
          <For each={Object.entries(routeMap)}>
            {([route, { name, icon }]) => {
              const isActive = () => currentRoute() === route;
              return (
                <button
                  class="h-full w-full flex flex-col justify-center items-center relative"
                  onClick={() => handleRouteChange(route as Route)}
                >
                  <div
                    class="p-1 rounded-full transition-colors duration-500 w-12"
                    classList={{
                      "bg-red-500 dark:bg-primary-800": isActive(),
                      "": !isActive(),
                    }}
                  >
                    <img
                      class="h-6 w-6 transition-opacity duration-500 mx-auto"
                      classList={{
                        "brightness-100": isActive(),
                        "brightness-0 dark:brightness-100": !isActive(),
                      }}
                      src={icon}
                      alt={`${name}'s icon`}
                    />
                  </div>

                  <span
                    class="text-xs font-medium transition-colors duration-300"
                    classList={{
                      "text-red-600 dark:text-red-400": isActive(),
                      "text-neutral-900 dark:text-neutral-400": !isActive(),
                    }}
                  >
                    {name}
                  </span>
                </button>
              );
            }}
          </For>
        </nav>
      </header>
    </div>
  );
};

export default App;
