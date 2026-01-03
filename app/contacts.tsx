"use client";
import {
  Box,
  Column,
  Container,
  Row,
  Section,
  Spacer,
} from "@/components/layout";
import { H1, H3, Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { Input } from "@/components/ui/input";
import Github from "@/components/ui/svgs/github";
import { Textarea } from "@/components/ui/textarea";
import { randomColor } from "@/lib/color";
import { AtSign } from "lucide-react";

export default function ContactsSection() {
  return (
    <Section id="contacts" className="snap-center" fullScreen>
      <Container fullHeight align="center" justify="center">
        <H3>
          Open for{" "}
          <Highlighter
            action="underline"
            color={randomColor()}
            className="text-yellow-600 dark:text-yellow-300"
          >
            Collaboration
          </Highlighter>
          !
        </H3>
        <Spacer size="xs" />
        <H1>Let&apos;s build cool stuff together</H1>
        <Spacer size="2xl" />
        <Container size="md" gap="md">
          <Row gap="md">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
          </Row>
          <Textarea placeholder="Message..." className="h-32" />
          <Button>Submit</Button>
        </Container>
        <Spacer size="2xl" />
        <Column align="center" gap="sm">
          <a href="https://github.com/Aditya81018">
            <Row align="center" gap="sm">
              <Box className="w-6">
                <Github />
              </Box>
              <Text>Aditya81018</Text>
            </Row>
          </a>
          <Row
            align="center"
            gap="sm"
            onClick={() =>
              navigator.clipboard.writeText("aditya.jaiswal.81018@gmail.com")
            }
            className="cursor-pointer"
          >
            <AtSign />
            <Text>aditya.jaiswal.81018@gmail.com</Text>
          </Row>
        </Column>
      </Container>
    </Section>
  );
}
