import Header from "@/components/Header";
import ProfileStats from "@/components/ProfileStats";
import OrderCard from "@/components/OrderCard";
import ListingCard from "@/components/ListingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Edit, Plus } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarFallback>PO</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold mb-1" data-testid="text-user-name">Paddy O'Connell</h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-medium" data-testid="text-user-rating">4.8</span>
                  <span className="text-sm text-muted-foreground" data-testid="text-review-count">(142 reviews)</span>
                </div>
                <Badge variant="secondary" data-testid="badge-verified">Verified Seller</Badge>
              </div>
            </div>
          </div>
          <Button data-testid="button-edit-profile">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <ProfileStats />

        <div className="mt-8">
          <Tabs defaultValue="listings" className="w-full">
            <TabsList>
              <TabsTrigger value="listings" data-testid="tab-listings">Active Listings</TabsTrigger>
              <TabsTrigger value="orders" data-testid="tab-orders">Orders</TabsTrigger>
              <TabsTrigger value="purchases" data-testid="tab-purchases">Purchases</TabsTrigger>
            </TabsList>
            
            <TabsContent value="listings" className="mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold" data-testid="text-listings-heading">My Listings</h2>
                <Button data-testid="button-create-listing">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Listing
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ListingCard
                  title="Professional Canon EOS R5 Camera"
                  price="45"
                  priceType="day"
                  location="Dublin 2"
                  condition="Excellent"
                  rating={4.8}
                  reviewCount={24}
                  verified={true}
                  imageUrl="./src/images/r5.jpg"
                />
                <ListingCard
                  title="DJ Equipment Setup with Mixer"
                  price="80"
                  priceType="day"
                  location="Galway"
                  condition="Like New"
                  verified={true}                    
                  imageUrl="./src/images/decks.jpg"
                />
                <ListingCard
                  title="Camping Tent - 4 Person"
                  price="25"
                  priceType="day"
                  location="Cork"
                  condition="Good"
                  rating={4.5}
                  reviewCount={12}
                  imageUrl="./src/images/tent.jpg"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="orders" className="mt-6">
              <h2 className="text-2xl font-bold mb-6" data-testid="text-orders-heading">Sales & Orders</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <OrderCard
                  orderId="12345"
                  itemName="Canon EOS R5 Camera Rental"
                  price="135"
                  status="completed"
                  date="Jan 15, 2024"
                  buyerName="John Murphy"
                />
                <OrderCard
                  orderId="12346"
                  itemName="MacBook Pro 16-inch"
                  price="1,200"
                  status="delivered"
                  date="Jan 18, 2024"
                  buyerName="Sarah O'Connor"
                  trackingNumber="IE123456789"
                />
                <OrderCard
                  orderId="12347"
                  itemName="DJ Equipment Setup"
                  price="240"
                  status="shipped"
                  date="Jan 20, 2024"
                  buyerName="Michael Ryan"
                  trackingNumber="IE987654321"
                />
                <OrderCard
                  orderId="12348"
                  itemName="Camping Tent 4-Person"
                  price="75"
                  status="pending"
                  date="Jan 22, 2024"
                  buyerName="Emma Walsh"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="purchases" className="mt-6">
              <h2 className="text-2xl font-bold mb-6" data-testid="text-purchases-heading">My Purchases</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <OrderCard
                  orderId="98765"
                  itemName="iPhone 14 Pro Max"
                  price="850"
                  status="completed"
                  date="Jan 10, 2024"
                />
                <OrderCard
                  orderId="98764"
                  itemName="Gaming Chair"
                  price="300"
                  status="delivered"
                  date="Jan 12, 2024"
                  trackingNumber="IE555666777"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
