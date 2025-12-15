import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { BuildingTypeFormData } from "@/lib/building-form-schemas";

export const buildingTypes = [
  "Garages",
  "Workshops",
  "Barndominiums",
  "Aviation",
  "Agricultural",
  "Warehouses",
  "Carports",
  "Arch Buildings",
  "Sales Storage",
  "Commercial",
];

interface BuildingTypeStepProps {
  form: UseFormReturn<BuildingTypeFormData>;
  onNext: (data: BuildingTypeFormData) => void;
}

export function BuildingTypeStep({ form, onNext }: BuildingTypeStepProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
        <h3 className="text-2xl font-bold mb-4 text-center">
          What Best Describes Your Building?
        </h3>

        <FormField
          control={form.control}
          name="buildingType"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid grid-cols-2 gap-3">
                  {buildingTypes.map((type) => (
                    <Button
                      key={type}
                      type="button"
                      variant="ghost"
                      className={`w-full text-lg py-5 rounded-lg ${
                        field.value === type
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => {
                        field.onChange(type);
                        form.handleSubmit(onNext)();
                      }}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
