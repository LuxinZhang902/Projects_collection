import Link from "next/link";
import Image from "next/image";

import { motion, Variants } from "framer-motion";

import { Project } from "./Project";

interface ProjectCardProps {
  id: string;
  project: Project;
}

// From Framer example
const cardVariants: Variants = {
  offscreen: {
    y: 300,
    // opacity: 0,
  },
  onscreen: {
    y: 1,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      id="outer_wrapper"
    >
      <motion.div className="w-72 h-72 lg:w-80 lg:h-80" variants={cardVariants}>
        <Link href={`/projects/${encodeURIComponent(props.id)}`}>
          <div className="absolute bg-emerald-200 transition flex flex-col justify-center items-center opacity-0 hover:opacity-90 z-10 w-full h-full p-5 text-center">
            {props.project.description}
          </div>
          <div className="relative w-full h-full">
            <Image
              src={props.project.imagePath}
              alt="Picture"
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="288px"
              className="h-full"
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
