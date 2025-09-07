"use client";

import Image from "next/image";

// Team data structure
const teamData = {
  leadersAndInvestors: [
    {
      name: "Duran Workman",
      title: "CEO",
      image: "/team/duran-workman.png",
      linkedIn: "#",
      email: "#"
    },
    {
      name: "Alan Chesler", 
      title: "Leadership",
      image: "/team/alan-chesler.png",
      linkedIn: "#",
      email: "#"
    },
    {
      name: "Jason Offerman",
      title: "Leader & Investor",
      image: "/team/jason-offerman.png", 
      linkedIn: "#",
      email: "#"
    },
    {
      name: "Saheb Sabwarhal",
      title: "Leader & Investor",
      image: "/team/saheb-sabwarhal.png",
      linkedIn: "#", 
      email: "#"
    },
    {
      name: "Jeff Williams",
      title: "Leader & Investor", 
      image: "/team/jeff-williams.png",
      linkedIn: "#",
      email: "#"
    },
    {
      name: "Kentaro Kawamori",
      title: "Leader & Investor",
      image: "/team/kentaro-kawamori.png",
      linkedIn: "#",
      email: "#"
    }
  ]
};

interface TeamMember {
  name: string;
  title: string; 
  image: string;
  linkedIn: string;
  email: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-9 items-center justify-center overflow-clip pb-10 pt-6 px-6 relative rounded-[15px] self-start shrink-0">
      <div className="relative w-full">
        <div className="bg-stone-100 h-[409px] rounded-[4px] w-full" />
        <div className="absolute inset-0 rounded-[4px] overflow-hidden">
          <Image
            alt={member.name}
            src={member.image}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start px-5 py-0 relative shrink-0 w-full">
        <div className="content-stretch flex gap-3.5 items-start justify-start relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-black w-full">
                <p className="leading-[24px]">{member.name}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full">
              <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[20px] w-full">
                <p className="leading-[24px]">{member.title}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <a 
              href={member.linkedIn} 
              className="relative shrink-0 size-[30px] hover:opacity-80 transition-opacity"
              aria-label={`${member.name} LinkedIn profile`}
            >
              <Image 
                alt="LinkedIn" 
                src="/social-media-linkedin.svg" 
                width={30} 
                height={30} 
                className="block max-w-none size-full" 
              />
            </a>
            <a 
              href={member.email} 
              className="relative shrink-0 size-[30px] hover:opacity-80 transition-opacity"
              aria-label={`Email ${member.name}`}
            >
              <Image 
                alt="Email" 
                src="/frame-email.svg" 
                width={30} 
                height={30} 
                className="block max-w-none size-full" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  gridCols?: string;
}

function TeamSection({ title, members, gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }: TeamSectionProps) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start justify-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-10 items-start justify-center relative shrink-0 w-full">
        <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] md:text-[48px] text-nowrap tracking-[-1.6px] md:tracking-[-2.4px]">
          <p className="leading-[0.9] whitespace-pre">{title}</p>
        </div>
      </div>
      <div className={`gap-5 grid ${gridCols} relative shrink-0 w-full`}>
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center pb-[400px] pt-[152px] px-4 md:px-0 relative size-full bg-[#F4F4F4]">
      <div className="content-stretch flex flex-col gap-[120px] items-start justify-start max-w-[1638px] relative shrink-0 w-full">
        {/* Header Section */}
        <div className="content-stretch flex flex-col gap-10 items-center justify-center relative shrink-0 w-full">
          <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-0 py-[18px] relative rounded-[9px] shrink-0">
            <div className="h-[13px] relative shrink-0 w-4">
              <div className="absolute inset-[-3.99%_-8.8%_-11.36%_-1.63%]">
                <Image 
                  alt="" 
                  src="/vector-622.svg" 
                  width={16} 
                  height={13} 
                  className="block max-w-none size-full" 
                />
              </div>
            </div>
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap uppercase">
              <p className="leading-[24px] whitespace-pre">team</p>
            </div>
          </div>
          <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] md:text-[64px] text-center text-nowrap tracking-[-1.6px] md:tracking-[-3.2px]">
            <p className="leading-[0.9] whitespace-pre">Meet the Team</p>
          </div>
          <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] md:text-[20px] text-center max-w-[684px] px-4">
            <p className="leading-[24px]">Automation clears the busywork so recruiters can focus on what matters — connecting the right talent to the right roles. Automation clears the busywork so recruiters can focus on what matters — connecting the right talent to the right roles.</p>
          </div>
        </div>

        {/* Leaders & Investors */}
        <TeamSection 
          title="Leaders & Investors" 
          members={teamData.leadersAndInvestors}
          gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        />
      </div>
    </div>
  );
}