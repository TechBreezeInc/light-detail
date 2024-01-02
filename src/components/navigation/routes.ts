export type Route = {
  id: string;
  label: string;
  path: string;
  img: string;
  title: string;
  subTitle: string;
};

export const routes: Route[] = [
  {
    id: "home",
    label: "home",
    path: "/",
    img: "/img/cover.jpg",
    title: "our|mission",
    subTitle:
      "iDesign Studio's mission is to design and implement functionally-aesthetically balanced spaces tailored to the client's personality traits.",
  },
  {
    id: "about",
    label: "about us",
    path: "/about",
    img: "/img/about-us-cover.jpg",
    title: "about|us",
    subTitle:
      "Duo of inspiration and collaboration in the form of a friendly partnership created to freely bring bold ideas into life.",
  },
  {
    id: "interior_design",
    label: "interior design",
    path: "/interior-design",
    img: "/img/residential.jpg",
    title: "interior design|portfolio",
    subTitle:
      "Light Detail Studio's mission is to design and implement functionally-aesthetically balanced spaces tailored to the client's personality traits.",
  },
  {
    id: "visualization",
    label: "visualization",
    path: "/visualization",
    img: "/img/cover.jpg",
    title: "our|mission",
    subTitle:
      "iDesign Studio's mission is to design and implement functionally-aesthetically balanced spaces tailored to the client's personality traits.",
  },
  {
    id: "services",
    label: "services",
    path: "/services",
    img: "/img/cover.jpg",
    title: "our|mission",
    subTitle:
      "iDesign Studio's mission is to design and implement functionally-aesthetically balanced spaces tailored to the client's personality traits.",
  },
  {
    id: "contact",
    label: "contact",
    path: "/contact",
    img: "/img/cover.jpg",
    title: "our|mission",
    subTitle:
      "iDesign Studio's mission is to design and implement functionally-aesthetically balanced spaces tailored to the client's personality traits.",
  },
];
