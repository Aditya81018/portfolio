import Github from "@/components/ui/svgs/github";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";
import SKILLS, { Skill } from "./skills";

export interface Link {
  title: string;
  icon: ReactNode;
  url: string;
}

export interface Project {
  name: string;
  image: string;
  date: string;
  description: ReactNode;
  links: Link[];
  tags: Skill[];
}

const ExampleProject: Project = {
  name: "Example Project",
  image: "https://picsum.photos/200/300",
  date: "1st January, 2026",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  links: [
    {
      title: "Link",
      url: "#",
      icon: <ExternalLink />,
    },
  ],
  tags: [SKILLS.html, SKILLS.css, SKILLS.javascript],
};

const PROJECTS: { [key: string]: Project } = {
  pendulums: {
    name: "Pendulums",
    image: "pendulums.png",
    date: "12th March, 2025",
    description:
      "A simple web-based stacked pendulums simulation without any physics, made using JavaScript and HTML5 Canvas. The simulation provides several options to control the simulation",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/Aditya81018/pendulums",
        icon: <Github />,
      },
      {
        title: "Live Demo",
        url: "https://aditya81018.github.io/pendulums/",
        icon: <ExternalLink />,
      },
    ],
    tags: [
      SKILLS.html,
      SKILLS.css,
      SKILLS.javascript,
      SKILLS.html5canvas,
      SKILLS.simulaton,
    ],
  },

  baseShift: {
    name: "BaseShift",
    image: "base-shift.png",
    date: "31st August, 2025",
    description:
      "BaseShift is a React-based number system conversion app designed for Android. The app convert numbers into different number systems (like binary, octal, decimal & hexadecimal) in real-time and can perform operations like - addition, subtraction, multiplication and division on them.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/Aditya81018/BaseShift",
        icon: <Github />,
      },
    ],
    tags: [
      SKILLS.react,
      SKILLS.typescript,
      SKILLS.tailwind,
      SKILLS.shadcn,
      SKILLS.androidApp,
    ],
  },

  hangmanAi: {
    name: "Hangman AI",
    image: "hangman.png",
    date: "1st October, 2025",
    description:
      "A web-based hangman game but words and hints are AI generated based on user prompt. The website uses GenAI to generate a fresh batch of words. It also give prompts suggestions for most interesting gameplay based on user's prompt history and favorites list.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/Aditya81018/Hangman-AI",
        icon: <Github />,
      },
      {
        title: "Live Demo",
        icon: <ExternalLink />,
        url: "https://hangman-ai-81018.vercel.app/",
      },
    ],
    tags: [
      SKILLS.react,
      SKILLS.typescript,
      SKILLS.tailwind,
      SKILLS.shadcn,
      SKILLS.game,
      SKILLS.genAi,
    ],
  },
};

export default PROJECTS;
