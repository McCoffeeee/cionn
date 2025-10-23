import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function MapView() {
  return (
    <Card className="overflow-hidden h-[400px] relative" data-testid="map-view">
      <div className="absolute inset-0 bg-muted flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
          <p className="text-muted-foreground" data-testid="text-map-placeholder">
            Interactive Map View
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Service providers across Ireland
          </p>
        </div>
      </div>
      
      <div className="absolute top-4 left-4 right-4 flex gap-2 flex-wrap">
        <div className="bg-card rounded-md px-3 py-2 shadow-md hover-elevate active-elevate-2 cursor-pointer" data-testid="map-marker-1">
          <p className="text-xs font-medium">5 Electricians</p>
          <p className="text-xs text-muted-foreground">Dublin 2</p>
        </div>
        <div className="bg-card rounded-md px-3 py-2 shadow-md hover-elevate active-elevate-2 cursor-pointer" data-testid="map-marker-2">
          <p className="text-xs font-medium">3 Plumbers</p>
          <p className="text-xs text-muted-foreground">Cork City</p>
        </div>
        <div className="bg-card rounded-md px-3 py-2 shadow-md hover-elevate active-elevate-2 cursor-pointer" data-testid="map-marker-3">
          <p className="text-xs font-medium">7 Movers</p>
          <p className="text-xs text-muted-foreground">Galway</p>
        </div>
      </div>
    </Card>
  );
}
