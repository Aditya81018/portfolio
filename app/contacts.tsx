import FancyText from "@/components/fancy-text";
import { Container, Section } from "@/components/layout";
import { H1 } from "@/components/typography";

export default function ContactsSection() {
  return (
    <Section id="contacts" className="snap-center" fullScreen>
      <Container fullHeight align="center">
        <H1>
          <FancyText>Contacts</FancyText>
        </H1>
      </Container>
    </Section>
  );
}
