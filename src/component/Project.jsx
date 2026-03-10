import LogoLoop from '../LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
const techLogos = [
  {
    node: (
      <div className="bg-transparent w-12 h-12 rounded-full flex items-center justify-center">
        <SiReact className="text-white text-2xl" />
      </div>
    ),
    title: "React",
    href: "https://react.dev",
  },
  {
    node: (
      <div className="bg-transparent w-12 h-12 rounded-full flex items-center justify-center">
        <SiNextdotjs className="text-white text-2xl" />
      </div>
    ),
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: (
      <div className="bg-transparent w-12 h-12 rounded-full flex items-center justify-center">
        <SiTypescript className="text-white text-2xl" />
      </div>
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: (
      <div className="bg-transparent w-12 h-12 rounded-full flex items-center justify-center">
        <SiTailwindcss className="text-white text-2xl" />
      </div>
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];


// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function Project() {
  return (
    <>
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0A0B1A"
        ariaLabel="Technology partners"
      />
      
      
    </div>
    <Tabs defaultValue="overview" className="flex justify-center items-center">
  <TabsList
    className="m-2 w-[70%] 
               bg-[#0A0B1A] backdrop-blur-2xl
               border border-white/10 rounded-xl"
  >
    <TabsTrigger
      value="overview"
      className="
        mx-3 px-4 py-2 text-white
        bg-transparent
        shadow-[0_12px_40px_rgba(0,0,0,0.6)]
        transition-all
        hover:shadow-[0_0_25px_15px_rgba(59,130,246,0.5)]
        transform hover:translate-y-2 duration-300 ease-linear 
        data-[state=inactive]:hover:text-blue-400
        data-[state=active]:bg-transparent
        data-[state=active]:border-b-2
        data-[state=active]:border-blue-400
        data-[state=active]:text-blue-400
      "
    >
      Overview
    </TabsTrigger>

    <TabsTrigger
      value="analytics"
      className="
        mx-3 px-4 py-2 text-white
        bg-transparent
        shadow-[0_12px_40px_rgba(0,0,0,0.6)]
        transition-all
        hover:shadow-[0_0_25px_15px_rgba(59,130,246,0.5)]
        transform hover:translate-y-2 duration-300 ease-linear 
        data-[state=inactive]:hover:text-blue-400
        data-[state=active]:bg-transparent
        data-[state=active]:border-b-2
      data-[state=active]:border-blue-400
      data-[state=active]:text-blue-400
      "
    >
      Analytics
    </TabsTrigger>

    <TabsTrigger
      value="reports"
      className="
        mx-3 px-4 py-2 text-white
        bg-transparent
        shadow-[0_12px_40px_rgba(0,0,0,0.6)]
        transition-all
        hover:shadow-[0_0_25px_15px_rgba(59,130,246,0.5)]
        transform hover:translate-y-2 duration-300 ease-linear 
        data-[state=inactive]:hover:text-blue-400

        data-[state=active]:bg-transparent
        data-[state=active]:border-b-2
        data-[state=active]:border-blue-400
        data-[state=active]:text-blue-400
      "
    >
      Reports
    </TabsTrigger>
  </TabsList>
  
</Tabs>
  
</>
  );
}
export default Project;