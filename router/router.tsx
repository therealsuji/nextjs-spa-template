import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import dynamic from "next/dynamic";
import { About } from "../app/about";
import { Home } from "../app/home";

const Test = dynamic(() => import("../app/test"), {
  ssr: false,
});

const location = new ReactLocation();

const AppRouter = () => (
  <Router
    location={location}
    routes={[
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/test", element: <Test /> },
    ]}
  >
    <Outlet />
  </Router>
);

export default AppRouter;
