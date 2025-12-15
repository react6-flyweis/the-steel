import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { DimensionsFormData } from "@/lib/building-form-schemas";
import Image from "next/image";
import buildingDimensionsImg from "@/assets/building-dimensions.webp";

interface DimensionsStepProps {
  form: UseFormReturn<DimensionsFormData>;
  onNext: (data: DimensionsFormData) => void;
  onBack: () => void;
  isDialog?: boolean;
}

export function DimensionsStep({
  form,
  onNext,
  onBack,
  isDialog,
}: DimensionsStepProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Building Dimensions
        </h3>

        {isDialog ? (
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Width</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 border-none">
                          <SelectValue placeholder="Select width" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="10">10&apos;</SelectItem>
                        <SelectItem value="20">20&apos;</SelectItem>
                        <SelectItem value="30">30&apos;</SelectItem>
                        <SelectItem value="40">40&apos;</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 border-none">
                          <SelectValue placeholder="Select length" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20&apos;</SelectItem>
                        <SelectItem value="40">40&apos;</SelectItem>
                        <SelectItem value="60">60&apos;</SelectItem>
                        <SelectItem value="80">80&apos;</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center">
              <div className="w-44 h-28 relative">
                <Image
                  src={buildingDimensionsImg}
                  alt="Building Dimensions"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 border-none">
                          <SelectValue placeholder="Select height" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="8">8&apos;</SelectItem>
                        <SelectItem value="10">10&apos;</SelectItem>
                        <SelectItem value="12">12&apos;</SelectItem>
                        <SelectItem value="14">14&apos;</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roofPitch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roof Pitch</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 border-none">
                          <SelectValue placeholder="Select pitch" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2:12">2:12</SelectItem>
                        <SelectItem value="4:12">4:12</SelectItem>
                        <SelectItem value="6:12">6:12</SelectItem>
                        <SelectItem value="8:12">8:12</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <div className="w-44 h-28 relative">
                <Image
                  src={buildingDimensionsImg}
                  alt="Building Dimensions"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Width</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 border-none">
                          <SelectValue placeholder="Select width" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="10">10&apos;</SelectItem>
                        <SelectItem value="20">20&apos;</SelectItem>
                        <SelectItem value="30">30&apos;</SelectItem>
                        <SelectItem value="40">40&apos;</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 border-none">
                          <SelectValue placeholder="Select length" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20&apos;</SelectItem>
                        <SelectItem value="40">40&apos;</SelectItem>
                        <SelectItem value="60">60&apos;</SelectItem>
                        <SelectItem value="80">80&apos;</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 border-none">
                          <SelectValue placeholder="Select height" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="8">8&apos;</SelectItem>
                        <SelectItem value="10">10&apos;</SelectItem>
                        <SelectItem value="12">12&apos;</SelectItem>
                        <SelectItem value="14">14&apos;</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roofPitch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roof Pitch</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 border-none">
                          <SelectValue placeholder="Select pitch" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2:12">2:12</SelectItem>
                        <SelectItem value="4:12">4:12</SelectItem>
                        <SelectItem value="6:12">6:12</SelectItem>
                        <SelectItem value="8:12">8:12</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}

        <div className="flex-1"></div>

        <div className="mt-6 flex items-center justify-center">
          <Button type="submit" size="lg" className="px-8 py-3 h-14 w-40">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
