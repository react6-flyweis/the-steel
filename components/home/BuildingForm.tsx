"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

import googleBusinessLogo from "@/assets/home/google-business.png";
import bbbLogo from "@/assets/home/bbb.png";
import iasLogo from "@/assets/home/ias.png";

import {
  buildingTypeSchema,
  dimensionsSchema,
  locationSchema,
  nameSchema,
  contactSchema,
  type BuildingTypeFormData,
  type DimensionsFormData,
  type LocationFormData,
  type NameFormData,
  type ContactFormData,
  type FullBuildingFormData,
} from "@/lib/building-form-schemas";

import { BuildingTypeStep } from "./BuildingTypeStep";
import { DimensionsStep } from "./DimensionsStep";
import { LocationStep } from "./LocationStep";
import { NameStep } from "./NameStep";
import { ContactStep } from "./ContactStep";
import { ConfirmationStep } from "./ConfirmationStep";
import { PhoneIcon } from "lucide-react";

export const phone = "+0998765432123";

export default function BuildingForm({
  isDialog = false,
}: {
  isDialog?: boolean;
}) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Partial<FullBuildingFormData>>({});

  const totalSteps = 6;
  const progressPercentage = `${(step / totalSteps) * 100}%`;

  // Step 1: Building Type Form
  const buildingTypeForm = useForm<BuildingTypeFormData>({
    resolver: zodResolver(buildingTypeSchema),
    defaultValues: {
      buildingType: formData.buildingType || "",
    },
  });

  // Step 2: Dimensions Form
  const dimensionsForm = useForm<DimensionsFormData>({
    resolver: zodResolver(dimensionsSchema),
    defaultValues: {
      width: formData.width || "",
      length: formData.length || "",
      height: formData.height || "",
      roofPitch: formData.roofPitch || "",
    },
  });

  // Step 3: Location Form
  const locationForm = useForm<LocationFormData>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      postalCode: formData.postalCode || "",
    },
  });

  // Step 4: Name Form
  const nameForm = useForm<NameFormData>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
    },
  });

  // Step 5: Contact Form
  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: formData.email || "",
      phoneNumber: formData.phoneNumber || "",
    },
  });

  // Step navigation handlers
  const handleBuildingTypeNext = (data: BuildingTypeFormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleDimensionsNext = (data: DimensionsFormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  const handleLocationNext = (data: LocationFormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(4);
  };

  const handleNameNext = (data: NameFormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(5);
  };

  const handleContactSubmit = (data: ContactFormData) => {
    const finalData = { ...formData, ...data };
    setFormData(finalData);
    console.log("Final Form Data:", finalData);
    // Here you would typically send the data to your backend
    setStep(6);
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="relative flex flex-col rounded-xl overflow-hidden h-full">
      <div className="flex-1 p-5 max-w-xl mx-auto flex flex-col items-center justify-center">
        {/* logos: shown for steps 1-5, hidden on confirmation (step 6) */}
        {step !== 6 && (
          <div className="flex gap-6 mb-5 items-center">
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={googleBusinessLogo}
                alt="Google Business Logo"
                className="max-h-16 object-contain"
              />
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Image
                src={bbbLogo}
                alt="Better Business Bureau Logo"
                className="max-h-16 object-contain"
              />
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Image
                src={iasLogo}
                alt="IAS Logo"
                className="max-h-16 object-contain"
              />
            </div>
          </div>
        )}

        {/* Step 1: Building Type */}
        {step === 1 && (
          <BuildingTypeStep
            form={buildingTypeForm}
            onNext={handleBuildingTypeNext}
          />
        )}

        {/* Step 2: Dimensions */}
        {step === 2 && (
          <DimensionsStep
            form={dimensionsForm}
            onNext={handleDimensionsNext}
            onBack={goBack}
            isDialog={isDialog}
          />
        )}

        {/* Step 3: Location */}
        {step === 3 && (
          <LocationStep
            form={locationForm}
            onNext={handleLocationNext}
            onBack={goBack}
          />
        )}

        {/* Step 4: Name */}
        {step === 4 && (
          <NameStep form={nameForm} onNext={handleNameNext} onBack={goBack} />
        )}

        {/* Step 5: Contact */}
        {step === 5 && (
          <ContactStep
            form={contactForm}
            onSubmit={handleContactSubmit}
            onBack={goBack}
          />
        )}

        {/* Step 6: Confirmation */}
        {step === 6 && <ConfirmationStep />}

        {(step === 1 || isDialog) && step !== 6 && (
          <div className="w-full">
            <div className="mt-6 flex items-center w-full">
              <span className="flex-1 h-px bg-gradient-to-r from-black/10 via-black/30 to-black/10" />
              <span className="px-4 text-sm text-muted-foreground">Or</span>
              <span className="flex-1 h-px bg-gradient-to-l from-black/10 via-black/30 to-black/10" />
            </div>

            <div className="mt-4 flex items-center justify-center">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full shadow-md"
              >
                <PhoneIcon className="fill-primary text-primary" />
                {phone}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Form progress bar: fixed for all steps */}
      <div className="bg-gray-100 h-3 w-full">
        <div
          className="bg-linear-to-r from-[#003880] to-primary h-full transition-all duration-500 rounded-r-full"
          style={{ width: progressPercentage }}
        ></div>
      </div>
    </div>
  );
}
