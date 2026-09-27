import { ReactTyped } from "react-typed";
import { subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ContactForm from "@/components/contactForm";

interface IndexPageProps {
  id?: string;
}

export default function IndexPage({ id }: IndexPageProps) {
  return (
    <DefaultLayout>
      <section
        id={id}
        className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10 py-8 md:py-12 px-6 md:px-12"
        style={{fontFamily: "kufi"}}
      >
        {/* Left Side Content */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="font-semibold text-2xl text-center">
            A Team Of Skilled Professionals Specializing In Building
          </h1>
          <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 py-2 bg-violet-500 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold rounded-md mt-4">
            <ReactTyped
              strings={[
                "Custom Enterprise Solutions",
                "Top Notch Quality Products",
                "High Performing Apps",
              ]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={1000}
              loop
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-violet-300 rounded-b-md"></div>
          </div>

          <div className={subtitle({ class: "mt-4 text-center text-black dark:text-gray-400" })}>
            We help businesses take off and scale up quickly with perfectly
            crafted and effective web experiences.
          </div>
        </div>

        {/* Right Side Contact Form */}
        <div className="md:w-1/3 flex justify-center p-4">
          <ContactForm />
        </div>
      </section>
    </DefaultLayout>
  );
}
