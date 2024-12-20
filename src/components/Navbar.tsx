import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { DemoButton } from "@/components";

export const Navbar = () => {
  return (
    <header className="bg-white lg:bg-transparent sticky top-0 backdrop-blur-[5px] z-20">
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {/* <a>About</a>
              <a>Features</a>
              <a>Updates</a> */}
              <DemoButton />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
