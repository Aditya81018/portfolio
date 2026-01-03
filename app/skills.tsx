import FancyText from "@/components/fancy-text";
import { Container, Row, Section, Spacer } from "@/components/layout";
import SkillCard from "@/components/skill-card";
import { H1 } from "@/components/typography";
import SKILLS from "@/lib/skills";

export default function SkillSection() {
  return (
    <Section id="skills" className="snap-center" fullScreen>
      <Container align="center">
        <H1>
          <FancyText>Skills</FancyText>
        </H1>
        <Spacer size="2xl" />
        <Row wrap justify="center" align="center">
          {Object.values(SKILLS).map((skill, key) => (
            <SkillCard skill={skill} key={key} />
          ))}
        </Row>
      </Container>
    </Section>
  );
}
