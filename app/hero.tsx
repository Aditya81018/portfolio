import FancyText from "@/components/fancy-text";
import {
  Box,
  Center,
  Column,
  Container,
  Row,
  Section,
} from "@/components/layout";
import { H1, Paragraph } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { randomColor } from "@/lib/color";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    // Hero Section
    <Section fullScreen className="snap-center">
      <Container fullHeight align="center" justify="center">
        <Row justify="center" gap="xl" className="max-md:flex-col">
          <Column className="w-full">
            <H1 className="max-sm:text-center">
              Hey! I&apos;m a{" "}
              <span className="text-yellow-600 dark:text-yellow-300">
                Developer
              </span>{" "}
              <br />
              and I build <FancyText>STUFF</FancyText>
            </H1>
            <Paragraph className="max-sm:text-center">
              I&apos;m Aditya Jaiswal, currently in first year of CSE from SNU
              Kolkata, India. I love to explore different aspects of tech and I
              have worked on several types of projects. I am truly passionate
              about Robotics and my other interests are Fullstack Web/App
              Development, Games, Simulations, IoT and Designing.
              <br />
              <br />I love to see stuff I build{" "}
              <Highlighter action="underline" color={randomColor()}>
                move
              </Highlighter>{" "}
              and{" "}
              <Highlighter action="underline" color={randomColor()}>
                behave
              </Highlighter>{" "}
              on it&apos;s own!
            </Paragraph>
            <Row className="w-full max-w-sm">
              <a className="w-full" href="#projects">
                <Button size={"xl"}>View My Projects</Button>
              </a>
              <a className="w-full" href="#contacts">
                <Button size={"xl"} variant={"ghost"}>
                  Contact Me <ArrowRight />
                </Button>
              </a>
            </Row>
          </Column>
          <Box
            background="primary"
            padding="xl"
            rounded="md"
            aspect="video"
            fullWidth
          >
            <Center fullHeight fullWidth axis="both">
              Some Animation Here
            </Center>
          </Box>
        </Row>
      </Container>
    </Section>
  );
}
