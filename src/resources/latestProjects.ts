import { cache } from "@solidjs/router";
import { server } from "./server";
import { Project } from "~/types";

export const getLatestProjects = cache(async () => {
  try {
    const response = await server.get<{ projects?: Project[] }>(
      "/projects/latest"
    );

    if (response.data?.projects) return response.data.projects;
  } catch (error) {
    console.error(error);
  }

  return [];
}, "latestProjects");
