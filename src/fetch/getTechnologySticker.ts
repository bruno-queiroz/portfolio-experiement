import { TechnologyStickerTypes } from "../components/Skills";
import { getSanityURL, SanityResponse } from "./config";

export const getTechnologySticker = async () => {
  const response = await fetch(getSanityURL("technology-sticker"));
  const data: SanityResponse<TechnologyStickerTypes> = await response.json();
  return data.result;
};
