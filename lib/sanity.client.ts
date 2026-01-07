import "server-only";
import { createClient, type ClientConfig, type QueryParams } from "next-sanity";
import { projectId, dataset, apiVersion, token, mode } from "@/lib/env.api";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: mode === "development" ? true : false,
  ignoreBrowserTokenWarning: true,
  token,
  perspective: "published",
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  // Return null/empty data if Sanity isn't configured
  if (projectId === "placeholder" || !projectId) {
    return null as QueryResponse;
  }
  
  try {
    return await client.fetch<QueryResponse>(query, qParams, {
      cache: mode === "development" ? "no-store" : "force-cache",
      next: { tags },
    });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null as QueryResponse;
  }
}
