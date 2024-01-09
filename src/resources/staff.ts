import { StaffMember } from "~/types";
import { server } from "./server";
import { cache } from "@solidjs/router";

export const getStaff = cache(async () => {
  console.log("Fetching staff");

  try {
    const response = await server.get<{ staffMembers?: StaffMember[] }>(
      "/staff"
    );

    if (response.data?.staffMembers) return response.data.staffMembers;
  } catch (error) {
    console.error(error);
  }

  return [];
}, "staff");
