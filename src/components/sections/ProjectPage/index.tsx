import { For } from "solid-js";
import { PageBanner } from "~/components/layout/PageBanner/PageBanner";
import { Section } from "~/components/layout/Section";
import { Project } from "~/types";

type Props = {
  project: Project;
};

export const ProjectPage = (props: Props) => {
  const getBannerTitle = () =>
    `${props.project.title.toLocaleUpperCase()}|PROJECT`;

  return (
    <main class="w-full flex flex-col relative">
      <PageBanner
        id={props.project.id}
        img={props.project.coverImageUrl}
        title={getBannerTitle()}
        subTitle={""}
      />
      <Section>
        <div class="flex gap-4 flex-col lg:flex-row lg:items-start lg:gap-6">
          <h2 class="text-4xl">Description</h2>
          <div class="h-2 border-b-4 lg:border-r-4 border-black lg:self-stretch lg:h-[unset]" />
          <p class="text-gray-500 lg:pt-16">{props.project.description}</p>
        </div>

        <div class="flex flex-wrap gap-6">
          <For each={props.project.imgs}>
            {(img) => (
              <div class="flex-1 overflow-hidden aspect-square min-w-full lg:min-w-[40%] shadow-md">
                <img class="w-full h-full object-cover" src={img} />
              </div>
            )}
          </For>
        </div>
      </Section>
    </main>
  );
};
