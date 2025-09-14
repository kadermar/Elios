"use client";

import Image from "next/image";
import Logo from "./Logo";
import Link from "./Link";

// Social media icons - you'll need to add these to public folder
const imgFacebook = "/footer-facebook.svg";
const imgTwitter = "/footer-twitter.svg";
const imgInstagram = "/footer-instagram.svg";
const imgLinkedIn = "/footer-linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-white w-full">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 pt-[104px] pb-16">
        <div className="flex flex-col gap-24 md:gap-36">
          {/* Footer Top - Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-[30px]">
              <Logo variant="full" size="md" color="black" />
            </div>

            {/* Hiring Managers Column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[#595959] text-[14px] uppercase tracking-wider">
                Hiring Managers
              </h3>
              <div className="flex flex-col gap-3">
                <Link href="/request-talent" variant="default" size="md" weight="semibold">
                  Elios Talent
                </Link>
                <Link href="/insights" variant="default" size="md" weight="semibold">
                  Elios Insights
                </Link>
                <Link href="/industries" variant="default" size="md" weight="semibold">
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
                <Link href="/jobs" variant="default" size="md" weight="semibold">
                  Explore Jobs
                </Link>
                <Link href="/submit-resume" variant="default" size="md" weight="semibold">
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
                <Link href="/about" variant="default" size="md" weight="semibold">
                  About Us
                </Link>
                <Link href="/connect" variant="default" size="md" weight="semibold">
                  Connect
                </Link>
                <Link href="/locations" variant="default" size="md" weight="semibold">
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
                <Link href="/blog" variant="default" size="md" weight="semibold">
                  Blog
                </Link>
                <Link href="/case-studies" variant="default" size="md" weight="semibold">
                  Case Studies
                </Link>
                <Link href="/faq" variant="default" size="md" weight="semibold">
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-100">
            {/* Copyright */}
            <div className="text-[#0f1012] text-[14px]">
              © 2025 Elios, Inc. All Rights Reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 items-center">
              <Link 
                href="https://facebook.com" 
                external 
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                ariaLabel="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="https://twitter.com" 
                external 
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                ariaLabel="Twitter"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link 
                href="https://instagram.com" 
                external 
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                ariaLabel="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.878.06 4.813.109 4.086.278 3.45.525a4.879 4.879 0 00-1.772 1.153A4.92 4.92 0 00.525 3.45C.278 4.086.109 4.813.06 5.878.012 6.944 0 7.284 0 10s.012 3.056.06 4.122c.049 1.065.218 1.792.465 2.428a4.879 4.879 0 001.153 1.772 4.92 4.92 0 001.772 1.153c.636.247 1.363.416 2.428.465 1.066.048 1.406.06 4.122.06s3.056-.012 4.122-.06c1.065-.049 1.792-.218 2.428-.465a4.879 4.879 0 001.772-1.153 4.92 4.92 0 001.153-1.772c.247-.636.416-1.363.465-2.428.048-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.122c-.049-1.065-.218-1.792-.465-2.428a4.879 4.879 0 00-1.153-1.772A4.92 4.92 0 0016.55.525C15.914.278 15.187.109 14.122.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.986.01 4.04.058.975.045 1.504.207 1.857.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.054.058 1.37.058 4.04s-.01 2.986-.058 4.04c-.045.975-.207 1.504-.344 1.857a3.077 3.077 0 01-.748 1.15 3.098 3.098 0 01-1.15.748c-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058s-2.986-.01-4.04-.058c-.975-.045-1.504-.207-1.857-.344a3.077 3.077 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.054-.058-1.37-.058-4.04s.01-2.986.058-4.04c.045-.975.207-1.504.344-1.857.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.04-.058zm0 3.068a5.13 5.13 0 100 10.26 5.13 5.13 0 000-10.26zm0 8.458a3.328 3.328 0 110-6.656 3.328 3.328 0 010 6.656zm6.532-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="https://linkedin.com" 
                external 
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                ariaLabel="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}