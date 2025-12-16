"use client";

import { useState, useEffect } from "react";
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
import { MonitorIcon, X } from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("view");
  const [isMobile, setIsMobile] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="mb-6 flex justify-center ">
            <MonitorIcon className="size-16" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Desktop Required
          </h1>
          <p className="text-gray-600 mb-6">
            The building designer is optimized for desktop screens. Please open
            this page on a desktop or laptop computer for the best experience.
          </p>
        </div>
      </div>
    );
  }

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
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        <SideMenu active={activeTab} onChange={setActiveTab} />

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
        {/* {activeTab !== "view" && activeTab !== "dimensions" && (
          <div className="flex-1 flex items-center justify-center">
            Unsupported tab
          </div>
        )} */}
      </div>
    </>
  );
}
