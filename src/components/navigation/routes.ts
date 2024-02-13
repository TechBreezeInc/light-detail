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
    img: "/img/visualisation1.jpg",
    title: "visualization|portfolio",
    subTitle:
      "3D renderings are a photorealistic way of understanding an architectural plan, a construction drawing or something that does not exist yet, an idea or a concept.",
  },
  {
    id: "services",
    label: "services",
    path: "/services",
    img: "/img/services.png",
    title: "our|services",
    subTitle:
      "We design homes that mirrors and shelters each and every lifestyle.",
  },
  {
    id: "contact",
    label: "contact",
    path: "/contact",
    img: "/img/contact.jpg",
    title: "contact|us",
    subTitle:
      "We design homes that mirrors and shelters each and every lifestyle.",
  },
];
