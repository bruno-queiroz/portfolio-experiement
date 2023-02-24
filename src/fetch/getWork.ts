import { ProjectCardTypes } from "../components/Work";
import { getSanityURL, SanityResponse } from "./config";

export const getWork = async () => {
  const response = await fetch(getSanityURL("work"));
  const data: SanityResponse<ProjectCardTypes> = await response.json();
  return data.result;
};
