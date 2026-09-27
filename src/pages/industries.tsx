import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody } from "@heroui/card";
import {
  FaTruck,
  FaHeadset,
  FaHeartbeat,
  FaShoppingCart,
} from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { VscRocket } from "react-icons/vsc";

const industries = [
  {
    title: "Education",
    description:
      "ERPs for educational organizations, student awareness programs, online education portals.",
    icon: <GiBookshelf className="text-4xl" />,
  },
  {
    title: "Logistics",
    description:
      "Enabling logistics and supply chain companies to leverage emerging technologies for better real-time fleet management.",
    icon: <FaTruck className="text-4xl " />,
  },
  {
    title: "Customer Support",
    description:
      "Complete user support portal for complaints and problems, contacting agents through live video calls features.",
    icon: <FaHeadset className="text-4xl " />,
  },
  {
    title: "Healthcare",
    description:
      "Medical statistics, healthcare issues, user portals for treatments and medicine dosages.",
    icon: <FaHeartbeat className="text-4xl " />,
  },
  {
    title: "Retail",
    description:
      "E-Mart websites, online medicine stores, feasible cash payments, secure selling and buying programs.",
    icon: <FaShoppingCart className="text-4xl " />,
  },
  {
    title: "Startups & Marketplaces",
    description:
      "Blockchain, virtual reality, transportation, delivery, logistics, corporate wellness, and construction.",
    icon: <VscRocket className="text-4xl" />,
  },
];

interface IndustriesPageProps {
  id?: string;
}

export default function IndustriesPage({ id }: IndustriesPageProps) {
  return (
    <DefaultLayout>
      <section
        id={id}
        className="max-w-6xl mx-auto py-10 px-6"
        style={{ fontFamily: "kufi" }}
      >
        {/* Left-Aligned Heading and Description */}
        <div className="text-left mb-8">
          <h1 className="text-4xl font-bold">Industries</h1>
          <p className="mt-4 leading-relaxed text-2xl dark:text-gray-400">
            <span style={{ fontFamily: "Stellen" }}>TechVerse</span> has
            extensive experience in leveraging digital innovation to meet
            various industry-specific and cross-industry business needs.
            <br />
            Whether you manufacture goods, offer services, sell products, or
            support finance, we help optimize operations, cut costs, and impress
            customers with advanced digital solutions.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="p-6 shadow-lg transition-transform transform hover:scale-105 bg-[#e5e5e5] dark:bg-[#18181b]"
            >
              <CardHeader className="flex items-center gap-4 relative">
                {industry.icon}
                <h2 className="text-2xl font-bold relative">
                  {industry.title}
                  <div className="absolute left-0 bottom-0 w-1/2 h-1 bg-purple-600 rounded-lg"></div>{" "}
                  {/* Purple Bar */}
                </h2>
              </CardHeader>
              <CardBody>
                <p className="dark:text-gray-300">{industry.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
