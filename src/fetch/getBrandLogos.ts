import { BrandLogoTypes } from "../components/Testimonials";
import { getSanityURL, SanityResponse } from "./config";

export const getBrandLogos = async () => {
  const response = await fetch(getSanityURL("brandLogos"));
  const data: SanityResponse<BrandLogoTypes> = await response.json();
  return data?.result;
};
