"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import theSteelLogo from "@/assets/the-steel-logo-dark.svg";
import fbLogo from "@/assets/fb.svg";
import linkedinLogo from "@/assets/linkedin.svg";
import twitterLogo from "@/assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-white text-foreground font-sans">
      <Container className="py-12 flex flex-col md:flex-row justify-between items-center md:items-start  gap-8">
        {/* Left column: contact */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-stretch">
              <div className="text-sm font-semibold text-primary mb-1 w-1/3">
                ADDRESS:
              </div>
              <div className="text-base w-2/3">
                6391 Elgin St. Celina, Delaware 10299
              </div>
            </div>

            <div className="flex gap-5 items-stretch">
              <div className="text-sm font-semibold text-primary mb-1 w-1/3">
                PHONE:
              </div>
              <div className="text-base w-2/3">+84 1102 2703</div>
            </div>

            <div className="flex gap-5 items-stretch">
              <div className="text-sm font-semibold text-primary mb-1 w-1/3">
                EMAIL:
              </div>
              <div className="text-base w-2/3">hello@thesteel.com</div>
            </div>
          </div>

          <div className="mt-4">
            <Image src={theSteelLogo} alt="The Steel" className="h-16 w-auto" />
          </div>
        </div>

        {/* Center column: nav links */}
        <nav className="flex flex-col justify-center items-start gap-4 text-sm font-['Roboto'] font-medium">
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

            <div className="flex flex-col md:flex-row gap-3 items-center">
              <input
                aria-label="Your email"
                placeholder="Your email here"
                className="flex-1 border rounded px-4 py-2 text-sm bg-transparent"
                type="email"
              />
              <button className="bg-[#6D6D6D] text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold text-primary mb-3">
              SOCIAL:
            </div>
            <div className="flex gap-4 items-center">
              <Image src={fbLogo} alt="Facebook" className="h-10 w-10" />
              <Image src={linkedinLogo} alt="LinkedIn" className="h-10 w-10" />
              <Image src={twitterLogo} alt="Twitter" className="h-10 w-10" />
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
