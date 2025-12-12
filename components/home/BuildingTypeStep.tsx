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
  phone: string;
}

export function BuildingTypeStep({
  form,
  onNext,
  phone,
}: BuildingTypeStepProps) {
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

        <div className="mt-6 text-center text-sm text-muted-foreground">Or</div>

        <div className="mt-4 flex items-center justify-center">
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {phone}
          </a>
        </div>
      </form>
    </Form>
  );
}
