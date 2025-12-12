import Image from "next/image";
import checkImg from "@/assets/check.png";

export function ConfirmationStep() {
  return (
    <div className="mt-4 text-center">
      <div className="flex justify-center mb-4">
        <Image src={checkImg} alt="Checkmark" className="max-h-52 max-w-52" />
      </div>

      <h3 className="text-2xl font-bold mb-2">Thank you for your request!</h3>
      <p className="text-sm text-muted-foreground px-6">
        A Building Specialist is looking at which Clearance Buildings we have in
        stock that meet the wind, snow and seismic loads for your exact
        location. They will be in touch within 1 business day with your free
        quote.
      </p>
    </div>
  );
}
