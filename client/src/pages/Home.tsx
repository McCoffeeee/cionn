import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ListingCard from "@/components/ListingCard";
import { Camera, Package, Wrench, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6" data-testid="text-categories-heading">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/marketplace?category=rentals">
              <a className="block">
                <CategoryCard
                  title="Rentals"
                  description="Rent cameras, equipment, tools"
                  icon={Camera}
                  count="1,234"
                />
              </a>
            </Link>
            <Link href="/marketplace?category=for-sale">
              <a className="block">
                <CategoryCard
                  title="For Sale"
                  description="Buy and sell items locally"
                  icon={Package}
                  count="5,678"
                />
              </a>
            </Link>
            <Link href="/marketplace?category=services">
              <a className="block">
                <CategoryCard
                  title="Services"
                  description="Find local professionals"
                  icon={Wrench}
                  count="892"
                />
              </a>
            </Link>
            <Link href="/jobs">
              <a className="block">
                <CategoryCard
                  title="Jobs"
                  description="Gigs and full-time positions"
                  icon={Briefcase}
                  count="456"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold" data-testid="text-featured-heading">Featured Listings</h2>
            <Link href="/marketplace">
              <a>
                <Button variant="outline" data-testid="button-view-all">View All</Button>
              </a>
            </Link>
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
              title="MacBook Pro 16-inch M1"
              price="1,200"
              location="Limerick"
              condition="Excellent"
              rating={4.9}
              reviewCount={8}
              imageUrl="./src/images/macbook.jpg"
            />
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4" data-testid="text-cta-heading">Ready to start buying or selling?</h2>
          <p className="text-muted-foreground mb-6" data-testid="text-cta-description">
            Join thousands of Irish users trading securely with our escrow payment system
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" data-testid="button-create-listing">Create a Listing</Button>
            <Button size="lg" variant="outline" data-testid="button-learn-more">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
