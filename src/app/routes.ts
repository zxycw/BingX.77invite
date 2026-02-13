import { createBrowserRouter } from "react-router";
import Root from "@/app/Root";
import Home from "@/app/pages/Home";
import Education from "@/app/pages/Education";
import Analysis from "@/app/pages/Analysis";
import Guide from "@/app/pages/Guide";
import About from "@/app/pages/About";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        { path: "education", Component: Education },
        { path: "analysis", Component: Analysis },
        { path: "guide", Component: Guide },
        { path: "about", Component: About },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
