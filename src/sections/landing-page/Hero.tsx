import { DemoButton, Orbit, LearnMore } from "@/components";
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
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

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-20 md:pb-30 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-[508px]">
            {/* <div className="tag">
              Version 2.0 is here
            </div> */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Empower Secure Identity
            </h1>
            <p className="text-xl text-[#010DE3] tracking-tight mt-6">
              Securely manage and govern user identities with solutions that
              ensure compliance, improve security, and streamline access across
              your organization.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <DemoButton />
              <LearnMore />
            </div>
          </div>

          <div className="flex justify-center mt-16 lg:mt-0">
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
                  transition={{ duration: 40, repeat: Infinity }}
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
                    transition={{ duration: 40, repeat: Infinity }}
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

          {/* <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="hero"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              height={220}
              width={220}
              alt="cylinder-image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              width={220}
              height={220}
              alt="noodle-image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
