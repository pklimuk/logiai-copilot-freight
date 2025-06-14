
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

const ValueCard = ({ icon: Icon, title, className = "" }: ValueCardProps) => {
  return (
    <div className={`value-card animate-fade-in ${className}`}>
      <Icon className="w-16 h-16 text-brand-green stroke-[2]" />
      <h3 className="text-brand-light text-xl font-normal leading-8 tracking-tight max-w-xs">
        {title}
      </h3>
    </div>
  );
};

export default ValueCard;
