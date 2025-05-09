import { Component, createSignal, For } from "solid-js";

interface RouterCompenentProps {
  routeMap: any;
}

const [activeRoute, setRoute] = createSignal("home");

const RouterCompenent = (props: RouterCompenentProps) => {
  function ShowActiveRoute() {
    const RouteComponent = props.routeMap[activeRoute()];
    return RouteComponent ? <RouteComponent /> : null;
  }

  return <ShowActiveRoute />;
};

export default RouterCompenent;
export { setRoute, activeRoute };
