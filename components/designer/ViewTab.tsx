import Image from "next/image";
import designerViewImg from "@/assets/designer/designer-view.png";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

type TabNavProps = {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
};

export default function ViewTab({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: TabNavProps) {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-7xl h-full">
          <div className="relative h-full overflow-hidden shadow-xl">
            <Image
              src={designerViewImg}
              alt="Designer view"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary p-5">
        <div className="max-w-6xl mx-auto flex justify-end">
          <Button
            type="button"
            onClick={() => onNext?.()}
            disabled={nextDisabled}
            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md shadow"
          >
            Next to Dimension
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
