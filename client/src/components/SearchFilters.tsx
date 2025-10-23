import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  X, 
  ChevronDown, 
  Smartphone, 
  Camera, 
  Headphones, 
  Tv,
  Home,
  Sofa,
  Zap,
  Shirt,
  Dumbbell,
  Bike,
  Wrench,
  Paintbrush,
  Book,
  Gamepad2,
  Baby,
  Music
} from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  subcategories: { id: string; name: string }[];
}

const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    subcategories: [
      { id: "photo-video", name: "Photo & Video" },
      { id: "audio-equipment", name: "Audio Equipment" },
      { id: "computers", name: "Computers & Tablets" },
      { id: "phones", name: "Mobile Phones" },
      { id: "tv-home-cinema", name: "TV & Home Cinema" },
      { id: "gaming", name: "Gaming Consoles" },
    ],
  },
  {
    id: "home",
    name: "Home & Garden",
    icon: Home,
    subcategories: [
      { id: "furniture", name: "Furniture" },
      { id: "appliances", name: "Appliances" },
      { id: "kitchen", name: "Kitchen & Dining" },
      { id: "home-decor", name: "Home Decor" },
      { id: "garden", name: "Garden & Outdoor" },
      { id: "diy", name: "DIY & Tools" },
    ],
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    icon: Dumbbell,
    subcategories: [
      { id: "camping", name: "Camping & Hiking" },
      { id: "cycling", name: "Cycling" },
      { id: "fitness", name: "Fitness Equipment" },
      { id: "water-sports", name: "Water Sports" },
      { id: "team-sports", name: "Team Sports" },
    ],
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    subcategories: [
      { id: "mens-clothing", name: "Men's Clothing" },
      { id: "womens-clothing", name: "Women's Clothing" },
      { id: "shoes", name: "Shoes" },
      { id: "accessories", name: "Accessories" },
      { id: "jewelry", name: "Jewelry & Watches" },
    ],
  },
  {
    id: "music",
    name: "Musical Instruments",
    icon: Music,
    subcategories: [
      { id: "dj-equipment", name: "DJ Equipment" },
      { id: "guitars", name: "Guitars" },
      { id: "keyboards", name: "Keyboards & Pianos" },
      { id: "drums", name: "Drums & Percussion" },
      { id: "studio-equipment", name: "Studio Equipment" },
    ],
  },
  {
    id: "vehicles",
    name: "Vehicles & Parts",
    icon: Bike,
    subcategories: [
      { id: "cars", name: "Cars" },
      { id: "motorcycles", name: "Motorcycles" },
      { id: "parts", name: "Parts & Accessories" },
      { id: "bicycles", name: "Bicycles" },
    ],
  },
  {
    id: "books",
    name: "Books & Media",
    icon: Book,
    subcategories: [
      { id: "books", name: "Books" },
      { id: "magazines", name: "Magazines" },
      { id: "movies", name: "Movies & TV" },
      { id: "music-media", name: "Music CDs & Vinyl" },
    ],
  },
  {
    id: "baby",
    name: "Baby & Kids",
    icon: Baby,
    subcategories: [
      { id: "baby-gear", name: "Baby Gear" },
      { id: "toys", name: "Toys & Games" },
      { id: "kids-clothing", name: "Kids Clothing" },
      { id: "nursery", name: "Nursery Furniture" },
    ],
  },
];

interface SearchFiltersProps {
  type?: "rentals" | "for-sale";
}

export default function SearchFilters({ type = "rentals" }: SearchFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCondition("all");
    setExpandedCategories([]);
    setSelectedSubcategories([]);
    console.log("Filters cleared");
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleSubcategory = (subcategoryId: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategoryId)
        ? prev.filter((id) => id !== subcategoryId)
        : [...prev, subcategoryId]
    );
    console.log("Toggled subcategory:", subcategoryId);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold" data-testid="text-filters-title">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters} data-testid="button-clear-filters">
          <X className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-3 block" data-testid="text-categories-label">Categories</label>
          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategories.includes(category.id);
              
              return (
                <Collapsible
                  key={category.id}
                  open={isExpanded}
                  onOpenChange={() => toggleCategory(category.id)}
                >
                  <CollapsibleTrigger className="w-full" data-testid={`category-${category.id}`}>
                    <div className="flex items-center justify-between w-full p-2 rounded-md hover-elevate active-elevate-2 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 pt-2 space-y-2">
                    {category.subcategories.map((sub) => (
                      <div
                        key={sub.id}
                        className="flex items-center gap-2 py-1"
                        data-testid={`subcategory-${sub.id}`}
                      >
                        <Checkbox
                          id={sub.id}
                          checked={selectedSubcategories.includes(sub.id)}
                          onCheckedChange={() => toggleSubcategory(sub.id)}
                        />
                        <label
                          htmlFor={sub.id}
                          className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                        >
                          {sub.name}
                        </label>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <label className="text-sm font-medium mb-2 block" data-testid="text-condition-label">Condition</label>
          <Select value={selectedCondition} onValueChange={setSelectedCondition}>
            <SelectTrigger data-testid="select-condition">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Condition</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="like-new">Like New</SelectItem>
              <SelectItem value="excellent">Excellent</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="border-t border-border pt-4">
          <label className="text-sm font-medium mb-3 block" data-testid="text-price-label">
            Price Range: €{priceRange[0]} - €{priceRange[1]}
            {type === "rentals" && <span className="text-muted-foreground text-xs ml-1">/day</span>}
          </label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000}
            step={10}
            className="mb-2"
            data-testid="slider-price-range"
          />
        </div>

        <div className="border-t border-border pt-4">
          <label className="text-sm font-medium mb-2 block" data-testid="text-quick-filters-label">Quick Filters</label>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover-elevate active-elevate-2" data-testid="badge-filter-verified">
              Verified Only
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover-elevate active-elevate-2" data-testid="badge-filter-available">
              Available Now
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover-elevate active-elevate-2" data-testid="badge-filter-nearby">
              Nearby
            </Badge>
          </div>
        </div>
      </div>

      <Button className="w-full" data-testid="button-apply-filters">Apply Filters</Button>
    </div>
  );
}
