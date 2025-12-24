import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ContactFormData } from "@/lib/building-form-schemas";
import { Loader2 } from "lucide-react";

interface ContactStepProps {
  form: UseFormReturn<ContactFormData>;
  onSubmit: (data: ContactFormData) => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

export function ContactStep({
  form,
  onSubmit,
  onBack,
  isSubmitting,
}: ContactStepProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h3 className="text-2xl font-bold mb-4 text-center">
          What is your email address?
        </h3>

        <div className="grid gap-4 mb-6 px-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email Address"
                    className="w-full py-3 px-4 rounded h-12 bg-gray-100 placeholder:text-muted-foreground border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full py-3 px-4 rounded h-12 bg-gray-100 placeholder:text-muted-foreground border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-20 flex items-center justify-center">
          <Button
            type="submit"
            size="lg"
            className="px-8 py-3 h-14 w-56"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
              </span>
            ) : (
              "Price my Building"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
