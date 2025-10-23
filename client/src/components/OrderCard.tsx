import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";

interface OrderCardProps {
  orderId: string;
  itemName: string;
  price: string;
  status: "pending" | "shipped" | "delivered" | "completed";
  date: string;
  buyerName?: string;
  trackingNumber?: string;
}

export default function OrderCard({
  orderId,
  itemName,
  price,
  status,
  date,
  buyerName,
  trackingNumber,
}: OrderCardProps) {
  const statusConfig = {
    pending: { label: "Payment Pending", icon: Clock, variant: "secondary" as const },
    shipped: { label: "Shipped", icon: Truck, variant: "default" as const },
    delivered: { label: "Delivered", icon: Package, variant: "default" as const },
    completed: { label: "Completed", icon: CheckCircle, variant: "outline" as const },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card data-testid="card-order">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1" data-testid="text-order-id">Order #{orderId}</p>
            <h3 className="font-semibold text-lg" data-testid="text-item-name">{itemName}</h3>
            <p className="text-sm text-muted-foreground" data-testid="text-order-date">{date}</p>
          </div>
          <Badge variant={config.variant} data-testid="badge-order-status">
            <StatusIcon className="w-3 h-3 mr-1" />
            {config.label}
          </Badge>
        </div>

        {buyerName && (
          <p className="text-sm text-muted-foreground mb-2" data-testid="text-buyer-name">
            Buyer: {buyerName}
          </p>
        )}

        {trackingNumber && (
          <p className="text-sm text-muted-foreground mb-4" data-testid="text-tracking">
            Tracking: {trackingNumber}
          </p>
        )}

        <div className="flex items-center justify-between">
          <span className="font-bold text-lg" data-testid="text-order-price">€{price}</span>
          {status === "delivered" && (
            <Button size="sm" data-testid="button-confirm-delivery">Confirm Delivery</Button>
          )}
          {status === "pending" && (
            <Button size="sm" variant="outline" data-testid="button-add-tracking">Add Tracking</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
