import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count: string;
  color?: string;
}

export default function CategoryCard({ title, description, icon: Icon, count, color = "bg-primary" }: CategoryCardProps) {
  return (
    <Card className="hover-elevate active-elevate-2 cursor-pointer transition-all" data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`${color} rounded-md p-3 flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1" data-testid="text-category-title">{title}</h3>
            <p className="text-sm text-muted-foreground mb-2" data-testid="text-category-description">{description}</p>
            <p className="text-xs text-muted-foreground" data-testid="text-category-count">{count} active listings</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
