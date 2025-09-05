"use client";

import Image from "next/image";
import Link from "next/link";

const imgImage56 = "/cta-background-image.png";
const img = "/cta-arrow.svg";

export default function Cta() {
  return (
    <div className="bg-[#e0f1fe] box-border flex items-center gap-[100px] overflow-clip px-[120px] py-0 relative rounded-[25px]" style={{ width: '1656px', height: '482px' }} data-node-id="65:1799">
      <div className="content-stretch flex flex-col gap-20 items-start justify-center relative shrink-0 w-[726px]" data-node-id="65:1821">
        <div className="font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#292626] text-[64px] tracking-[-3.2px]" data-node-id="65:1822" style={{ width: "min-content" }}>
          <p className="leading-none">Let&apos;s Build Your Dream Team of Tomorrow</p>
        </div>
        <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0" data-name="Button Row" data-node-id="65:1823">
          <Link href="/book-demo" className="bg-[#fa6a20] box-border content-stretch flex gap-4 h-[60px] items-center justify-center pl-[22px] pr-2 py-3.5 relative rounded-[12px] shrink-0" data-name="Primary Button" data-node-id="65:1824">
            <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white" data-node-id="65:1826">
              <p className="leading-[20px] whitespace-pre">Book a Demo</p>
            </div>
            <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[7px] shrink-0 size-[46px]" data-node-id="65:1827">
              <div className="relative shrink-0 size-4" data-name="Line Rounded/Arrow rigth" data-node-id="65:1828">
                <div className="absolute inset-[15.67%_15%]" data-name="Arrow rigth" id="node-I65_1828-4940_34491">
                  <div className="absolute inset-[-7.8%_-7.66%_-7.8%_-7.65%]">
                    <Image alt="Arrow" src={img} width={16} height={16} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="box-border content-stretch flex gap-[3px] h-[60px] items-center justify-center px-[22px] py-[18px] relative rounded-[12px] shrink-0" data-name="Secondary Button" data-node-id="65:1829">
            <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" data-node-id="65:1831">
              <p className="leading-[20px] whitespace-pre">Get Talent</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-center bg-cover bg-no-repeat left-[756.4px] mix-blend-screen size-[1396.6px] top-[-394.3px]" data-name="image 56" data-node-id="65:1836" style={{ backgroundImage: `url('${imgImage56}')` }} />
    </div>
  );
}