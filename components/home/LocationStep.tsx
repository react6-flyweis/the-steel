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
import { LocationFormData } from "@/lib/building-form-schemas";

interface LocationStepProps {
  form: UseFormReturn<LocationFormData>;
  onNext: (data: LocationFormData) => void;
  onBack: () => void;
}

export function LocationStep({ form, onNext, onBack }: LocationStepProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
        <h3 className="text-2xl font-bold mb-2 text-center">
          Where will your new building be located?
        </h3>

        <p className="text-center text-sm text-muted-foreground mb-6 px-4">
          Where will your new building be located? This is the location where
          the building will be erected. Please be accurate, as the location
          impacts the building codes and restrictions, which impacts the cost.
        </p>

        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex justify-center">
                  <Input
                    {...field}
                    placeholder="Zip or Postal Code"
                    className="w-72 py-4 px-6 rounded-xl bg-gray-100 text-center placeholder:text-muted-foreground border-none"
                  />
                </div>
              </FormControl>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />

        <div className="mt-6 flex items-center justify-center">
          <Button type="submit" size="lg" className="px-8 py-3 h-14 w-40">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
