"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import theSteelLogo from "@/assets/the-steel-logo-dark.svg";

export default function Footer() {
  return (
    <footer className="bg-white text-foreground">
      <Container className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column: contact */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-1">
            <div className="text-sm font-semibold text-primary mb-1">
              ADDRESS:
            </div>
            <div className="text-base">
              6391 Elgin St. Celina, Delaware 10299
            </div>
          </div>

          <div className="flex gap-1">
            <div className="text-sm font-semibold text-primary mb-1">
              PHONE:
            </div>
            <div className="text-base">+84 1102 2703</div>
          </div>

          <div className="flex gap-1">
            <div className="text-sm font-semibold text-primary mb-1">
              EMAIL:
            </div>
            <div className="text-base">hello@thesteel.com</div>
          </div>

          <div className="mt-4">
            <Image src={theSteelLogo} alt="The Steel" className="h-16 w-auto" />
          </div>
        </div>

        {/* Center column: nav links */}
        <nav className="flex flex-col justify-center items-start gap-4 text-sm">
          <Link
            href="/building-types"
            className="hover:text-primary transition-colors"
          >
            Building Types
          </Link>
          <Link href="/why-us" className="hover:text-primary transition-colors">
            Why Us
          </Link>
          <Link
            href="/projects"
            className="hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/resources"
            className="hover:text-primary transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right column: newsletter + social */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-sm font-semibold text-primary mb-2">
              NEWSLETTER:
            </div>

            <div className="flex gap-3 items-center">
              <input
                aria-label="Your email"
                placeholder="Your email here"
                className="flex-1 border border-border rounded px-4 py-2 text-sm"
                type="email"
              />
              <button className="bg-[#616065] text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold text-primary mb-3">
              SOCIAL:
            </div>
            <div className="flex gap-4">
              <span className="h-10 w-10 rounded-full bg-slate-800 text-white flex items-center justify-center">
                f
              </span>
              <span className="h-10 w-10 rounded-full bg-slate-800 text-white flex items-center justify-center">
                in
              </span>
              <span className="h-10 w-10 rounded-full bg-slate-800 text-white flex items-center justify-center">
                t
              </span>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-primary py-6">
        <Container className="text-center text-white">
          Thesteel Company © {new Date().getFullYear()}. All Rights Reserved
        </Container>
      </div>
    </footer>
  );
}
