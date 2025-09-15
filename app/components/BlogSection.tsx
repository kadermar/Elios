import Link from "next/link";
import Image from "next/image";
import Tagline from "./Tagline";
import Button from "./Button";

interface BlogArticle {
  title: string;
  author: string;
  readTime: string;
  image: string;
  href: string;
}

interface BlogSectionProps {
  title?: string;
  tagline?: string;
  articles?: BlogArticle[];
}

const defaultArticles: BlogArticle[] = [
  {
    title: "Why speed matters: How faster hiring gives companies a Competitive Edge",
    author: "Duran Workman",
    readTime: "4m read",
    image: "/assets/blog/woman-speaking.png",
    href: "/blog/why-speed-matters-faster-hiring-competitive-edge"
  },
  {
    title: "How to supercharge your hiring",
    author: "Duran Workman",
    readTime: "4m read",
    image: "/assets/blog/woman-speaking.png",
    href: "/blog/how-to-supercharge-your-hiring"
  },
  {
    title: "Where have all the good talents gone?",
    author: "Duran Workman",
    readTime: "4m read",
    image: "/assets/blog/woman-speaking.png",
    href: "/blog/where-have-all-good-talents-gone"
  }
];

const defaultTechnologyArticles: BlogArticle[] = [
  {
    title: "Why Speed Matters: How Faster Hiring Gives Companies a Competitive Edge",
    author: "Duran Workman",
    readTime: "4m read",
    image: "/assets/blog/woman-speaking.png",
    href: "/blog/why-speed-matters-faster-hiring-competitive-edge"
  },
  {
    title: "AI + Human Expertise: The Winning Formula for Smarter Recruiting",
    author: "Duran Workman",
    readTime: "4m read",
    image: "/assets/blog/woman-speaking.png",
    href: "/blog/ai-human-expertise-winning-formula-smarter-recruiting"
  },
  {
    title: "Top 5 Hiring Trends Every Business Should Watch in 2025",
    author: "Duran Workman",
    readTime: "4m read",
    image: "/assets/blog/woman-speaking.png",
    href: "/blog/top-5-hiring-trends-business-watch-2025"
  }
];

const defaultHealthcareArticles: BlogArticle[] = [
  {
    title: "Why Speed Matters: How Faster Hiring Gives Companies a Competitive Edge",
    author: "Duran Workman",
    readTime: "4m read",
    image: "/assets/blog/woman-speaking.png",
    href: "/blog/why-speed-matters-faster-hiring-competitive-edge"
  },
  {
    title: "AI + Human Expertise: The Winning Formula for Smarter Recruiting",
    author: "Duran Workman",
    readTime: "4m read",
    image: "/assets/blog/woman-speaking.png",
    href: "/blog/ai-human-expertise-winning-formula-smarter-recruiting"
  },
  {
    title: "Top 5 Hiring Trends Every Business Should Watch in 2025",
    author: "Duran Workman",
    readTime: "4m read",
    image: "/assets/blog/woman-speaking.png",
    href: "/blog/top-5-hiring-trends-business-watch-2025"
  }
];

export default function BlogSection({
  title = "Latest Insights from Elios",
  tagline = "featured blog posts",
  articles = defaultArticles
}: BlogSectionProps) {
  return (
    <section className="py-36">
      <div className="max-w-[1700px] mx-auto px-16">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center justify-center mb-16">
          <div className="flex flex-col gap-4 items-center justify-center">
            <Tagline text={tagline} />
            <div className="font-['Aptos:Semibold',_sans-serif] leading-[54px] not-italic relative shrink-0 text-[#0f1012] text-[54px] text-center text-nowrap tracking-[-3.24px]">
              {title}
            </div>
          </div>
        </div>

        {/* Blog Articles */}
        <div className="flex gap-6 items-start justify-start mb-16">
          {articles.map((article, index) => (
            <Link key={index} href={article.href} className="flex-1 flex flex-col gap-6 group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              <div
                className="h-[280px] bg-cover bg-center rounded-[6px] overflow-hidden relative transition-all duration-300 group-hover:shadow-lg"
                style={{ backgroundImage: `url(${article.image})` }}
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-['Aptos:Semibold',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#09141f] text-[28px] tracking-[-0.84px] transition-colors duration-300 group-hover:text-[#fb5d0b]">
                  {article.title}
                </h3>
                <div className="flex font-['Aptos:Regular',_sans-serif] gap-1 items-center justify-start leading-[20px] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap">
                  <span>{article.author}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex items-center justify-center">
          <Button href="/blog" variant="tertiary" size="lg" showArrow={true}>
            See All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
}

// Export specific articles for different pages
export { defaultTechnologyArticles, defaultHealthcareArticles };