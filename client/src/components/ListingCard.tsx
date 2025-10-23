import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Shield } from "lucide-react";

interface ListingCardProps {
  title: string;
  price: string;
  priceType?: "day" | "week" | "fixed";
  location: string;
  condition?: string;
  rating?: number;
  reviewCount?: number;
  verified?: boolean;
  imageUrl?: string;
}

export default function ListingCard({
  title,
  price,
  priceType = "fixed",
  location,
  condition,
  rating,
  reviewCount,
  verified = false,
  imageUrl,
}: ListingCardProps) {
  const priceLabel =
    priceType === "day" ? "/day" : priceType === "week" ? "/week" : "";

  return (
    <Card
      className="hover-elevate active-elevate-2 cursor-pointer overflow-hidden"
      data-testid="card-listing"
    >
      <div className="aspect-[4/3] bg-muted relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge
            className="bg-primary text-primary-foreground font-semibold"
            data-testid="badge-price"
          >
            €{price}
            {priceLabel}
          </Badge>
        </div>
        {verified && (
          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className="bg-card/90 backdrop-blur-sm"
              data-testid="badge-verified"
            >
              <Shield className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3
          className="font-semibold mb-2 line-clamp-2"
          data-testid="text-listing-title"
        >
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span data-testid="text-listing-location">{location}</span>
        </div>
        <div className="flex items-center justify-between">
          {condition && (
            <Badge
              variant="outline"
              className="text-xs"
              data-testid="badge-condition"
            >
              {condition}
            </Badge>
          )}
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium" data-testid="text-rating">
                {rating}
              </span>
              {reviewCount && (
                <span
                  className="text-xs text-muted-foreground"
                  data-testid="text-review-count"
                >
                  ({reviewCount})
                </span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
