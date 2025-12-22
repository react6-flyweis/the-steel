"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export type FeatureItem = {
  _id: string;
  feature: string;
  steelBuilding: string;
  wordConcerte: string;
};

export function useWhyUsData() {
  return useQuery<FeatureItem[], unknown>({
    queryKey: ["why-us-data"],
    queryFn: async () => {
      const res = await api.get("/static/getwhyUsData");
      const items = res.data?.data ?? [];
      if (!Array.isArray(items) || items.length === 0) return [];
      return items[0]?.featureData ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
}

export default useWhyUsData;
