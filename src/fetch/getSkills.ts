import { Skill } from "../components/About";
import { getSanityURL, SanityResponse } from "./config";

export const getSkills = async () => {
  const response = await fetch(getSanityURL("skills"));
  const data: SanityResponse<Skill> = await response.json();

  console.log(data);
  return data?.result;
};
