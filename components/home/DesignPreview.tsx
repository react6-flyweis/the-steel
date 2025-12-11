"use client";
import React, { useState } from "react";
import Image from "next/image";
import buildingWhiteImage from "@/assets/buildings/building-white.png";
import buildingBlueImage from "@/assets/buildings/building-blue.png";
import buildingGreenImage from "@/assets/buildings/building-green.png";
import buildingBrownImage from "@/assets/buildings/building-brown.png";

export const colorMap = [
  { id: "green", color: "#3D584B", image: buildingGreenImage },
  { id: "blue", color: "#0066E4", image: buildingBlueImage },
  { id: "brown", color: "#83371E", image: buildingBrownImage },
  { id: "white", color: "#F0F0F7", image: buildingWhiteImage },
];

const getImageByColor = (colorId: string) => {
  const color = colorMap.find((c) => c.id === colorId);
  return color ? color.image : buildingWhiteImage;
};

export default function DesignPreview({}) {
  const [selectedPanel, setSelectedPanel] = useState(colorMap[0].id);
  const [selectedTrim, setSelectedTrim] = useState(colorMap[0].id);
  return (
    <div className=" flex flex-col items-center">
      <div className="w-full ">
        <div className="relative w-full h-full max-h-[300] flex items-center justify-center">
          <Image
            src={getImageByColor(selectedPanel)}
            alt="building preview"
            className="object-contain"
            priority
          />
        </div>

        <div className=" text-center">
          <p className="text-sm text-muted-foreground">Select Panel</p>
          <div className="mt-3 flex items-center justify-center gap-6">
            {colorMap.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPanel(p.id)}
                aria-label={`panel-${p.id}`}
                className={`size-11 rounded shadow-sm ring-2 ring-transparent focus:outline-none transition-transform hover:scale-105 ${
                  selectedPanel === p.id ? "border-primary" : ""
                }`}
                style={{ backgroundColor: p.color }}
              />
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-4">Select Trim</p>
          <div className="mt-3 flex items-center justify-center gap-6">
            {colorMap.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTrim(t.id)}
                aria-label={`trim-${t.id}`}
                className={`size-11 rounded border-2 border-transparent focus:outline-none transition-transform hover:scale-105 ${
                  selectedTrim === t.id ? "border-primary" : ""
                }`}
                style={{ backgroundColor: t.color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
