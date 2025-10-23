import Header from "@/components/Header";
import ListingCard from "@/components/ListingCard";
import SearchFilters from "@/components/SearchFilters";
import ServiceProviderCard from "@/components/ServiceProviderCard";
import MapView from "@/components/MapView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8" data-testid="text-page-title">
          Marketplace
        </h1>

        <Tabs defaultValue="rentals" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="rentals" data-testid="tab-rentals">
              Rentals
            </TabsTrigger>
            <TabsTrigger value="for-sale" data-testid="tab-for-sale">
              For Sale
            </TabsTrigger>
            <TabsTrigger value="services" data-testid="tab-services">
              Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rentals" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-4">
                    <SearchFilters type="rentals" />
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    title="Camping Tent - 4 Person"
                    price="25"
                    priceType="day"
                    location="Cork"
                    condition="Good"
                    rating={4.5}
                    reviewCount={12}
                    imageUrl="./src/images/tent.jpg"
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
                    title="Professional Gaming PC Rental"
                    price="60"
                    priceType="day"
                    location="Dublin 4"
                    condition="Excellent"
                    rating={4.7}
                    reviewCount={18}
                    imageUrl="./src/images/gaming_pc.jpg"
                  />
                  <ListingCard
                    title="Mountain Bike - Full Suspension"
                    price="20"
                    priceType="day"
                    location="Waterford"
                    condition="Good"
                    rating={4.6}
                    reviewCount={9}
                    imageUrl="./src/images/bike.jpg"
                  />
                  <ListingCard
                    title="Portable PA System"
                    price="35"
                    priceType="day"
                    location="Kilkenny"
                    condition="Like New"
                    verified={true}
                    imageUrl="./src/images/paspeaker.jpg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="for-sale" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-4">
                    <SearchFilters type="for-sale" />
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ListingCard
                    title="MacBook Pro 16-inch M1"
                    price="1,200"
                    location="Limerick"
                    condition="Excellent"
                    rating={4.9}
                    reviewCount={8}
                    imageUrl="./src/images/macbook.jpg"
                  />
                  <ListingCard
                    title="iPhone 14 Pro Max 256GB"
                    price="850"
                    location="Dublin 1"
                    condition="Like New"
                    verified={true}
                    imageUrl="./src/images/iphone.jpg"
                  />
                  <ListingCard
                    title="Gaming Chair - Herman Miller"
                    price="300"
                    location="Cork"
                    condition="Good"
                    rating={4.5}
                    reviewCount={6}
                    imageUrl="./src/images/chair.jpg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <MapView />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <ServiceProviderCard
                name="Seamus O'Brien"
                service="Licensed Electrician"
                location="Dublin 8"
                rating={4.9}
                reviewCount={127}
                verified={true}
                available={true}
                hourlyRate="65"
              />
              <ServiceProviderCard
                name="Aoife Kelly"
                service="Plumbing Services"
                location="Cork City"
                rating={4.7}
                reviewCount={89}
                verified={true}
                available={false}
                hourlyRate="55"
              />
              <ServiceProviderCard
                name="Liam Walsh"
                service="House Mover & Removals"
                location="Galway"
                rating={4.8}
                reviewCount={156}
                verified={false}
                available={true}
                hourlyRate="45"
              />
              <ServiceProviderCard
                name="Niamh Ryan"
                service="Delivery Driver"
                location="Limerick"
                rating={5.0}
                reviewCount={43}
                verified={true}
                available={true}
                hourlyRate="30"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
