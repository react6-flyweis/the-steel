"use client";

import { useState } from "react";
import DesignerHeader from "@/components/designer/DesignerHeader";
import SideMenu from "@/components/designer/SideMenu";
import ViewTab from "@/components/designer/ViewTab";
import DimensionsTab from "@/components/designer/DimensionsTab";
import EditTab from "@/components/designer/EditTab";
import LeantosTab from "@/components/designer/LeantosTab";
import OpeningsTab from "@/components/designer/OpeningsTab";
import BaysTab from "@/components/designer/BaysTab";
import MezzanineTab from "@/components/designer/MezzanineTab";
import PropsTab from "@/components/designer/PropsTab";
import { X } from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("view");
  const [showAlert, setShowAlert] = useState(true);

  const tabs = [
    "view",
    "dimensions",
    "edit",
    "leantos",
    "openings",
    "bays",
    "mezzanine",
    "props",
  ];

  const currentIndex = tabs.indexOf(activeTab);
  const prevDisabled = currentIndex <= 0;
  const nextDisabled = currentIndex >= tabs.length - 1;

  const goPrev = () => {
    if (prevDisabled) return;
    setActiveTab(tabs[Math.max(0, currentIndex - 1)]);
  };

  const goNext = () => {
    if (nextDisabled) return;
    setActiveTab(tabs[Math.min(tabs.length - 1, currentIndex + 1)]);
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-blue-500 text-white px-5 py-2 rounded shadow flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <span className="font-medium">
            Designer is coming soon - This is a demo version
          </span>
          <button
            onClick={() => setShowAlert(false)}
            className="ml-2 hover:bg-blue-600 rounded-full p-1 transition-colors"
            aria-label="Close alert"
          >
            <X className="size-5" />
          </button>
        </div>
      )}
      <DesignerHeader />
      <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-950/5">
        <div className="flex flex-1 min-h-0 overflow-hidden pb-24 md:pb-0">
          <div className="hidden md:block md:border-r md:border-slate-200/60 bg-white/70">
            <SideMenu active={activeTab} onChange={setActiveTab} />
          </div>

          <div className="flex-1 min-h-0">
            {activeTab === "view" && (
              <ViewTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "dimensions" && (
              <DimensionsTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "edit" && (
              <EditTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "leantos" && (
              <LeantosTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "openings" && (
              <OpeningsTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "bays" && (
              <BaysTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "mezzanine" && (
              <MezzanineTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "props" && (
              <PropsTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
          </div>
        </div>

        <SideMenu
          active={activeTab}
          onChange={setActiveTab}
          variant="mobile"
          className="md:hidden px-6 pb-4"
        />
      </div>
    </>
  );
}
