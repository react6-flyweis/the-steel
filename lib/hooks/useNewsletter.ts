"use client";

import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { api } from "@/lib/api";

type Payload = string;

type ResponseData = {
  message: string;
};

type ErrorType = {
  error: string;
};

export function useNewsletter(
  options?: UseMutationOptions<ResponseData, ErrorType, Payload>
) {
  return useMutation({
    mutationKey: ["newsletter"],
    mutationFn: (email: Payload) =>
      api
        .post("/user/sendNewsLetterRequest", { email })
        .then((res) => res.data),
    ...options,
  });
}

export default useNewsletter;
