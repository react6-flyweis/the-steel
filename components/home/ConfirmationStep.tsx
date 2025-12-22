import Image from "next/image";
import checkImg from "@/assets/check.png";

type Props = {
  status?: "idle" | "loading" | "success" | "error";
  message?: string;
  onBack?: () => void;
};

export function ConfirmationStep({ status = "idle", message, onBack }: Props) {
  if (status === "loading") {
    return (
      <div className="py-8 text-center">
        <div className="text-lg font-medium">Sending request…</div>
        <div className="mt-4 text-sm text-muted-foreground">
          Please wait while we submit your quote request.
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="mt-4 text-center">
        <div className="text-6xl">❌</div>
        <h3 className="text-2xl font-bold mb-2">Submission failed</h3>
        <p className="text-sm text-muted-foreground px-6">
          {message ?? "Something went wrong. Please try again."}
        </p>
        {onBack && (
          <div className="mt-6 flex items-center justify-center">
            <button
              className="px-4 py-2 bg-black text-white rounded-full"
              onClick={onBack}
            >
              Back
            </button>
          </div>
        )}
      </div>
    );
  }

  // success or idle -> show thank you confirmation
  return (
    <div className="mt-4 text-center">
      <div className="flex justify-center mb-4">
        <Image src={checkImg} alt="Checkmark" className="max-h-52 max-w-52" />
      </div>

      <h3 className="text-2xl font-bold mb-2">Thank you for your request!</h3>
      <p className="text-sm text-muted-foreground px-6">
        {message
          ? message
          : "A Building Specialist is looking at which Clearance Buildings we have in stock that meet the wind, snow and seismic loads for your exact location. They will be in touch within 1 business day with your free quote."}
      </p>
    </div>
  );
}
