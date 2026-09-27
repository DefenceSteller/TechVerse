import { useState } from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/modal";
import { Avatar } from "@heroui/avatar";
import { TechVerse } from "@/components/techVerse";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: { name: string; icon: string }[];
  images: string[];
  liveDemoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  images,
  liveDemoLink,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Function to show modal and set selected image
  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    onOpen();
  };

  // Handle image navigation
  const prevImage = () =>
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const nextImage = () =>
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <Card
      className="w-full max-w-5xl bg-[#e5e5e5] dark:bg-[#18181b] dark:text-white shadow-lg p-2 grid grid-cols-1 md:grid-cols-2"
      style={{ fontFamily: "kufi" }}
    >
      {/* Left Section: Project Info */}
      <CardBody>
        <CardHeader className="flex items-center gap-3 text-xl font-semibold">
          <Avatar
            className="border-small border-white/20 bg-black dark:bg-transparent"
            icon={<TechVerse className="text-white" />}
          />
          <span className="text-3xl"> {title} </span>
        </CardHeader>
        <p className="text-md mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="p-1 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className="flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-black"
              >
                <CardBody className="flex flex-row items-center gap-2">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-6 w-auto"
                  />
                  <span className="text-md font-semibold">{tech.name}</span>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CardBody>

      {/* Right Section: Images & Live Demo */}
      <CardBody className="flex flex-col items-center justify-between">
        {/* Images */}
        <div className="flex gap-2 mb-4 mt-10">
          {images.slice(0, 4).map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`img ${index + 1}`}
              className="w-24 h-24 rounded-md object-cover cursor-pointer"
              onClick={() => openImageModal(index)}
            />
          ))}
          {images.length > 4 && (
            <div className="w-24 h-24 bg-gray-700 rounded-md flex items-center justify-center text-gray-300">
              +{images.length - 4}
            </div>
          )}
        </div>

        {/* Live Demo Button */}
        <CardBody className="w-full flex justify-center mt-10">
          <Button
            as="a"
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2 text-2xl rounded-lg hover:bg-violet-800"
          >
            Live Demo
          </Button>
        </CardBody>
      </CardBody>

      {/*Image Modal for Swiping */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        className="bg-gray-900 text-white"
      >
        <ModalContent>
          <ModalHeader className="flex justify-between items-center">
            {/* <span>Image Preview</span> */}
          </ModalHeader>
          <ModalBody className="flex justify-center items-center relative">
            <button
              className="absolute left-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              onClick={prevImage}
            >
              <FaChevronLeft size={24} />
            </button>
            <img
              src={images[selectedImageIndex]}
              alt="Preview"
              className="max-w-full h-auto rounded-lg"
            />
            <button
              className="absolute right-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              onClick={nextImage}
            >
              <FaChevronRight size={24} />
            </button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Card>
  );
};
export default ProjectCard;
