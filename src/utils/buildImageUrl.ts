import ImageUrlBuilder from "@sanity/image-url";

export const buildImageUrlFor = (source: string) => {
  const builder = ImageUrlBuilder({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: "production",
  });

  return builder.image(source);
};
