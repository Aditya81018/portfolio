/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import FancyText from "@/components/fancy-text";
import { Container, Row, Section, Spacer } from "@/components/layout";
import ProjectCard from "@/components/project-card";
import { H1 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import PROJECTS, { Project } from "@/lib/projects";
import SKILLS, { Skill } from "@/lib/skills";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const originalProjectList = Object.values(PROJECTS);
  const [selectedTag, setSelectedTag] = useState<Skill[]>([]);
  const [projectsList, setProjectsList] =
    useState<Project[]>(originalProjectList);

  useEffect(() => {
    if (selectedTag.length === 0) return setProjectsList(originalProjectList);
    const filteredProjectList = originalProjectList.filter((project) => {
      let flag = true;
      selectedTag.forEach((tag) => {
        if (!project.tags.includes(tag)) flag = false;
      });
      return flag;
    });
    setProjectsList(filteredProjectList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTag]);

  return (
    <Section id="projects" className="snap-center" fullScreen>
      <Container fullHeight align="center">
        <H1>
          <FancyText>Projects</FancyText>
        </H1>
        <Spacer size="2xl" />
        <Row>
          {Object.values(SKILLS).map((tag, key) => (
            <Button
              key={key}
              size={"sm"}
              className="rounded-full"
              variant={selectedTag.includes(tag) ? "default" : "outline"}
              onClick={() =>
                setSelectedTag((val) =>
                  val.includes(tag)
                    ? val.filter((ele) => ele != tag)
                    : [...val, tag],
                )
              }
            >
              {tag.name}
            </Button>
          ))}
        </Row>
        <Spacer size="md" />
        <Row
          gap="md"
          justify="start"
          fullWidth
          fullHeight
          className="overflow-x-auto p-4 no-scrollbar scroll-smooth snap-x"
        >
          {projectsList.map((project, key) => (
            <ProjectCard project={project} key={key} className="snap-center" />
          ))}
        </Row>
      </Container>
    </Section>
  );
}
