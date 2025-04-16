import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import NamesList from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonial";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CodeHub Education",
};

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <Companies />
      <NamesList />
      <Mentor />
      <Testimonial />
    </main>
  );
}
