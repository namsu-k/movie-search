import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/movie-search/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movie/:movieId",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
