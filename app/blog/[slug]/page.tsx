"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState } from "react";

const imgImage48 = "/blog-article-image.png";
const imgImage44 = "/blog-article-bg.png";
const imgImage56 = "/blog-hero-bg.png";
const imgImage45 = "/blog-mask1.svg";
const imgImage46 = "/blog-mask2.svg";
const imgEliosLogo = "/hero-elios-logo.svg";
const imgCarat = "/hero-carat.svg";
const imgArrow = "/hero-arrow.svg";
const imgCaratBreadcrumb = "/hero-breadcrumb-carat.svg";
const imgFrame = "/hero-time-frame.svg";

// Sample blog post data
const blogPosts = {
  "why-speed-matters-hiring": {
    title: "Why Speed Matters: How Faster Hiring Gives Companies a Competitive Edge",
    author: "Duran Workman",
    readTime: "4m",
    category: "Recruiting"
  },
  "ai-human-expertise": {
    title: "AI + Human Expertise: The Winning Formula for Smarter Recruiting",
    author: "Sarah Chen",
    readTime: "5m",
    category: "Technology"
  },
  "top-5-hiring-trends-2025": {
    title: "Top 5 Hiring Trends Every Business Should Watch in 2025",
    author: "Michael Torres", 
    readTime: "3m",
    category: "Industry"
  }
};

const relatedPosts = [
  {
    title: "Why Speed Matters: How Faster Hiring Gives Companies a Competitive Edge",
    author: "Duran Workman",
    readTime: "4m read",
    slug: "why-speed-matters-hiring"
  },
  {
    title: "AI + Human Expertise: The Winning Formula for Smarter Recruiting", 
    author: "Sarah Chen",
    readTime: "5m read",
    slug: "ai-human-expertise"
  },
  {
    title: "Top 5 Hiring Trends Every Business Should Watch in 2025",
    author: "Michael Torres",
    readTime: "3m read", 
    slug: "top-5-hiring-trends-2025"
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [email, setEmail] = useState("");
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-start relative size-full">
      <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative w-full">
        <Navigation />
      </div>
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-[1920px] h-[508px] relative">
        <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[100px] grow items-start justify-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start relative w-full">
              {/* Breadcrumb */}
              <div className="content-stretch flex gap-1.5 items-center justify-start relative">
                <Link href="/blog" className="font-aptos font-semibold leading-[0] not-italic relative text-[#535960] text-[16px] text-center text-nowrap">
                  <p className="leading-[22px] whitespace-pre">Blog</p>
                </Link>
                <div className="relative w-3.5 h-3.5">
                  <Image alt="" src={imgCaratBreadcrumb} width={14} height={14} className="block max-w-none size-full" />
                </div>
                <div className="font-aptos font-semibold leading-[0] not-italic relative text-[#09141f] text-[16px] text-center text-nowrap">
                  <p className="leading-[22px] whitespace-pre">{`Why  Speed Matters`}</p>
                </div>
              </div>
              
              {/* Title */}
              <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative text-[#09141f] text-[96px] tracking-[-5.76px]" style={{ width: "min-content" }}>
                <p className="leading-[96px]">{post.title}</p>
              </div>
              
              {/* Author & Read Time */}
              <div className="content-stretch flex gap-10 items-center justify-start relative w-full">
                <div className="font-aptos leading-[0] not-italic relative text-[#09141f] text-[20px] text-nowrap">
                  <p className="leading-[32px] whitespace-pre">{post.author} </p>
                </div>
                <div className="content-stretch flex gap-2.5 items-center justify-center relative">
                  <div className="relative w-5 h-5">
                    <Image alt="" src={imgFrame} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                  <div className="font-aptos leading-[0] not-italic relative text-[#09141f] text-[20px] text-nowrap">
                    <p className="leading-[32px] whitespace-pre">{post.readTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center pb-[152px] pt-0 px-0 relative w-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start max-w-[1638px] pb-[130px] pt-0 px-0 relative w-full">
          {/* Hero Image */}
          <div className="box-border content-stretch flex flex-col gap-[90px] h-[852px] items-center justify-center max-w-[1638px] mb-[-130px] relative rounded-[15px] w-full">
            <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px rounded-[15px] w-full"
              style={{ backgroundImage: `url('${imgImage48}')` }} 
            />
          </div>
          
          {/* Article Content */}
          <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start mb-[-130px] relative w-[946px]">
            {/* Quick Summary */}
            <div className="bg-white box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[45px] py-[60px] relative rounded-[8px] shadow-[0px_166px_46px_0px_rgba(0,0,0,0),0px_106px_42px_0px_rgba(0,0,0,0.01),0px_60px_36px_0px_rgba(0,0,0,0.02),0px_26px_26px_0px_rgba(0,0,0,0.03),0px_7px_15px_0px_rgba(0,0,0,0.04)] w-full">
              <div className="content-stretch flex flex-col gap-10 items-start justify-start relative w-full">
                <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative text-[#09141f] text-[32px] tracking-[-1.6px]" style={{ width: "min-content" }}>
                  <p className="leading-[0.9]">Quick Summary</p>
                </div>
                <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative w-[800px]">
                  <div className="content-stretch flex font-aptos items-start justify-start leading-[0] not-italic relative text-[20px]">
                    <div className="relative text-[#fa6a20] text-nowrap">
                      <ul className="css-ed5n1g list-disc">
                        <li className="mb-0 ms-[30px]">
                          <span className="leading-[1.7] text-[20px]">&nbsp;</span>
                        </li>
                        <li className="mb-0 ms-[30px]">
                          <span className="leading-[1.7] text-[20px]">&nbsp;</span>
                        </li>
                        <li className="ms-[30px]">
                          <span className="leading-[1.7] text-[20px]">&nbsp;</span>
                        </li>
                      </ul>
                    </div>
                    <div className="leading-[1.7] relative text-[#09141f] w-[445px]">
                      <p className="mb-0">Top talent is gone in 10 days.</p>
                      <p className="mb-0">Slow hiring costs productivity and candidates.</p>
                      <p className="">Elios helps you hire faster, without losing quality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intro Paragraph */}
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative w-full">
              <div className="font-aptos leading-[0] not-italic relative text-[#09141f] text-[20px] w-full">
                <p className="leading-[1.7]">In today's competitive talent market, speed isn't just a nice-to-have—it's a strategic advantage. The best candidates are often off the market within 10 days, while many companies still take weeks or even months to finalize a hire. This lag doesn't just cost time; it can cost your organization top talent, productivity, and even revenue.</p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="content-stretch flex flex-col gap-8 items-start justify-start relative w-full">
              <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative text-[#09141f] text-[32px] tracking-[-0.64px]" style={{ width: "min-content" }}>
                <p className="leading-[29px]">The High Cost of Slow Hiring</p>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative w-[800px]">
                <div className="font-aptos leading-[0] not-italic relative text-[#09141f] text-[20px] w-full">
                  <p className="leading-[1.7]">Every day a critical role goes unfilled, your team is stretched thinner. Projects stall, employees take on extra workloads, and business momentum slows. On top of that, candidates who experience a drawn-out hiring process often disengage or accept offers elsewhere—hurting both your talent pipeline and employer brand.</p>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col gap-8 items-start justify-start relative w-full">
              <div className="font-aptos font-semibold leading-[0] not-italic relative text-[#09141f] text-[32px] tracking-[-0.64px] w-full">
                <p className="leading-[29px]">Faster Hiring = Better Outcomes</p>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative w-full">
                <div className="font-aptos leading-[0] not-italic relative text-[#09141f] text-[20px] w-full">
                  <p className="leading-[1.7] mb-0">Speed doesn't mean cutting corners; it means being smarter. Organizations that streamline their hiring process are able to:</p>
                  <ul className="css-ed5n1g list-disc">
                    <li className="mb-0 ms-[30px]">
                      <span className="leading-[1.7]">Attract top talent before competitors do</span>
                    </li>
                    <li className="mb-0 ms-[30px]">
                      <span className="leading-[1.7]">Improve candidate experience, creating a positive impression from day one</span>
                    </li>
                    <li className="ms-[30px]">
                      <span className="leading-[1.7]">Reduce turnover, since quicker processes keep candidates engaged and confident in their decision</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col gap-8 items-start justify-start relative w-full">
              <div className="font-aptos font-semibold leading-[0] not-italic relative text-[#09141f] text-[32px] tracking-[-0.64px] w-full">
                <p className="leading-[29px]">How Elios Helps You Move Faster</p>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative w-full">
                <div className="font-aptos leading-[0] not-italic relative text-[#09141f] text-[20px] w-full">
                  <p className="leading-[1.7]">At Elios, we know that the right tools make all the difference. Our AI-powered platform enriches job requisitions, identifies qualified candidates instantly, and delivers actionable insights that recruiters can act on in real time. Combined with the expertise of experienced recruiters, Elios helps you reduce time-to-hire without sacrificing quality—so you get the best talent in less time.</p>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col gap-8 items-start justify-start relative w-full">
              <div className="font-aptos font-semibold leading-[0] not-italic relative text-[#09141f] text-[32px] tracking-[-0.64px] w-full">
                <p className="leading-[29px]">The Bottom Line</p>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative w-full">
                <div className="font-aptos leading-[0] not-italic relative text-[#09141f] text-[20px] w-full">
                  <p className="leading-[1.7]">In hiring, speed is a competitive edge. Companies that adapt and embrace faster, smarter processes will secure top talent, strengthen their teams, and accelerate growth. Don't let slow hiring hold your business back—because your competitors won't wait.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center pb-[400px] pt-[152px] px-0 relative w-full">
        <div className="content-stretch flex flex-col gap-[90px] items-center justify-center max-w-[1638px] relative w-full">
          <div className="content-stretch flex flex-col gap-10 items-center justify-center relative w-full">
            <div className="font-aptos font-semibold leading-[0] not-italic relative text-[#09141f] text-[64px] text-nowrap tracking-[-3.2px]">
              <p className="leading-[0.9] whitespace-pre">Other Related Posts</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[50px] items-start justify-center relative w-full">
            {relatedPosts.map((relatedPost, index) => (
              <Link key={index} href={`/blog/${relatedPost.slug}`} className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px relative cursor-pointer">
                <div className="box-border content-stretch flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] w-full">
                  <div className="absolute contents left-[-22px] top-0">
                    <div className="absolute contents left-[-6px] top-0">
                      <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute bg-center bg-cover bg-no-repeat h-[867.031px] left-[-379px] mask-position-[363px,_379px_250.932px,_250.932px] mask-size-[685px_426px,_636.283px_483px] top-[-250.93px] w-[1300.55px]" 
                        style={{ backgroundImage: `url('${imgImage44}')`, maskImage: `url('${imgImage45}'), url('${imgImage46}')` }} 
                      />
                    </div>
                  </div>
                  <div className="absolute bg-center bg-cover bg-no-repeat h-[705px] left-[-382px] top-[-176px] w-[1057px]" 
                    style={{ backgroundImage: `url('${imgImage48}')` }} 
                  />
                </div>
                <div className="content-stretch flex flex-col gap-10 items-start justify-start relative w-full">
                  <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative text-[#09141f] text-[32px] tracking-[-0.96px]" style={{ width: "min-content" }}>
                    <p className="leading-[1.2]">{relatedPost.title}</p>
                  </div>
                  <div className="content-stretch flex font-aptos gap-2.5 items-center justify-start leading-[0] not-italic relative text-[#121212] text-[16px] text-nowrap w-[512.667px]">
                    <div className="relative">
                      <p className="leading-[32px] text-nowrap whitespace-pre">{relatedPost.author}</p>
                    </div>
                    <div className="relative">
                      <p className="leading-[32px] text-nowrap whitespace-pre">·</p>
                    </div>
                    <div className="relative">
                      <p className="leading-[32px] text-nowrap whitespace-pre">{relatedPost.readTime}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section - Absolutely positioned to overlay footer */}
      <div className="absolute bg-[#e0f1fe] box-border content-stretch flex gap-[100px] h-[482px] items-center justify-start left-1/2 overflow-clip px-[120px] py-0 rounded-[25px] top-[3880px] translate-x-[-50%] w-[1656px] z-10">
        <div className="content-stretch flex flex-col gap-20 items-start justify-center relative w-[726px]">
          <div className="content-stretch flex flex-col gap-9 items-start justify-start relative w-full">
            <div className="font-aptos font-semibold leading-[0] not-italic relative text-[#292626] text-[64px] tracking-[-3.2px] w-full">
              <p className="leading-none">Subscribe to our newsletter</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative">
            <div className="bg-white box-border content-stretch flex items-center justify-between pl-[22px] pr-1.5 py-1.5 relative rounded-[15px] w-[600px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="font-aptos leading-[0] not-italic relative text-[16px] text-black text-center text-nowrap outline-none bg-transparent"
              />
              <button className="bg-[#fa6a20] box-border content-stretch flex gap-4 h-[60px] items-center justify-center px-[22px] py-3.5 relative rounded-[12px] hover:bg-[#e85a10] transition-colors">
                <div className="font-aptos font-semibold leading-[0] not-italic relative text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[20px] whitespace-pre">Subscribe Now</p>
                </div>
              </button>
            </div>
            <div className="font-aptos leading-[0] min-w-full not-italic relative text-[#09141f] text-[0px]" style={{ width: "min-content" }}>
              <p className="leading-[22px] text-[16px]">
                <span className="">{`By clicking "Subscribe now" I agree to the terms and conditions of our `}</span>
                <Link href="/privacy" className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline">
                  <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[22px] text-[#09141f]">
                    Privacy Statement
                  </span>
                </Link>
                <span className="">.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bg-center bg-cover bg-no-repeat left-[756.4px] mix-blend-screen size-[1396.6px] top-[-394.3px]" 
          style={{ backgroundImage: `url('${imgImage56}')` }} 
        />
      </div>

      <Footer />
    </div>
  );
}