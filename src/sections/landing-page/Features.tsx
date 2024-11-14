"use client";

import Image from "next/image";
import ProductImage from "@/assets/product-image.png";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const Features = () => {
  return (
    <section className="pt-8 pb-20 md:pt-20 md:pb-0">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Features</div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <ContainerScroll>
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              <Image
                src={ProductImage}
                alt="hero"
                className="h-[310px] relative -top-3 left-0 object-cover w-full blur-[1px]"
                draggable={false}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="flex items-center justify-center w-20 h-20 bg-red-600 rounded-full shadow-lg hover:bg-red-700 focus:outline-none"
                  aria-label="Play YouTube Video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 text-white"
                  >
                    <path d="M10 15l5-3-5-3v6z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-8 10c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </ContainerScroll>

          <div className="lg:flex flex-row-reverse justify-between items-center">
            <div className="md:w-[535px]">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                See how Identity Management works firsthand
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Explore how Identity Management can support the needs of your
                modern enterprise. See why an intelligent, autonomous identity
                foundation makes a difference and how the flexibility of our
                product drives success.
              </p>
              {/* <div className="flex gap-1 items-center mt-[30px]">
              <DemoButton />
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
