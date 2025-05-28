import { createSignal, Component, createEffect } from "solid-js";

export type Route = "home" | "map" | "info" | "events";

export type RouteComponent = Component<{}>;

const [activeRoute, setActiveRoute] = createSignal<Route>("home");
const [isTransitioning, setIsTransitioning] = createSignal(false);
const [displayedComponent, setDisplayedComponent] =
  createSignal<RouteComponent | null>(null);

let transitionTimeoutId: number | undefined;

const setRoute = (route: Route) => {
  if (isTransitioning() && transitionTimeoutId) {
    clearTimeout(transitionTimeoutId);
    setIsTransitioning(false);
  }
  setActiveRoute(route);
};

interface RouterProps {
  routeMap: Record<
    Route,
    {
      name: string;
      component: RouteComponent;
      icon: string | null;
      darkIcon?: string | null;
    }
  >;
}

const RouterComponent: Component<RouterProps> = (props) => {
  createEffect(() => {
    const newRoute = activeRoute();
    const newRouteMap = props.routeMap[newRoute];

    if (newRouteMap) {
      if (displayedComponent()) {
        setIsTransitioning(true);

        if (transitionTimeoutId) {
          clearTimeout(transitionTimeoutId);
        }

        transitionTimeoutId = setTimeout(() => {
          setDisplayedComponent(() => newRouteMap.component);
          setIsTransitioning(false);
          transitionTimeoutId = undefined;
        }, 200);
      } else {
        setDisplayedComponent(() => newRouteMap.component);
      }
    }
  });

  return (
    <div
      class={`transition-all duration-200 ease-initial transform
      ${
        isTransitioning()
          ? "opacity-0 translate-y-1"
          : "opacity-100 translate-y-0"
      }`}
    >
      {(() => {
        const CurrentComponent = displayedComponent();
        return CurrentComponent ? <CurrentComponent /> : null;
      })()}
    </div>
  );
};

export default RouterComponent;
export { activeRoute, setRoute };
