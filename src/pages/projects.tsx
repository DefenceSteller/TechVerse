import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { title } from "@/components/primitives";
import ProjectCard from "@/components/projectCard";

const PROJECTS = [
  {
    title: "Invest Mate",
    description:
      "TechVerse proudly presents Invest Mate, a sophisticated stock trading platform that empowers you to buy and sell stocks effortlessly while keeping you informed with live, real-time graphs of all available stocks powered by Kite Connect.",
    techStack: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Express Js", icon: "/icons/express.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Node Js", icon: "/icons/nodejs.svg" },
      { name: "Ant Design", icon: "/icons/antDesign.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
      { name: "Supabase", icon: "/icons/supabase.svg" },
      { name: "Kite Connect", icon: "/icons/kiteConnect.png" },
    ],
    images: [
      "https://i.postimg.cc/vmGkWKk7/signup.png",
      "https://i.postimg.cc/x1vBNQxT/home.png",
      "https://i.postimg.cc/dVPz039x/buy-sell.png",
      "https://i.postimg.cc/tTTccxXY/pricing.png",
      "https://i.postimg.cc/c1zpVXtZ/admin-Customer-panel.png",
      "https://i.postimg.cc/sDZky75W/admin-user-panel.png",
      "https://i.postimg.cc/pdk7kZMw/userInfo.png",
      "https://i.postimg.cc/90ssZQHz/aboutus.png"
    ],
    liveDemoLink: "https://invest-mate-three.vercel.app",
  },
];

interface ProjectsPageProps {
  id?: string;
}

export default function Projects({ id }: ProjectsPageProps) {
  return (
    <div
      className="flex flex-col justify-center items-center p-8"
      style={{ fontFamily: "kufi" }}
      id={id}
    >
      <div className="text-center mb-4">
        <h1 className={title()}>Our Projects</h1>
        <p className="dark:text-gray-500">
          Where Ideas Meet Innovation and Technology
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Ensures only 1 project is visible
        centeredSlides={true} // Centers the active slide
        pagination={{ clickable: true, }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-5xl mx-auto" // Keeps carousel centered
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
