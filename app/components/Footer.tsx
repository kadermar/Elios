"use client";

import Image from "next/image";
import Logo from "./Logo";
import Link from "./Link";
import Icon from "./Icon";


export default function Footer() {
  return (
    <footer className="bg-white w-full relative z-10">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 pt-[104px] pb-16">
        <div className="flex flex-col gap-24 md:gap-36">
          {/* Footer Top - Links Grid */}
          <div className="grid h-32 gap-y-10 gap-x-6 self-stretch grid-rows-[repeat(1,_minmax(0,_1fr))] grid-cols-[repeat(5,_minmax(0,_1fr))]">
            {/* Logo Column */}
            <div className="flex flex-col gap-[30px]">
              <Logo variant="full" size="md" color="black" />
            </div>

            {/* Hiring Managers Column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[#595959] text-[14px] uppercase tracking-wider">
                Hiring Managers
              </h3>
              <div className="flex flex-col gap-3">
                <Link href="/request-talent" variant="footer" size="md" weight="semibold">
                  Elios Talent
                </Link>
                <Link href="/insights" variant="footer" size="md" weight="semibold">
                  Elios Insights
                </Link>
                <Link href="/industries" variant="footer" size="md" weight="semibold">
                  Industries
                </Link>
              </div>
            </div>

            {/* Candidates Column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[#595959] text-[14px] uppercase tracking-wider">
                Candidates
              </h3>
              <div className="flex flex-col gap-3">
                <Link href="/explore-jobs" variant="footer" size="md" weight="semibold">
                  Explore Jobs
                </Link>
                <Link href="/submit-resume" variant="footer" size="md" weight="semibold">
                  Submit Your Resume
                </Link>
              </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[#595959] text-[14px] uppercase tracking-wider">
                Company
              </h3>
              <div className="flex flex-col gap-3">
                <Link href="/about" variant="footer" size="md" weight="semibold">
                  About Us
                </Link>
                <Link href="/connect" variant="footer" size="md" weight="semibold">
                  Connect
                </Link>
                <Link href="/locations" variant="footer" size="md" weight="semibold">
                  Where We Serve
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[#595959] text-[14px] uppercase tracking-wider">
                Resources
              </h3>
              <div className="flex flex-col gap-3">
                <Link href="/blog" variant="footer" size="md" weight="semibold">
                  Blog
                </Link>
                <Link href="/case-studies" variant="footer" size="md" weight="semibold">
                  Case Studies
                </Link>
                <Link href="/faq" variant="footer" size="md" weight="semibold">
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 pb-2 min-h-[48px]">
            {/* Copyright */}
            <div className="flex items-center">
              <div className="font-['Aptos:Regular',_sans-serif] leading-none text-[#0f1012] text-[14px]">
                <p className="leading-[18px]">© 2025 Elios, Inc. All Rights Reserved.</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 items-center justify-end min-h-[24px] py-1">
              <Link
                href="https://www.facebook.com/eliostalent"
                external
                className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center p-1 h-6 w-6"
                ariaLabel="Facebook"
              >
                <div className="h-5 w-5 flex items-center justify-center">
                  <Icon type="facebook" size="regular" color="#0f1012" />
                </div>
              </Link>
              <Link
                href="https://x.com/elios_talent"
                external
                className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center p-1 h-6 w-6"
                ariaLabel="Twitter/X"
              >
                <div className="h-5 w-5 flex items-center justify-center">
                  <Icon type="twitter-x" size="regular" color="#0f1012" />
                </div>
              </Link>
              <Link
                href="https://instagram.com/eliostalent"
                external
                className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center p-1 h-6 w-6"
                ariaLabel="Instagram"
              >
                <div className="h-5 w-5 flex items-center justify-center">
                  <Icon type="instagram" size="regular" color="#0f1012" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/eliostalent/"
                external
                className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center p-1 h-6 w-6"
                ariaLabel="LinkedIn"
              >
                <div className="h-5 w-5 flex items-center justify-center">
                  <Icon type="linkedin" size="regular" color="#0f1012" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}