import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFGG9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} height={40} width={40} alt="logo" className="relative" />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Updates</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialLinkedIn />
          <SocialInsta />
        </div>
        <p className="mt-6">&copy; 2024 Identity Management, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
