import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPage from "../components/firstPage";
import TestPage from "../components/testPage";
import ResultPage from "../components/resultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/test/:number",
    element: <TestPage />,
  },
  {
    path: "/test/result",
    element: <ResultPage />,
  },
]);
const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
