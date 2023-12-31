import { createSignal, onCleanup, onMount } from "solid-js";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = createSignal(false);

  onMount(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      if (isMobile() !== window.innerWidth < 768) {
        setIsMobile(window.innerWidth < 768);
      }
    };

    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });

  return isMobile;
};
