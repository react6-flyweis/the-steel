import Image from "next/image";
import viewIcon from "@/assets/designer/icons/view.svg";
import dimensionsIcon from "@/assets/designer/icons/dimensions.svg";
import editIcon from "@/assets/designer/icons/edit.svg";
import leantosIcon from "@/assets/designer/icons/leantos.svg";
import openingsIcon from "@/assets/designer/icons/openings.svg";
import baysIcon from "@/assets/designer/icons/bays.svg";
import mezzIcon from "@/assets/designer/icons/mezznine.svg";
import propsIcon from "@/assets/designer/icons/props.svg";

const items = [
  { key: "view", label: "View", icon: viewIcon },
  { key: "dimensions", label: "Dimensions", icon: dimensionsIcon },
  { key: "edit", label: "Edit", icon: editIcon },
  { key: "leantos", label: "Leantos", icon: leantosIcon },
  { key: "openings", label: "Openings", icon: openingsIcon },
  { key: "bays", label: "Bays", icon: baysIcon },
  { key: "mezzanine", label: "Mezzanine", icon: mezzIcon },
  { key: "props", label: "Props", icon: propsIcon },
];

type SideMenuProps = {
  active?: string;
  onChange?: (key: string) => void;
};

export default function SideMenu({ active = "view", onChange }: SideMenuProps) {
  return (
    <nav aria-label="Designer side menu" className="pl-8 pt-4 pr-2">
      <ul className="flex flex-col gap-2">
        {items.map((it) => {
          const isActive = active === it.key;
          return (
            <li key={it.key}>
              <button
                onClick={() => onChange?.(it.key)}
                className={
                  `size-15 flex flex-col items-center justify-center rounded-lg shadow-sm focus:outline-none transition-colors ` +
                  (isActive
                    ? "bg-gray-600 text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200")
                }
                aria-pressed={isActive}
                title={it.label}
              >
                <span className="mb-1">
                  <Image
                    src={it.icon}
                    alt={`${it.label} icon`}
                    width={20}
                    height={20}
                    className={isActive ? "filter invert" : ""}
                  />
                </span>
                <span className="text-[10px] leading-none">{it.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
