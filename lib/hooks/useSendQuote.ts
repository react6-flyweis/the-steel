"use client";

import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { api } from "@/lib/api";

type Payload = {
  buildingTypeId: string;
  width: string;
  length: string;
  height: string;
  roofPitch: string;
  zipCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city?: string;
  state?: string;
  intendedUse?: string;
  notes?: string;
};

type ResponseData = {
  message?: string;
};

type ErrorType = {
  message?: string;
};

export function useSendQuote(
  options?: UseMutationOptions<ResponseData, ErrorType, Payload>
) {
  return useMutation({
    mutationKey: ["sendQuote"],
    mutationFn: (payload: Payload) =>
      api.post("/user/sendQuotesRequest", payload).then((res) => res.data),
    ...options,
  });
}

export default useSendQuote;
