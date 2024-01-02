import { createAsync } from "@solidjs/router";
import { Page } from "~/components/layout/Page";
import { InteriorDesignPortfolio } from "~/components/sections/InteriorDesignPortfolio";
import { getAllProjects } from "~/resources/projects";

export const route = {
  load: () => getAllProjects(),
};

export default function InteriorDesign() {
  const data = createAsync(getAllProjects, {
    deferStream: true,
    initialValue: [],
  });

  return (
    <Page id="interior_design">
      <InteriorDesignPortfolio list={data()} />
    </Page>
  );
}
