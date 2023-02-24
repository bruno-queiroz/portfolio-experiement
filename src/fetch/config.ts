export interface SanityResultDefaultTypes {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
}
export interface SanityResponse<T> {
  ms: string;
  query: string;
  result: T[];
}
export const getSanityURL = (query: string) => {
  const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
  const DATASET = "production";
  const QUERY = encodeURIComponent(`*[_type == "${query}"]`);
  return `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
};
