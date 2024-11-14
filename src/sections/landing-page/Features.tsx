"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import { DemoButton, Orbit } from "@/components";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import slackLogo from "@/assets/slack-logo.png";
import dockerLogo from "@/assets/docker-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import githubLogo from "@/assets/github-logo.png";
import vsCodeLogo from "@/assets/vs-code-logo.png";
import notionLogo from "@/assets/notion-logo.png";
import jiraLogo from "@/assets/jira-logo.png";
import gcpLogo from "@/assets/gcp-logo.png";

import { motion } from "framer-motion";

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section className="pt-8 pb-20 md:pt-20 md:pb-40">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Features</div>
        </div>
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

          <div className="flex justify-center mt-16">
            <div className="size-[250px] md:size-[420px] relative">
              {/* Increased size only for md and up */}
              <div className="absolute inset-0">
                <Orbit className="size-full" />{" "}
                {/* Outer Orbit remains full size */}
              </div>
              <div className="absolute-center">
                <Orbit className="size-[180px] md:size-[250px]" />{" "}
                {/* Increased inner Orbit size for md and up */}
              </div>
              <div className="absolute-center">
                <Image
                  src={Logo}
                  width={100} // Default width for mobile
                  height={100} // Default height for mobile
                  alt="logo"
                  className="size-16 md:size-24" // Increased size for md and up
                />
              </div>
              {logos.map(({ src, alt, rotate }) => (
                <motion.div
                  className="absolute inset-0"
                  initial={{ rotate: rotate }}
                  animate={{
                    rotate: [
                      rotate,
                      rotate + 45,
                      rotate + 45,
                      rotate + 90,
                      rotate + 90,
                      rotate + 135,
                      rotate + 135,
                      rotate + 180,
                      rotate + 180,
                      rotate + 225,
                      rotate + 225,
                      rotate + 270,
                      rotate + 270,
                      rotate + 315,
                      rotate + 315,
                      rotate + 360,
                      rotate + 360,
                    ],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                  key={alt}
                >
                  <motion.div
                    className="inline-flex size-8 md:size-14 items-center justify-center border-blue-300 rounded-lg absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-0 bg-gray-950"
                    initial={{
                      translate: "-50% -50%",
                      rotate: -rotate,
                    }}
                    animate={{
                      rotate: [
                        -rotate,
                        -rotate - 45,
                        -rotate - 45,
                        -rotate - 90,
                        -rotate - 90,
                        -rotate - 135,
                        -rotate - 135,
                        -rotate - 180,
                        -rotate - 180,
                        -rotate - 225,
                        -rotate - 225,
                        -rotate - 270,
                        -rotate - 270,
                        -rotate - 315,
                        -rotate - 315,
                        -rotate - 360,
                        -rotate - 360,
                      ],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                  >
                    <Image
                      src={src}
                      width={50} // Default width for mobile
                      height={50} // Default height for mobile
                      alt={alt}
                      className="size-5 md:size-8" // Increased size for md and up
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
