import { CareerTimelineTypes } from "../components/Skills";
import { getSanityURL, SanityResponse } from "./config";

export const getExperience = async () => {
  const response = await fetch(getSanityURL("experience"));
  const data: SanityResponse<CareerTimelineTypes> = await response.json();
  return data.result;
};
