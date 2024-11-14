"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

const testimonials = [
  {
    text: "This platform has drastically improved our organization's access security while simplifying management processes.",
    imageSrc: avatar1.src,
    name: "Alex Johnson",
    username: "@alexjohnson",
  },
  {
    text: "Implementing role-based access control was seamless and has strengthened our data protection efforts.",
    imageSrc: avatar2.src,
    name: "Morgan Riley",
    username: "@morganriley",
  },
  {
    text: "The centralized dashboard provides unparalleled visibility into our team's access and activity logs.",
    imageSrc: avatar3.src,
    name: "Jordan White",
    username: "@jwhite",
  },
  {
    text: "Identity lifecycle automation has saved us countless hours, allowing us to focus on strategic initiatives.",
    imageSrc: avatar4.src,
    name: "Taylor Brooks",
    username: "@taylorbrooks",
  },
  {
    text: "We appreciate the ease of integrating the platform with our existing systems and applications.",
    imageSrc: avatar5.src,
    name: "Chris Park",
    username: "@chrispark",
  },
  {
    text: "Adopting this tool has enhanced compliance and given us confidence in meeting regulatory standards.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith",
  },
  {
    text: "The intuitive interface makes managing complex identity scenarios straightforward and efficient.",
    imageSrc: avatar7.src,
    name: "Jamie Clark",
    username: "@jamieclark",
  },
  {
    text: "With this platform, we can quickly onboard and offboard employees, reducing security risks.",
    imageSrc: avatar8.src,
    name: "Patricia Moore",
    username: "@patriciamoore",
  },
  {
    text: "Its robust reporting features provide deep insights and analytics we need for effective decision-making.",
    imageSrc: avatar9.src,
    name: "Sam Green",
    username: "@samgreen",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialCard = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={username}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  width={40}
                  height={40}
                  alt={name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag mt-16">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">
            Client feedback from our demo
          </h2>
          <p className="section-description mt-5">
            Learn how our comprehensive identity management solutions empower
            organizations and ensure security and compliance.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialCard testimonials={firstColumn} duration={15} />
          <TestimonialCard
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialCard
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
