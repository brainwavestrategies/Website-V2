import mainLogo from "@/assets/main-logo.svg";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

const NavBarSection = () => {
  return (
    <header className="bg-color4/60 backdrop-blur-lg fixed top-0 z-50 px-4 md:px-20 w-full">
      <div className="w-full flex justify-between items-center rounded-b-2xl">
        <a
          href="#"
          className="flex items-center font-semibold text-color5 gap-4 py-3 text-2xl md:text-3xl leading-none font-poppins"
        >
          <img src={mainLogo} alt="main logo" className="w-10 h-10" />
          <div>
            <span className="text-color5">ENSHIFT</span>{" "}
            <span className="text-xl md:text-3xl text-color1">Digital</span>
          </div>
        </a>
        <div className="block md:hidden">
          <Drawer>
            <DrawerTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <g
                  id="SVGRepo_iconCarrier"
                  stroke="#1C274C"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="M20 7H4M20 12H4M20 17H4"></path>
                </g>
              </svg>
            </DrawerTrigger>
            <DrawerContent>
              <a href="#">
                <DrawerClose className="text-xl w-full px-8 py-8">
                  Home
                </DrawerClose>
              </a>
              <Separator className="bg-gray-200 w-full mx-auto" />
              <a href="#ourServices">
                <DrawerClose className="text-xl w-full px-8 py-8">
                  Our Services
                </DrawerClose>
              </a>
              <Separator className="bg-gray-200 w-full mx-auto" />
              <a href="#ourProcess">
                <DrawerClose className="text-xl w-full px-8 py-8">
                  Our Process
                </DrawerClose>
              </a>
              <Separator className="bg-gray-200 w-full mx-auto" />
              <a href="#whyUs">
                <DrawerClose className="text-xl w-full px-8 py-8">
                  Why Us
                </DrawerClose>
              </a>
              <Separator className="bg-gray-200 w-full mx-auto" />
              <a href="#contactUs">
                <DrawerClose className="text-xl w-full px-8 py-8">
                  Contact Us
                </DrawerClose>
              </a>
            </DrawerContent>
          </Drawer>
        </div>
        <ul className="hidden md:flex h-full items-center font-lexend gap-4">
          <a
            href="#"
            className="relative text-lg font-light h-full flex items-center justify-center group px-6 py-1"
          >
            <div className="absolute bg-color3/60 rounded-sm h-full w-0 group-hover:w-full duration-200"></div>
            <span className="z-10">Home</span>
          </a>
          <a
            href="#ourServices"
            className="relative text-lg font-light h-full flex items-center justify-center group px-6 py-1"
          >
            <div className="absolute bg-color3/60 rounded-sm h-full w-0 group-hover:w-full duration-200"></div>
            <span className="z-10">Our Services</span>
          </a>
          <a
            href="#ourProcess"
            className="relative text-lg font-light h-full flex items-center justify-center group px-6 py-1"
          >
            <div className="absolute bg-color3/60 rounded-sm h-full w-0 group-hover:w-full duration-200"></div>
            <span className="z-10">Our Process</span>
          </a>
          <a
            href="#whyUs"
            className="relative text-lg font-light h-full flex items-center justify-center group px-6 py-1"
          >
            <div className="absolute bg-color3/60 rounded-sm h-full w-0 group-hover:w-full duration-200"></div>
            <span className="z-10">Why Us</span>
          </a>
          <a
            href="#contactUs"
            className="relative text-lg font-light h-full flex items-center justify-center group px-6 py-1"
          >
            <div className="absolute bg-color3/60 rounded-sm h-full w-0 group-hover:w-full duration-200"></div>
            <span className="z-10">Contact Us</span>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default NavBarSection;
