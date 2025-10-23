import CategoryCard from '../CategoryCard';
import { Camera, Package, Wrench, Briefcase } from 'lucide-react';

export default function CategoryCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <CategoryCard
        title="Rentals"
        description="Rent cameras, equipment, tools"
        icon={Camera}
        count="1,234"
      />
      <CategoryCard
        title="For Sale"
        description="Buy and sell items locally"
        icon={Package}
        count="5,678"
      />
      <CategoryCard
        title="Services"
        description="Find local professionals"
        icon={Wrench}
        count="892"
      />
      <CategoryCard
        title="Jobs"
        description="Gigs and full-time positions"
        icon={Briefcase}
        count="456"
      />
    </div>
  );
}
