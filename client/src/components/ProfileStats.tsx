import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, DollarSign, Star, Package } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 rounded-md p-3 text-primary">
            {icon}
          </div>
          <div>
            <p className="text-sm text-muted-foreground" data-testid={`text-stat-label-${label.toLowerCase().replace(/\s+/g, '-')}`}>{label}</p>
            <p className="text-2xl font-bold" data-testid={`text-stat-value-${label.toLowerCase().replace(/\s+/g, '-')}`}>{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={<Package className="w-6 h-6" />}
        label="Active Listings"
        value="12"
      />
      <StatCard
        icon={<ShoppingBag className="w-6 h-6" />}
        label="Total Sales"
        value="€4,280"
      />
      <StatCard
        icon={<Star className="w-6 h-6" />}
        label="Rating"
        value="4.8"
      />
      <StatCard
        icon={<DollarSign className="w-6 h-6" />}
        label="This Month"
        value="€890"
      />
    </div>
  );
}
