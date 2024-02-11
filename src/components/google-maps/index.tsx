import { Loader } from "@googlemaps/js-api-loader";
import { onMount } from "solid-js";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
console.log("apiKey", apiKey);
const loader = new Loader({
  apiKey,
  version: "weekly",
});

const mapOptions = {
  center: {
    lat: 46.773956244717844,
    lng: 23.615999081994616,
  },
  zoom: 18,
};

const GoogleMaps = () => {
  onMount(() => {
    loader.importLibrary("maps").then(({ Map }) => {
      const element = document.getElementById("google-map-component");
      if (element) {
        const map = new Map(element, mapOptions);
        loader.importLibrary("marker").then(({ Marker }) => {
          new Marker({
            position: mapOptions.center,
            map,
            title: "Light Detail",
          });
        });
      }
    });
  });

  return <div id="google-map-component" class="w-full h-[400px]" />;
};

export default GoogleMaps;
