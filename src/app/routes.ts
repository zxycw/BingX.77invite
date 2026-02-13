import { createBrowserRouter, redirect } from "react-router";
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

        // ✅ catch-all：任何不認識的路徑都丟回首頁（不會再出現那個醜 404 畫面）
        { path: "*", loader: () => redirect("/") },
      ],
    },
  ],
  {
    // ✅ 一定要在第二個參數，不要放進上面那個陣列裡
    basename: import.meta.env.BASE_URL,
  }
);
