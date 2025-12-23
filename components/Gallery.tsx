"use client";

// import Image from "next/image";

import useProjects from "@/lib/hooks/useProjects";
import g1 from "@/assets/gallery/gallery-1.png";
import g2 from "@/assets/gallery/gallery-2.png";
import g3 from "@/assets/gallery/gallery-3.png";
import g4 from "@/assets/gallery/gallery-4.png";
import g5 from "@/assets/gallery/gallery-5.png";
import g6 from "@/assets/gallery/gallery-6.png";
import g7 from "@/assets/gallery/gallery-7.png";
import g8 from "@/assets/gallery/gallery-8.png";
import g9 from "@/assets/gallery/gallery-9.png";
import g10 from "@/assets/gallery/gallery-10.png";
import g11 from "@/assets/gallery/gallery-11.png";
import g12 from "@/assets/gallery/gallery-12.png";
import g13 from "@/assets/gallery/gallery-13.png";
import g14 from "@/assets/gallery/gallery-14.png";
import g15 from "@/assets/gallery/gallery-15.png";
import g16 from "@/assets/gallery/gallery-16.png";
import g17 from "@/assets/gallery/gallery-17.png";
import g18 from "@/assets/gallery/gallery-18.png";

const images = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
];

// repeating pattern: 2:2, 3:1, 2:2, 1:3, ...
const pattern = [
  [2, 2],
  [3, 1],
  [2, 2],
  [1, 3],
];

export default function Gallery() {
  // const { data: projects = [], isLoading } = useProjects();

  // const items = isLoading ? new Array(8).fill(null) : projects;

  const items = images.map((img) => ({ image: img.src }));

  const isLoading = false;

  return (
    <section
      aria-label="Projects gallery"
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((project, idx) => {
            const pairIndex = Math.floor(idx / 2) % pattern.length;
            const isFirst = idx % 2 === 0;
            const span = isFirst
              ? pattern[pairIndex][0]
              : pattern[pairIndex][1];

            // Always use a single column on mobile, and apply span on sm+.
            const baseClass = "col-span-1"; // mobile: single image per row
            const smClass =
              span === 1
                ? "sm:col-span-1"
                : span === 2
                ? "sm:col-span-2"
                : "sm:col-span-3";

            const spanClass = `${baseClass} ${smClass}`;

            return (
              <div
                key={idx}
                className={`${spanClass} mb-0 overflow-hidden rounded-lg bg-gray-50`}
              >
                <div className="w-full h-64 md:h-96  overflow-hidden">
                  {isLoading ? (
                    <div className="w-full h-full bg-gray-200/70 animate-pulse rounded-lg" />
                  ) : (
                    <img
                      src={project.image}
                      alt={`Project ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg transition-transform hover:scale-105"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
