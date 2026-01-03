import { Center, Column, Row } from "./layout";
import { Card } from "./ui/card";
import { Skill } from "@/lib/skills";
import { Small, Text } from "./typography";

export interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="px-4" style={{ zoom: 0.8 }}>
      <Row gap="md" align="center">
        <Center className="h-8 w-8">{skill.icon}</Center>
        <Column gap="none">
          <Text>{skill.name}</Text>
          <Row gap="sm">
            <Small>{skill.experience}y exp.</Small>
            <Small>{skill.noOfProjects} projects</Small>
          </Row>
        </Column>
      </Row>
    </Card>
  );
}
