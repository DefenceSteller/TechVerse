import { Card, CardHeader, CardBody } from "@heroui/card";
import {Avatar} from "@heroui/avatar";
import { TechVerse } from "@/components/techVerse";
import { title } from "@/components/primitives";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Scraping & Automation",
    description: "Extracting data from websites and automating tasks using Python to streamline workflows and enhance efficiency.",
    image: ""
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    description: "Building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React, and Node.js).",
    image: ""
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Creating robust and efficient server-side applications using Node.js, with expertise in Express.js and NestJS frameworks.",
    image: ""
  },
  {
    id: 4,
    title: "Desktop App Development",
    description: "Developing cross-platform desktop applications using Electron, delivering seamless user experiences on Windows, macOS, and Linux.",
    image: ""
  },
  {
    id: 5,
    title: "SaaS Development",
    description: "Building scalable and secure Software-as-a-Service (SaaS) solutions tailored to business needs, ensuring high performance and reliability.",
    image: ""
  },
  {
    id: 6,
    title: "UI/UX Design Using Figma",
    description: "Creating user-friendly and visually appealing designs with Figma, focusing on wireframing, prototyping, and seamless UX.",
    image: ""
  },  
];
interface ServicesPageProps {
  id?: string;
}

export default function ServicesPage({ id }: ServicesPageProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4" id={id} style={{ fontFamily: "kufi" }}>
      <div>
        <h1 className={title()}>Our Services</h1>
        <p className="dark:text-gray-500">
          Innovative Digital Solutions to Elevate Your Business
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center">
        {services.map((service) => (
          <Card
            key={service.id}
            className="overflow-hidden relative w-[320px] border-small border-foreground/10 bg-right-bottom bg-[#e5e5e5] dark:bg-[#18181b]"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar className="border-small border-white/20 bg-black dark:bg-transparent" icon={<TechVerse className="text-white" />} />
                <p className="text-large font-medium dark:text-white">{service.title}</p>
              </div>
            </CardHeader>
            <CardBody className="px-3">
              <div className="flex flex-col gap-2 px-2">
                <p className="text-medium dark:text-white/60">{service.description}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

