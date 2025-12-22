"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useNewsletter from "@/lib/hooks/useNewsletter";
import { useEffect } from "react";
import { CheckCircleIcon } from "lucide-react";

const newsletterSchema = z.object({
  email: z.email("Please enter a valid email"),
});

type FormValues = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values.email);
  };

  const mutation = useNewsletter();

  useEffect(() => {
    if (mutation.isSuccess) {
      form.reset();
    }
  }, [mutation.isSuccess, form]);

  return (
    <div>
      <div className="text-sm font-semibold text-primary mb-3">NEWSLETTER:</div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    aria-label="Your email"
                    placeholder="Your email here"
                    className="flex-1 border rounded px-4 py-2 text-sm bg-transparent w-full"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center">
            <Button
              type="submit"
              className="bg-[#6D6D6D] text-white px-4 py-2 rounded whitespace-nowrap"
              disabled={mutation.isPending || mutation.isSuccess}
            >
              {mutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </form>
      </Form>
      {mutation.isError && (
        <p className="mt-2 text-sm text-destructive">
          Something went wrong. Please try again.
        </p>
      )}

      {mutation.isSuccess && (
        <p className="mt-2 text-sm text-green-600 flex">
          <CheckCircleIcon className="inline mr-2 size-5" />
          Subscribed — check your inbox.
        </p>
      )}
    </div>
  );
}
