"use client";

import Image from "next/image";

const imgImage48 = "/testimonial-bg-amplify.png";
const imgImage47 = "/testimonial-bg-weatherford.png";
const imgImage52 = "/testimonial-bg-drata.png";
const imgImage58 = "/testimonial-bg-samsung.png";
const imgVector622 = "/vector-622.svg";
const imgAmplifyChangeLogo01 = "/amplify-change-logo-alt.svg";
const imgDrataWordmarkDark01 = "/drata-logo-alt.svg";
const imgGroup = "/samsung-logo-alt.svg";
const img = "/arrow-left.svg";
const img1 = "/arrow-right.svg";

const testimonials = [
  {
    company: "Amplify Change",
    logo: imgAmplifyChangeLogo01,
    quote: "We cannot believe how much we needed the Insights platform.",
    author: "Darren Styles, CEO of Amplify Change",
    bgImage: imgImage48,
    bgColor: "bg-white",
    textColor: "text-[#09141f]",
    logoType: "image"
  },
  {
    company: "Weatherford",
    logo: "weatherford",
    quote: "Elios simplified our entire hiring process.",
    author: "Darren Styles, CEO of Amplify Change",
    bgImage: imgImage47,
    bgColor: "bg-[#fae6a4]",
    textColor: "text-[#09141f]",
    logoType: "text"
  },
  {
    company: "Drata",
    logo: imgDrataWordmarkDark01,
    quote: "We cannot believe how much we needed the Insights platform.",
    author: "Darren Styles, CEO of Amplify Change",
    bgImage: imgImage52,
    bgColor: "bg-[#e0f1fe]",
    textColor: "text-[#09141f]",
    logoType: "image"
  },
  {
    company: "Samsung",
    logo: imgGroup,
    quote: "Wow. There's so many words.",
    author: "* Darren Styles, CEO of Amplify Change",
    bgImage: imgImage58,
    bgColor: "bg-white",
    textColor: "text-[#404453]",
    logoType: "image"
  }
];

export default function CaseStudies() {
  const handlePrev = () => {
    console.log("Previous");
  };

  const handleNext = () => {
    console.log("Next");
  };

  return (
    <div className="flex flex-col gap-[60px] md:gap-[90px] items-center justify-center px-4 md:px-0 py-[80px] md:py-[152px] relative w-full" data-name="Case Studies">
      <div className="flex flex-col gap-[60px] md:gap-[90px] items-start justify-start max-w-[1638px] relative w-full" data-name="Wrapper">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:gap-10 items-start justify-center relative w-full" data-name="Subhead Section">
          <div className="flex gap-2.5 items-center justify-center px-0 py-[18px] relative rounded-[9px]" data-name="Tagline">
            <div className="h-[13px] relative w-4">
              <div className="absolute inset-[-3.99%_-8.8%_-11.36%_-1.63%]">
                <Image
                  alt="Case Studies"
                  src={imgVector622}
                  width={16}
                  height={13}
                  className="block max-w-none w-full h-full"
                />
              </div>
            </div>
            <div className="font-semibold leading-[0] not-italic relative text-[#fa6a20] text-[16px] md:text-[20px] text-nowrap uppercase">
              <p className="leading-[24px] whitespace-pre">Case Studies</p>
            </div>
          </div>
          <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[36px] md:text-[64px] text-center md:text-left tracking-[-1.8px] md:tracking-[-3.2px]">
            <p className="leading-[1.1] md:leading-[0.9] whitespace-pre-wrap md:whitespace-pre">Proven Results, Real Impact</p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col md:flex-row gap-5 items-stretch justify-start relative w-full overflow-x-auto md:overflow-visible">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between overflow-clip pb-6 pt-6 md:pt-10 px-4 md:px-6 relative rounded-[15px] w-full md:w-[480px] min-h-[400px] md:h-[564px] flex-shrink-0"
              style={{
                backgroundImage: `url(${testimonial.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Logo Section */}
              <div className="flex flex-col gap-3 md:gap-5 items-start justify-start px-2.5 py-0 relative w-full">
                {testimonial.logoType === "text" ? (
                  <div className="text-white text-xl md:text-2xl font-medium opacity-90">
                    Weatherford
                  </div>
                ) : (
                  <div className={index === 0 ? "h-[40px] md:h-[50px] relative w-[130px] md:w-[162px]" : index === 2 ? "h-[22px] md:h-[27px] relative w-[123px] md:w-[154px]" : "h-[23px] md:h-[29px] overflow-clip relative w-[151px] md:w-[189px]"}>
                    <Image
                      alt={testimonial.company}
                      src={testimonial.logo}
                      width={index === 0 ? 162 : index === 2 ? 154 : 189}
                      height={index === 0 ? 50 : index === 2 ? 27 : 29}
                      className="block max-w-none w-full h-full"
                    />
                  </div>
                )}
              </div>

              {/* Quote Card */}
              <div className={`${testimonial.bgColor} flex flex-col gap-2.5 items-start justify-start p-4 md:p-[30px] relative rounded-[4px] w-full ${index === 3 ? "md:py-[50px]" : ""}`}>
                <div className="flex flex-col gap-6 md:gap-[50px] items-start justify-start leading-[0] not-italic relative w-full">
                  <div className={`font-semibold relative ${testimonial.textColor} text-[20px] md:text-[32px] tracking-[-0.6px] md:tracking-[-0.96px] w-full`}>
                    <p className="leading-[1.3] md:leading-[32px]">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  <div className={`font-normal relative text-[#121212] ${index === 3 ? "text-[14px] md:text-[20px]" : "text-[14px] md:text-[16px]"} w-full`}>
                    <p className="leading-[1.4] md:leading-[32px]">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="flex gap-3 md:gap-5 items-center justify-center md:justify-start relative w-full" data-name="Carousel Nav">
          <button
            onClick={handlePrev}
            className="bg-white flex gap-[15px] h-14 md:h-20 items-center justify-center px-4 md:px-7 py-3 md:py-5 relative rounded-[12px] hover:bg-gray-50 transition-colors"
            data-name="Left Button"
          >
            <div className="flex items-center justify-center relative">
              <div className="flex-none rotate-[180deg]">
                <div className="relative w-5 md:w-6 h-5 md:h-6">
                  <div className="absolute inset-[15.67%_15%]">
                    <div className="absolute inset-[-6.07%_-5.95%]">
                      <Image
                        alt="Previous"
                        src={img}
                        width={24}
                        height={24}
                        className="block max-w-none w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button
            onClick={handleNext}
            className="bg-white flex gap-[15px] h-14 md:h-20 items-center justify-center px-4 md:px-7 py-3 md:py-5 relative rounded-[12px] hover:bg-gray-50 transition-colors"
            data-name="Right Button"
          >
            <div className="relative w-5 md:w-6 h-5 md:h-6">
              <div className="absolute inset-[15.67%_15%]">
                <div className="absolute inset-[-6.07%_-5.95%]">
                  <Image
                    alt="Next"
                    src={img1}
                    width={24}
                    height={24}
                    className="block max-w-none w-full h-full"
                  />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}