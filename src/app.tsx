// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Show, Suspense } from "solid-js";
import { DesktopMenu } from "./components/navigation/DesktopMenu";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

import "./app.css";
import { useIsMobile } from "./utils/viewport";
import { MobileMenu } from "./components/navigation/MobileMenu";
import { ImgPreview } from "./components/img-preview";

export default function App() {
  const isMobile = useIsMobile();

  return (
    <Router
      root={(props) => (
        <>
          <Header />
          <Suspense
            fallback={<section class="w-screen h-screen page-banner" />}
          >
            {props.children}
          </Suspense>
          <div class="relative">
            <Show when={!isMobile()} fallback={<MobileMenu />}>
              <DesktopMenu />
            </Show>

            <Footer />
          </div>
          <ImgPreview />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
