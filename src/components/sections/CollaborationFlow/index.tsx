import { For } from "solid-js";
import { Section } from "~/components/layout/Section";
import { StepCard, StepCardTextPosition } from "./StepCard";

const flowSteps = [
  {
    title: "Step 1",
    subTitle: "CONSULTANCY",
    description:
      "Getting to know each other, learning about client’s preferences and the design studio’s background.",
    img: "/img/steps/Step1.png",
  },
  {
    title: "Step 2",
    subTitle: "MEET THE SPACE",
    description:
      "This step is when the studio measures and takes notes and photos of the actual object of their work - the space!",
    img: "/img/steps/Step2.png",
  },
  {
    title: "Step 3",
    subTitle: "ADMINISTRATIVE",
    description:
      "All of the legal paperwork that need to be done so this collaboration is perfectly aligned with the law.",
    img: "/img/steps/Step3.png",
  },
  {
    title: "Step 4",
    subTitle: "PROJECT - CONCEPT",
    description:
      "We think about a design that suits best your desires, this stage results in initial sketches and mood boards to help you understand the first glimpse of your future interior",
    img: "/img/steps/Step4.png",
  },
  {
    title: "Step 5",
    subTitle: "PROJECT - RENDERINGS",
    description:
      "We proceed to 3D renderings which reflect the future interior in the most accurate way possible - you will get pictures of every room we design in different perspectives so that you can see the whole ensemble",
    img: "/img/steps/Step5.png",
  },
  {
    title: "Step 6",
    subTitle: "PROJECT - ESTIMATION",
    description:
      "After you approved the final design we move forward and prepare an estimation for every material and object we proposed in your design. This comes with prices, quantities, places where you can find them and offers from suppliers when it comes to custom made things",
    img: "/img/steps/Step6.png",
  },
  {
    title: "Step 7",
    subTitle: "PROJECT - SHOP WITH THE CLIENT",
    description:
      "This stage is available only if you choose PROPOSAL 2/OFFER 2/DEAL 2 here we assist you to various shops and retailers.",
    img: "/img/steps/Step7.png",
  },
  {
    title: "Step 8",
    subTitle: "PROJECT - SITE MANAGEMENT",
    description:
      "This stage is available only if you choose PROPOSAL 2/OFFER 2/DEAL 2 - we provide assistance and all the materials and information the site crew needs from us in order to make sure that things fall in place as we designed them.",
    img: "/img/steps/Step8.png",
  },
  {
    title: "Step 9",
    subTitle: "PROJECT - PHOTO SESSION",
    description: "",
    img: "/img/steps/Step9.png",
  },
];

export const CollaborationFlow = () => {
  return (
    <Section>
      <For each={flowSteps}>
        {(step, index) => (
          <StepCard
            {...step}
            showHeaderTitle={index() === 0}
            textPosition={
              index() % 2
                ? StepCardTextPosition.LEFT
                : StepCardTextPosition.RIGHT
            }
          />
        )}
      </For>
    </Section>
  );
};
