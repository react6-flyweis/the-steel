"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import GetAQuoteDialog from "../GetAQuoteDialog";
import theSteelLogo from "@/assets/the-steel-logo.svg";
import Container from "../Container";
import { RotateCcw, Share2, Home, ChevronDown } from "lucide-react";
import { OptionsMenu } from "./OptionsMenu";

export default function DesignerHeader() {
  return (
    <header className="bg-secondary text-white">
      <Container className="h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Steel Building Depot Logo"
            className="flex items-center gap-3"
          >
            <Image
              src={theSteelLogo}
              alt="Steel Building Depot Logo"
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden sm:flex items-center gap-3">
            <Button size="sm" className="bg-white/20 rounded">
              <RotateCcw size={16} />
              Reset View
            </Button>

            <OptionsMenu>
              <Button
                size="sm"
                className="rounded bg-white/20 flex items-center gap-2"
              >
                Options
                <ChevronDown size={16} />
              </Button>
            </OptionsMenu>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <GetAQuoteDialog>
              <Button className="rounded" size="default">
                Get a Quote
              </Button>
            </GetAQuoteDialog>
            <Button variant="ghost" size="icon" className="p-2">
              <Share2 />
            </Button>
            <Link href="/" aria-label="Home" className="text-white/90">
              <Button variant="ghost" size="icon" className="p-2">
                <Home />
              </Button>
            </Link>
          </div>

          {/* Mobile: show compact quote button */}
          <div className="sm:hidden">
            <GetAQuoteDialog>
              <Button size="sm">Get a Quote</Button>
            </GetAQuoteDialog>
          </div>
        </div>
      </Container>
    </header>
  );
}
