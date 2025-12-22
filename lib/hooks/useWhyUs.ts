"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export type WhyUsItem = {
  _id: string;
  title: string;
  description: string;
  image?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export function useWhyUs() {
  return useQuery<WhyUsItem[], unknown>({
    queryKey: ["why-us"],
    queryFn: async () => {
      const res = await api.get("/static/getwhyUs");
      return res.data?.data ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
}

export default useWhyUs;
