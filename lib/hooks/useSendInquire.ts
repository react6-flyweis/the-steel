"use client";

import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { api } from "@/lib/api";

type Payload = {
  name: string;
  lastName?: string;
  email: string;
  phone?: string;
  message: string;
};

type ResponseData = {
  message?: string;
};

type ErrorType = {
  message?: string;
};

export function useSendInquire(
  options?: UseMutationOptions<ResponseData, ErrorType, Payload>
) {
  return useMutation({
    mutationKey: ["sendInquire"],
    mutationFn: (payload: Payload) =>
      api.post("/user/sendInquire", payload).then((res) => res.data),
    ...options,
  });
}

export default useSendInquire;
