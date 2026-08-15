import {
  Bug,
  Bird,
  PawPrint,
  Scissors,
  Apple,
  Trees,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bug,
  Bird,
  PawPrint,
  Scissors,
  Apple,
  Trees,
  HeartHandshake,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? PawPrint;
  return <Icon className={className} />;
}
