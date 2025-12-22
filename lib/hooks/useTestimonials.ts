"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export type TestimonialItem = {
  _id: string;
  userName: string;
  title: string;
  description?: string;
  image?: string;
  rating?: number;
  isShowOnWebsite?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export function useTestimonials() {
  return useQuery<TestimonialItem[], unknown>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await api.get("/clientReview");
      return res.data?.data ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
}

export default useTestimonials;
