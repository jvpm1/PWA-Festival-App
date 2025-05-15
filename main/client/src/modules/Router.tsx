// Router.tsx
import { createSignal, Component } from "solid-js";

export type Route = "home" | "map" | "info" | "events";

export type RouteComponent = Component<{}>;

const [activeRoute, setRoute] = createSignal<Route>("info");

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
  return (
    <>
      {(() => {
        const RouteInfo = props.routeMap[activeRoute()];
        return RouteInfo ? <RouteInfo.component /> : null;
      })()}
    </>
  );
};

export default RouterComponent;
export { activeRoute, setRoute };
