"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export type BuildingType = {
  _id: string;
  title: string;
  description: string;
  image: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export function useBuildingTypes() {
  return useQuery<BuildingType[], unknown>({
    queryKey: ["building-types"],
    queryFn: async () => {
      const res = await api.get("/static/getBuildingType");
      return res.data?.data ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
}

export default useBuildingTypes;
