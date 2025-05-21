
import DashboardLayout from "./layout/DashboardLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skills from "./pages/Skills";

const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      // { path: "/projects", element: <Projects /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
