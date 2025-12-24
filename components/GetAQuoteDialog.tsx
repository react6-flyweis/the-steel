"use client";

import { PropsWithChildren, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import BuildingForm from "./home/BuildingForm";
import tinShed from "@/assets/tin-shed.png";
import Image from "next/image";

export default function GetAQuoteDialog({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl p-0 rounded-xl border-0 h-[90vh] overflow-hidden">
        <div className="relative">
          <Image
            src={tinShed}
            alt="Tin Shed"
            className="absolute -top-96 -left-68 opacity-15  -rotate-225 h-full object-cover rounded-r-xl"
          />
          <BuildingForm isDialog={true} onClose={() => setOpen(false)} />
          <Image
            src={tinShed}
            alt="Tin Shed"
            className="absolute -bottom-96 -right-64 opacity-15  -rotate-45 h-full object-cover rounded-r-xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
