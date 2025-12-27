import FancyText from "@/components/fancy-text";
import { Container, Section } from "@/components/layout";
import { H1 } from "@/components/typography";

export default function SkillSection() {
  return (
    <Section id="skills" className="snap-center" fullScreen>
      <Container align="center">
        <H1>
          <FancyText>Skills</FancyText>
        </H1>
      </Container>
    </Section>
  );
}
