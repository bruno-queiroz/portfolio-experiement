import { TestimonialTypes } from "../components/Carousel";
import { getSanityURL, SanityResponse } from "./config";

export const getTestimonials = async () => {
  const response = await fetch(getSanityURL("testimonials"));
  const data: SanityResponse<TestimonialTypes> = await response.json();
  return data.result;
};
