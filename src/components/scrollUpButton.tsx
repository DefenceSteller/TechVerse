import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { TiArrowUpThick } from "react-icons/ti";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          isIconOnly
          className=" bg-violet-700 text-white shadow-lg hover:bg-violet-700 transition-all"
          radius="lg"
          variant="solid"
          size="lg"
        >
          <TiArrowUpThick className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default ScrollUpButton;
