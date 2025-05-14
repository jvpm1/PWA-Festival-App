// App.tsx
import { For, Component, createSignal } from "solid-js";
import RouterComponent, { setRoute, Route } from "./modules/Router";
import Home from "./routes/Home";
import Info from "./routes/Info";
import Map from "./routes/Map";
import "./App.css";
import HomeIcon from "./assets/icons/home.svg";
import MapIcon from "./assets/icons/map.svg";
import InfoIcon from "./assets/icons/info.svg";

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
  info: {
    name: "Info",
    component: Info,
    icon: InfoIcon,
  },
};

const App: Component = () => {
  const [currentRoute, setCurrentRoute] = createSignal<Route>("home");

  const handleRouteChange = (route: Route) => {
    if (route === "home") document.body.requestFullscreen().catch(() => {});
    setRoute(route);
    setCurrentRoute(route);
  };

  return (
    <div class="bg-neutral-50 dark:bg-neutral-900 flex flex-col w-screen h-screen">
      <main class="h-full w-full overflow-y-auto pb-20">
        <RouterComponent routeMap={routeMap} />
      </main>

      <nav class="fixed bottom-0 w-full h-20 flex justify-around items-center bg-black/80 dark:bg-surface-800 backdrop-blur-3xl z-10">
        <For each={Object.entries(routeMap)}>
          {([route, { name, icon }]) => {
            const isActive = () => currentRoute() === route;
            return (
              <button
                class="h-full w-1/3 flex flex-col justify-center items-center relative"
                onClick={() => handleRouteChange(route as Route)}
              >
                <div
                  class="absolute -top-1 w-1 h-1 rounded-full transition-opacity duration-200"
                  classList={{
                    "bg-primary-500 opacity-100": isActive(),
                    "opacity-0": !isActive(),
                  }}
                />

                <div
                  class="p-1 rounded-full transition-colors duration-500 w-12"
                  classList={{
                    "bg-red-500 dark:bg-primary-800": isActive(),
                    "": !isActive(),
                  }}
                >
                  <img
                    class="h-6 w-6 transition-opacity duration-500 mx-auto"
                    src={icon}
                    alt={`${name} icon`}
                  />
                </div>

                <span
                  class="text-xs mt-1 font-medium transition-colors duration-200"
                  classList={{
                    "text-red-600 dark:text-red-400": isActive(),
                    "text-neutral-600 dark:text-neutral-400": !isActive(),
                  }}
                >
                  {name}
                </span>
              </button>
            );
          }}
        </For>
      </nav>
    </div>
  );
};

export default App;
