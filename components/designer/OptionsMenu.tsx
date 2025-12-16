"use client";

import { PropsWithChildren, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Switch } from "../ui/switch";

export function OptionsMenu({ children }: PropsWithChildren) {
  const [sheeting, setSheeting] = useState(true);
  const [dimensions, setDimensions] = useState(true);
  const [propsOn, setPropsOn] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={8} className="w-64 p-0">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="text-lg text-gray-600">Options</div>
            <ChevronDown className="text-gray-500 rotate-180" />
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between px-3 py-1">
              <div className="text-lg text-gray-700">Sheeting</div>
              <Switch
                checked={sheeting}
                onCheckedChange={() => setSheeting((s) => !s)}
              />
            </div>

            <div className="flex items-center justify-between px-3 py-1">
              <div className="text-lg text-gray-700">Dimensions</div>
              <Switch
                checked={dimensions}
                onCheckedChange={() => setDimensions((s) => !s)}
              />
            </div>

            <div className="flex items-center justify-between px-3 py-1">
              <div className="text-lg text-gray-700">Props</div>
              <Switch
                checked={propsOn}
                onCheckedChange={() => setPropsOn((s) => !s)}
              />
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
