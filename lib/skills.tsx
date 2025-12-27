import { AndroidIcon } from "@/components/ui/svgs/androidIcon";
import { CssOld } from "@/components/ui/svgs/cssOld";
import { Html5 } from "@/components/ui/svgs/html5";
import { Javascript } from "@/components/ui/svgs/javascript";
import ReactSVG from "@/components/ui/svgs/react";
import ShadcnUiSvg from "@/components/ui/svgs/shadcn-ui-svg";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Typescript } from "@/components/ui/svgs/typescript";
import { BrainCircuit, Gamepad, Hourglass, Image } from "lucide-react";
import { ReactNode } from "react";

export interface Skill {
  name: string;
  color: string;
  icon: ReactNode;
  experience: number;
  noOfProjects: number;
}

const SKILLS = {
  html: {
    name: "HTML",
    color: "#e34f26",
    icon: <Html5 />,
    experience: 0,
    noOfProjects: 0,
  },
  css: {
    name: "CSS",
    color: "#2965f1",
    icon: <CssOld />,
    experience: 0,
    noOfProjects: 0,
  },
  javascript: {
    name: "Javascript",
    color: "#f0db4f",
    icon: <Javascript />,
    experience: 0,
    noOfProjects: 0,
  },
  html5canvas: {
    name: "HTML5 Canvas",
    color: "#525b6f",
    // eslint-disable-next-line jsx-a11y/alt-text
    icon: <Image />,
    experience: 0,
    noOfProjects: 0,
  },
  simulaton: {
    name: "Simulation",
    color: "f0c227",
    icon: <Hourglass />,
    experience: 0,
    noOfProjects: 0,
  },
  react: {
    name: "React",
    color: "#58c4dc",
    icon: <ReactSVG />,
    experience: 0,
    noOfProjects: 0,
  },
  typescript: {
    name: "Typescript",
    color: "#3178c6",
    icon: <Typescript />,
    experience: 0,
    noOfProjects: 0,
  },
  tailwind: {
    name: "Tailwind",
    color: "#38bdf8",
    icon: <Tailwindcss />,
    experience: 0,
    noOfProjects: 0,
  },
  shadcn: {
    name: "Shadcn",
    color: "#ffffff",
    icon: <ShadcnUiSvg />,
    experience: 0,
    noOfProjects: 0,
  },

  androidApp: {
    name: "Android App",
    color: "#34a853",
    icon: <AndroidIcon />,
    experience: 0,
    noOfProjects: 0,
  },

  game: {
    name: "Game",
    color: "#40917c",
    icon: <Gamepad />,
    experience: 0,
    noOfProjects: 0,
  },

  genAi: {
    name: "GenAI",
    color: "#9341bc",
    icon: <BrainCircuit />,
    experience: 0,
    noOfProjects: 0,
  },
} satisfies Record<string, Skill>;

export default SKILLS;
