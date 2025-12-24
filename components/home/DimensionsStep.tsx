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
import dimension2Img from "@/assets/dimensions-2.png";
import { cn } from "@/lib/utils";

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
      <form onSubmit={form.handleSubmit(onNext)} className="w-full space-y-4">
        <h3 className="text-2xl font-bold mb-1 text-center">
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
                    <FormLabel className="sr-only">Width</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Width"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
                        <SelectItem value="40">40 ft</SelectItem>
                        <SelectItem value="50">50 ft</SelectItem>
                        <SelectItem value="60">60 ft</SelectItem>
                        <SelectItem value="80">80 ft</SelectItem>
                        <SelectItem value="100">100 ft</SelectItem>
                        <SelectItem value="120">120 ft</SelectItem>
                        <SelectItem value="150">150 ft</SelectItem>
                        <SelectItem value="200">200 ft</SelectItem>
                        <SelectItem value="250">250 ft</SelectItem>
                        <SelectItem value="300">300 ft</SelectItem>
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
                    <FormLabel className="sr-only">Length</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Length"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="40">40 ft</SelectItem>
                        <SelectItem value="60">60 ft</SelectItem>
                        <SelectItem value="80">80 ft</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center">
              <div
                className={cn(
                  "relative",
                  isDialog ? "max-w-52 max-h-60" : "w-44 h-28"
                )}
              >
                <Image
                  src={isDialog ? dimension2Img : buildingDimensionsImg}
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
                    <FormLabel className="sr-only">Height</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Height"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="10">10 ft</SelectItem>
                        <SelectItem value="12">12 ft</SelectItem>
                        <SelectItem value="14">14 ft</SelectItem>
                        <SelectItem value="16">16 ft</SelectItem>
                        <SelectItem value="18">18 ft</SelectItem>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="22">22 ft</SelectItem>
                        <SelectItem value="24">24 ft</SelectItem>
                        <SelectItem value="26">26 ft</SelectItem>
                        <SelectItem value="28">28 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
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
                    <FormLabel className="sr-only">Roof Pitch</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Roof Pitch"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0.25:12">0.25:12</SelectItem>
                        <SelectItem value="0.5:12">0.5:12</SelectItem>
                        <SelectItem value="1:12">1:12</SelectItem>
                        <SelectItem value="2:12">2:12</SelectItem>
                        <SelectItem value="3:12">3:12</SelectItem>
                        <SelectItem value="4:12">4:12</SelectItem>
                        <SelectItem value="5:12">5:12</SelectItem>
                        <SelectItem value="6:12">6:12</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
            <div className="w-full flex justify-center mb-4">
              <div className="max-h-24 relative">
                <Image
                  src={buildingDimensionsImg}
                  alt="Building Dimensions"
                  className="object-contain max-h-28"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Width</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Width"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
                        <SelectItem value="40">40 ft</SelectItem>
                        <SelectItem value="50">50 ft</SelectItem>
                        <SelectItem value="60">60 ft</SelectItem>
                        <SelectItem value="80">80 ft</SelectItem>
                        <SelectItem value="100">100 ft</SelectItem>
                        <SelectItem value="120">120 ft</SelectItem>
                        <SelectItem value="150">150 ft</SelectItem>
                        <SelectItem value="200">200 ft</SelectItem>
                        <SelectItem value="250">250 ft</SelectItem>
                        <SelectItem value="300">300 ft</SelectItem>
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
                    <FormLabel className="sr-only">Length</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Length"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
                        <SelectItem value="40">40 ft</SelectItem>
                        <SelectItem value="50">50 ft</SelectItem>
                        <SelectItem value="60">60 ft</SelectItem>
                        <SelectItem value="80">80 ft</SelectItem>
                        <SelectItem value="100">100 ft</SelectItem>
                        <SelectItem value="120">120 ft</SelectItem>
                        <SelectItem value="150">150 ft</SelectItem>
                        <SelectItem value="200">200 ft</SelectItem>
                        <SelectItem value="250">250 ft</SelectItem>
                        <SelectItem value="300">300 ft</SelectItem>
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
                    <FormLabel className="sr-only">Height</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Height"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="10">10 ft</SelectItem>
                        <SelectItem value="12">12 ft</SelectItem>
                        <SelectItem value="14">14 ft</SelectItem>
                        <SelectItem value="16">16 ft</SelectItem>
                        <SelectItem value="18">18 ft</SelectItem>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="22">22 ft</SelectItem>
                        <SelectItem value="24">24 ft</SelectItem>
                        <SelectItem value="26">26 ft</SelectItem>
                        <SelectItem value="28">28 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
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
                    <FormLabel className="sr-only">Roof Pitch</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full border-none bg-gray-100 text-black">
                          <SelectValue
                            placeholder="Roof Pitch"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0.25:12">0.25:12</SelectItem>
                        <SelectItem value="0.5:12">0.5:12</SelectItem>
                        <SelectItem value="1:12">1:12</SelectItem>
                        <SelectItem value="2:12">2:12</SelectItem>
                        <SelectItem value="3:12">3:12</SelectItem>
                        <SelectItem value="4:12">4:12</SelectItem>
                        <SelectItem value="5:12">5:12</SelectItem>
                        <SelectItem value="6:12">6:12</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
