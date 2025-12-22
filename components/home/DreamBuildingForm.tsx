"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import useSendQuote from "@/lib/hooks/useSendQuote";
import { getErrorMessage } from "@/lib/getErrorMessage";

const dreamSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  city: z.string().optional(),
  state: z.string().optional(),
  use: z.string().optional(),
  notes: z.string().optional(),
});

type DreamFormData = z.infer<typeof dreamSchema>;

export default function DreamBuildingForm() {
  const form = useForm<DreamFormData>({
    resolver: zodResolver(dreamSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      state: "",
      use: "",
      notes: "",
    },
  });

  const mutation = useSendQuote();

  function onSubmit(data: DreamFormData) {
    setSuccess(undefined);

    // split name into first/last
    const parts = data.name.trim().split(/\s+/);
    const firstName = parts.shift() || "";
    const lastName = parts.join(" ") || "";

    const payload = {
      firstName,
      lastName,
      phoneNumber: data.phone,
      city: data.city ?? "",
      state: data.state ?? "",
      intendedUse: data.use ?? "",
      notes: data.notes ?? "",
    };

    mutation.mutate(payload, {
      onSuccess: (res) => {
        setSuccess(res?.message ?? "Request sent. We'll be in touch.");
        form.reset();
      },
      onError: (err: unknown) => {
        const msg = getErrorMessage(err, "Submission failed");
        form.setError("root", { message: msg });
      },
    });
  }

  const [success, setSuccess] = React.useState<string | undefined>(undefined);

  const submitting = mutation.isPending;

  return (
    <div className="mx-auto max-w-lg bg-white text-gray-900 rounded-xl shadow-lg p-6 -mt-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-3"
          noValidate
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">City/State</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">State</FormLabel>
                <FormControl>
                  <Input placeholder="State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="use"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Intended Use</FormLabel>
                <FormControl>
                  <Input placeholder="Intended Use" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Notes</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    rows={3}
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white text-sm outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <p className="text-sm text-destructive text-center">
              {form.formState.errors.root.message}
            </p>
          )}
          {success && (
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="text-green-600" size={18} aria-hidden />
              <p className="text-sm text-green-600">{success}</p>
            </div>
          )}

          <div className="pt-2 flex justify-center">
            <Button
              className="rounded bg-secondary min-w-40"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Get My Quote"}
              <ArrowRight />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
