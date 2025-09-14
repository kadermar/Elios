"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { BlogPost, BlogCategory, BlogAPI, BlogUtils } from "../lib/blogData";

const imgImage56 = "/blog-hero-bg.png";
const imgImage44 = "/blog-article-bg.png";
const imgImage48 = "/blog-article-image.png";
const img = "/cta-arrow.svg";
const img1 = "/hero-arrow.svg";
const imgProfileDropdownMenu1 = "/assets/a5646353145800288e648f5fe27f13f824531797.png";
const imgHeroArrow = "/assets/dbfc7fa3b59b3bc1d708ecb442d7b149635903f4.svg";
const imgProfileDropdownMenu2 = "/assets/1026c93c2f0cc786fb8f3edf6ebc6bf177a470e8.svg";


export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [email, setEmail] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(["All Categories"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadBlogData();
  }, []);

  const loadBlogData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Load posts and categories in parallel
      const [postsResponse, categoriesResponse] = await Promise.all([
        BlogAPI.getAllPosts({ published: true }),
        BlogAPI.getCategories()
      ]);
      
      setPosts(postsResponse.posts);
      
      // Build categories array with "All Categories" first
      const categoryNames = categoriesResponse.map(cat => cat.name);
      setCategories(["All Categories", ...categoryNames]);
      
    } catch (err) {
      setError('Unable to load blog content. Please try again later.');
      console.error('Error loading blog data:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = selectedCategory === "All Categories" 
    ? posts 
    : posts.filter(post => post.categories?.includes(selectedCategory));

  return (
    <div className="bg-[#f4f4f4] min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="content-stretch flex flex-col h-[508px] items-center justify-center relative w-full pt-32">
        <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative w-full px-4 md:px-0">
          <div className="content-stretch flex flex-col gap-[100px] items-start justify-start relative w-full md:w-[694px]">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start leading-[0] not-italic relative text-[#09141f] w-full">
              <div className="font-aptos font-semibold relative text-[48px] md:text-[96px] tracking-[-5.76px] w-full">
                <p className="leading-[48px] md:leading-[96px]">Stay in the know</p>
              </div>
              <div className="font-aptos font-normal relative text-[18px] md:text-[24px] w-full">
                <p className="leading-[24px] md:leading-[32px]">Stay ahead in the evolving world of talent. The Elios blog brings you fresh perspectives on AI in recruiting, industry trends, and strategies for finding and retaining top talent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center pb-[100px] pt-0 px-4 md:px-0 relative w-full">
        <div className="content-stretch flex gap-[90px] items-center justify-start max-w-[1638px] relative w-full">
          <div className="relative w-full border-b border-[rgba(0,0,0,0.2)]">
            {loading ? (
              <div className="flex items-center justify-center py-[26px]">
                <div className="animate-pulse text-[#6d7175]">Loading categories...</div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center py-[26px]">
                <div className="text-red-500">Error loading categories</div>
              </div>
            ) : (
              <div className="flex items-center justify-start overflow-x-auto scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`box-border flex gap-9 items-center justify-center px-[30px] py-[26px] relative whitespace-nowrap ${
                      selectedCategory === category 
                        ? 'border-b-[3px] border-black' 
                        : ''
                    }`}
                  >
                    <div className={`font-aptos font-semibold leading-[0] not-italic relative text-[16px] text-center text-nowrap ${
                      selectedCategory === category 
                        ? 'text-[#09141f]' 
                        : 'text-[#6d7175]'
                    }`}>
                      <p className="leading-[22px] whitespace-pre">{category}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="content-stretch flex flex-col gap-[90px] items-center justify-center max-w-[1638px] relative w-full">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-pulse text-[#6d7175] text-[24px]">Loading blog posts...</div>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="text-red-500 text-[24px]">Error loading blog posts</div>
              <button 
                onClick={loadBlogData}
                className="bg-[#fa6a20] text-white px-6 py-3 rounded-lg hover:bg-[#e85a10] transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-[#6d7175] text-[24px]">No blog posts found{selectedCategory !== "All Categories" ? ` in ${selectedCategory}` : ""}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] w-full">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="flex flex-col gap-[30px] items-start justify-center cursor-pointer hover:transform hover:scale-105 hover:z-20 transition-all relative">
                  <div className="box-border flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-hidden pb-6 pt-10 px-6 relative rounded-[15px] w-full bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0">
                      <Image 
                        alt={post.title} 
                        src={post.featuredImage || imgImage48} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start relative w-full">
                    <div className="font-aptos font-semibold leading-[1.2] text-[#09141f] text-[24px] md:text-[32px] tracking-[-0.96px] hover:text-[#fa6a20] transition-colors">
                      {post.title}
                    </div>
                    <div className="flex font-aptos gap-2.5 items-center justify-start leading-[0] not-italic relative text-[#121212] text-[16px]">
                      <div className="relative">
                        <p className="leading-[32px] text-nowrap whitespace-pre">{post.author?.name || 'Unknown Author'}</p>
                      </div>
                      <div className="relative">
                        <p className="leading-[32px] text-nowrap whitespace-pre">·</p>
                      </div>
                      <div className="relative">
                        <p className="leading-[32px] text-nowrap whitespace-pre">{BlogUtils.formatReadTime(post.readTime)}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative w-full flex justify-center pb-0 mb-[-240px] z-10">
        <div className="bg-[#e0f1fe] box-border content-stretch flex gap-[100px] items-center justify-start overflow-clip px-[120px] py-0 relative rounded-[25px] w-[1656px] h-[482px]">
          <div className="content-stretch flex flex-col gap-20 items-start justify-center relative shrink-0 w-[726px]">
            <div className="content-stretch flex flex-col gap-9 items-start justify-start relative shrink-0 w-full">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#292626] text-[64px] tracking-[-3.2px] w-full">
                <p className="leading-none">Subscribe to our newsletter</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0">
              <div className="bg-white box-border content-stretch flex items-center justify-between pl-[22px] pr-1.5 py-1.5 relative rounded-[15px] shrink-0 w-[600px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="font-aptos leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap outline-none bg-transparent"
                />
                <button className="bg-[#fa6a20] box-border content-stretch flex gap-4 h-[60px] items-center justify-center px-[22px] py-3.5 relative rounded-[12px] shrink-0 hover:bg-[#e85a10] transition-colors">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                    <p className="leading-[20px] whitespace-pre">Subscribe Now</p>
                  </div>
                </button>
              </div>
              <div className="font-aptos leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[16px]" style={{ width: "min-content" }}>
                <p className="leading-[22px]">
                  By clicking "Subscribe now" I agree to the terms and conditions of our{" "}
                  <Link href="/privacy" className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline">
                    <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[22px] text-[#09141f]">
                      Privacy Statement
                    </span>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-center bg-cover bg-no-repeat left-[756.4px] mix-blend-screen size-[1396.6px] top-[-394.3px]" 
            style={{ backgroundImage: `url('${imgImage56}')` }} 
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}