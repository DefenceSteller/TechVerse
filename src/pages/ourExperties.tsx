import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody } from "@heroui/card";
import { FaPython } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";

const technologies = [
  { name: "Angular Js", icon: "/icons/angular.svg" },
  { name: "React Js", icon: "/icons/react.svg" },
  { name: "Node Js", icon: "/icons/nodejs.svg" },
  { name: "Express Js", icon: "/icons/express.svg" },
  { name: "Vue", icon: "/icons/vue.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Next Js", icon: "/icons/next.svg" },
  { name: "Nest Js", icon: "/icons/nest.svg" },
  { name: "Electron", icon: "/icons/electron.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Python", icon: FaPython },
  { name: "selenium", icon: "/icons/selenium.svg" },
  { name: "BeautifulSoup"},
  { name: "Saas", icon: "/icons/saas.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "MySQL", icon: TbBrandMysql },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "Stripe", icon: "/icons/stripe.svg" },
];

interface OurExpertiesPageProps {
  id?: string;
}

export default function OurExpertiesPage({ id }: OurExpertiesPageProps) {
  return (
    <DefaultLayout>
      <section id={id}
        className="flex flex-col items-center justify-center gap-6 py-8 md:py-12"
        style={{ fontFamily: "kufi" }}
      >
        <div className="text-center">
          <h1 className={title()}>Technology Expertises</h1>
          <p className="dark:text-gray-500">
            Leverage our technology skills to accelerate your business
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="flex items-center justify-center shadow-lg p-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-black bg-[#e5e5e5] dark:bg-[#18181b]"
            >
              <CardBody className="flex flex-row items-center gap-2">
                {tech.icon ? (
                  typeof tech.icon === "string" ? (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-6 w-auto"
                    />
                  ) : (
                    <tech.icon className="h-6 w-6" />
                  )
                ) : null}
                <span className="text-md font-semibold">{tech.name}</span>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
