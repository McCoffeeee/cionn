import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, Shield, Phone } from "lucide-react";

interface ServiceProviderCardProps {
  name: string;
  service: string;
  location: string;
  rating: number;
  reviewCount: number;
  verified?: boolean;
  available?: boolean;
  avatar?: string;
  hourlyRate?: string;
}

export default function ServiceProviderCard({
  name,
  service,
  location,
  rating,
  reviewCount,
  verified = false,
  available = true,
  avatar,
  hourlyRate,
}: ServiceProviderCardProps) {
  return (
    <Card className="hover-elevate active-elevate-2" data-testid="card-service-provider">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg" data-testid="text-provider-name">{name}</h3>
              {verified && (
                <Badge variant="secondary" className="text-xs" data-testid="badge-verified">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-2" data-testid="text-service-type">{service}</p>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-sm font-medium" data-testid="text-rating">{rating}</span>
                <span className="text-xs text-muted-foreground" data-testid="text-review-count">({reviewCount})</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span data-testid="text-location">{location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {hourlyRate && (
                <span className="font-semibold text-primary" data-testid="text-hourly-rate">€{hourlyRate}/hr</span>
              )}
              <div className="flex gap-2">
                <Badge variant={available ? "default" : "secondary"} className="text-xs" data-testid="badge-availability">
                  {available ? "Available" : "Busy"}
                </Badge>
                <Button size="sm" data-testid="button-contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
