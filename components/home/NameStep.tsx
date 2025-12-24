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
import { NameFormData } from "@/lib/building-form-schemas";

interface NameStepProps {
  form: UseFormReturn<NameFormData>;
  onNext: (data: NameFormData) => void;
  onBack: () => void;
}

export function NameStep({ form, onNext, onBack }: NameStepProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
        <h3 className="text-2xl font-bold mb-4 text-center">
          What is your name?
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6 px-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="First Name"
                    className="w-full py-3 px-4 rounded h-12 bg-gray-100 placeholder:text-muted-foreground border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Last Name"
                    className="w-full py-3 px-4 rounded h-12   bg-gray-100 placeholder:text-muted-foreground border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-40 flex items-center justify-center">
          <Button type="submit" size="lg" className="px-8 py-3 h-14 w-40">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
