import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary/90 via-primary to-primary/80 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6bS0yNC0yNGMwLTMuMzE0IDIuNjg2LTYgNi02czYgMi42ODYgNiA2LTIuNjg2IDYtNiA2LTYtMi42ODYtNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6"
            data-testid="text-hero-title"
          >
            ROINN
          </h1>
          <p
            className="text-lg sm:text-xl text-primary-foreground/90 mb-8"
            data-testid="text-hero-subtitle"
          >
            Buy, sell, share & rent equipment, find local services, or discover
            your next opportunity in Ireland's largest community marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link     href="/marketplace">
              <Button
           
                size="lg"
                variant="secondary"
                className="text-base"
                data-testid="button-browse-marketplace"
              >
                Browse Marketplace
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              data-testid="button-post-listing"
            >
              Post a Listing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
