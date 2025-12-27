"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Box, Column, Row } from "./layout";
import { H3, Paragraph, Small } from "./typography";

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const { name, description, date, image, links, tags } = project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("w-fit", className)}
    >
      <Card className="group relative h-full w-xs overflow-hidden pt-0 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        <Box aspect="video">
          <motion.img
            src={image}
            alt={name}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {links.map((link, key) => (
              <motion.a
                target="_blank"
                key={key}
                href={link.url}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg shadow-primary/25 backdrop-blur-md"
                title={link.title}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </Box>

        <Column gap="xs" className="px-4">
          <H3 className="transition-colors group-hover:text-primary">{name}</H3>
          <Small color="muted" className="mb-2">
            {date}
          </Small>
          <Paragraph size="sm" color="muted">
            {description}
          </Paragraph>
          <Row gap="sm" wrap className="mt-2 overflow-x-auto">
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                style={{ color: tag.color }}
                className="bg-secondary/50 px-2 py-0.5 text-xs font-normal hover:bg-secondary"
              >
                {tag.name}
              </Badge>
            ))}
          </Row>
        </Column>
      </Card>
    </motion.div>
  );
}
