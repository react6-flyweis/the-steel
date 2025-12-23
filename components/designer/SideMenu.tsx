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
  variant?: "vertical" | "mobile";
  className?: string;
};

export default function SideMenu({
  active = "view",
  onChange,
  variant = "vertical",
  className = "",
}: SideMenuProps) {
  const isMobile = variant === "mobile";
  const navBase = isMobile
    ? "w-full px-3 py-3 bg-white/95 backdrop-blur border-t border-slate-200 shadow-lg overflow-x-auto"
    : "pl-8 pt-4 pr-2";
  const navClass = `${navBase} ${className}`.trim();
  const listClass = isMobile ? "flex gap-2 min-w-max" : "flex flex-col gap-2";
  const buttonBase = isMobile
    ? "flex flex-col items-center justify-center rounded-lg border border-slate-200/70 bg-slate-50/60 text-[11px] py-2 px-3"
    : "size-15 flex flex-col items-center justify-center rounded-lg shadow-sm focus:outline-none transition-colors";

  return (
    <nav aria-label="Designer side menu" className={navClass}>
      <ul className={listClass}>
        {items.map((it) => {
          const isActive = active === it.key;
          const activeStyles = isMobile
            ? "border-blue-500 bg-blue-50 text-blue-600"
            : "bg-gray-600 text-white";
          const inactiveStyles = isMobile
            ? "text-slate-600 hover:bg-white"
            : "bg-gray-100 text-black hover:bg-gray-200";

          return (
            <li key={it.key} className={isMobile ? "shrink-0" : undefined}>
              <button
                onClick={() => onChange?.(it.key)}
                className={`${buttonBase} ${
                  isActive ? activeStyles : inactiveStyles
                }`}
                aria-pressed={isActive}
                title={it.label}
              >
                <span className="mb-1">
                  <Image
                    src={it.icon}
                    alt={`${it.label} icon`}
                    width={isMobile ? 18 : 20}
                    height={isMobile ? 18 : 20}
                    className={!isMobile && isActive ? "filter invert" : ""}
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
