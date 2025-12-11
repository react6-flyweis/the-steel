"use client";

import { Button } from "../ui/button";

import formCardBg from "@/assets/home/form-card-bg.png";
import googleBusinessLogo from "@/assets/home/google-business.png";
import bbbLogo from "@/assets/home/bbb.png";
import iasLogo from "@/assets/home/ias.png";
import Image from "next/image";
import { PhoneIcon } from "lucide-react";

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

export const phone = "+0998765432123";

export default function BuildingForm() {
  return (
    <div className="g-card/5 border border-white/5 rounded-xl overflow-hidden">
      <div className="p-5 relative">
        {/* background image */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
          <Image
            src={formCardBg}
            alt=""
            fill
            className="object-cover object-top opacity-10"
          />
        </div>
        {/* logos: fixed for all steps  */}
        <div className="flex gap-6 mb-5">
          <Image
            src={googleBusinessLogo}
            alt="Google Business Logo"
            className="h-16 object-contain"
          />
          <Image
            src={bbbLogo}
            alt="Better Business Bureau Logo"
            className="max-h-16 object-contain"
          />
          <Image src={iasLogo} alt="IAS Logo" className="h-16 object-contain" />
        </div>

        {/* step 1 */}
        <div className="">
          {/* heading */}
          <h3 className="text-lg font-semibold mb-4">
            What Best Describes Your Building?
          </h3>

          {/* grid of buttons */}
          <div className="grid grid-cols-2 gap-3">
            {buildingTypes.map((t) => (
              <Button
                key={t}
                variant="outline"
                className="justify-start w-full text-sm px-3 py-2"
              >
                {t}
              </Button>
            ))}
          </div>

          {/* separator */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Or
          </div>

          {/* telephone */}
          <div className="mt-4 flex items-center justify-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full shadow-md"
            >
              <PhoneIcon className="text-primary fill-primary" />
              {phone}
            </a>
          </div>
        </div>
      </div>
      {/*  form progress bar: fixed for all steps */}
      <div className="bg-gray-100 h-3 w-full">
        <div className="bg-linear-to-r from-[#003880] to-primary h-full w-1/4 transition-all duration-500 rounded-r-full"></div>
      </div>
    </div>
  );
}
