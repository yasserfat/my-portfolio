"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       I am third year student at{" "}
        <span className="font-medium">
          the National Institute of Electrical Engineering and Electronics (IGEE
          ex INELEC) in Boumerdes, Algeria
        </span>
        , bring one year of practical experience in{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js, Firebase</span>. I am
        also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for purshing{" "}
        <span className="font-semibold">
          {" "}
          a master degree in computer engineering.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and reading books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">App development </span>.
        
      </p>
    </motion.section>
  );
}
