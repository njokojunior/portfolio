import DashboardLayout from "./layout/DashboardLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skills from "./pages/Skills";
import ComingSoon from "./pages/ComingSoon";

const router = createBrowserRouter([
  {
    element: <DashboardLayout />,

    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      {
        path: "/projects",
        // element: <Projects />,
        errorElement: <ComingSoon />,
      },
      // { path: "/experience", element: <Experience /> },
      // { path: "/architecture", element: <Architecture /> },
      // { path: "/code-sample", element: <CodeSamples /> },
      // { path: "/certifications", element: <Certifications /> },
      // { path: "/open-source", element: <OpenSource /> },
      // { path: "/testimonials", element: <Testimonials /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
