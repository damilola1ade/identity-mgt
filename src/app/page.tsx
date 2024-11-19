'use client'

import {
  CallToAction,
  Features,
  Hero,
  LogoTicker,
  ProductShowcase,
  Testimonials,
} from "@/sections/landing-page";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      {/* <Testimonials /> */}
      <CallToAction />
    </>
  );
}
