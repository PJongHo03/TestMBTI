import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPage from "../components/firstPage";
import TestPage from "../components/testPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/test/:number",
    element: <TestPage />,
  },
]);
const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
