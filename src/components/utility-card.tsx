import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export default function UtilityCard({
  title,
  description,
  imageSrc,
}: ProjectCardProps) {
  return (
    <Card className="w-96">
      <CardContent>
        <img className="w-96 h-64 rounded-xl" src={imageSrc} />
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
