"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export type ProjectItem = {
  _id: string;
  title?: string;
  description?: string;
  image?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export function useProjects() {
  return useQuery<ProjectItem[], unknown>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await api.get("/static/getProject");
      return res.data?.data ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
}

export default useProjects;
