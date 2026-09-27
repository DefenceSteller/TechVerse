import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { GrTechnology } from "react-icons/gr";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  // Smooth scrolling function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroUINavbar className="shadow-lg !static" maxWidth="xl" >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <button
            className="flex justify-start items-center gap-1"
            onClick={() => scrollToSection("home")} // Scroll to home on logo click
          >
            <GrTechnology size={40} />
            <p className="text-inherit text-4xl mt-2" style={{ fontFamily: "Stellen" }}>
              TechVerse
            </p>
          </button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <div className="hidden lg:flex gap-4 justify-end ml-2 mt-1">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <button
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium text-2xl hover:text-violet-500"
                )}
                onClick={() => scrollToSection(item.href.replace("#", ""))} // Extract ID from href
                style={{ fontFamily: "Kufi" }}
              >
                {item.label}
              </button>
            </NavbarItem>
          ))}
        </div>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2" style={{ fontFamily: "Kufi" }}>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <button onClick={() => scrollToSection(item.href.replace("#", ""))} className="text-lg">
                {item.label}
              </button>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
