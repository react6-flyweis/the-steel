import designerBaysImg from "@/assets/designer/designer-bays.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

type TabNavProps = {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
};

export default function BaysTab({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: TabNavProps) {
  return (
    <div className="flex-1 flex h-full">
      <div className="w-[360px] bg-secondary p-6 overflow-auto flex flex-col ">
        <h2 className="text-lg font-semibold mb-2 text-white">Bays</h2>

        <div className="flex gap-2 mt-auto">
          <Button
            size="sm"
            onClick={() => onPrev?.()}
            disabled={prevDisabled}
            className="flex-1 bg-white/20 rounded"
          >
            <ArrowLeftIcon />
            Back to Openings
          </Button>
          <Button
            size="sm"
            onClick={() => onNext?.()}
            disabled={nextDisabled}
            className="flex-1 rounded"
          >
            Next to Mezzanine
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <div className="flex-1 relative">
        <Image
          src={designerBaysImg}
          alt="Bays preview"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
