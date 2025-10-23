import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, Briefcase, MessageSquare, User, Menu, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Ireland");

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1" data-testid="link-home">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg hidden sm:block">ROINN.IE</span>
            </a>
          </Link>

          <div className="flex-1 max-w-2xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for items, services, or jobs..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-32" data-testid="button-location">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">{selectedLocation}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => setSelectedLocation("All Ireland")} data-testid="option-all-ireland">
                    All Ireland
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedLocation("Dublin")} data-testid="option-dublin">
                    Dublin
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedLocation("Cork")} data-testid="option-cork">
                    Cork
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedLocation("Galway")} data-testid="option-galway">
                    Galway
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedLocation("Limerick")} data-testid="option-limerick">
                    Limerick
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button data-testid="button-search">
                <Search className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/marketplace">
              <a>
                <Button
                  variant={isActive("/marketplace") ? "secondary" : "ghost"}
                  size="sm"
                  data-testid="link-marketplace"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Marketplace
                </Button>
              </a>
            </Link>
            <Link href="/jobs">
              <a>
                <Button
                  variant={isActive("/jobs") ? "secondary" : "ghost"}
                  size="sm"
                  data-testid="link-jobs"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Jobs
                </Button>
              </a>
            </Link>
            <Link href="/chats">
              <a className="relative">
                <Button
                  variant={isActive("/chats") ? "secondary" : "ghost"}
                  size="sm"
                  data-testid="link-chats"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chats
                  <Badge variant="destructive" className="ml-2 px-1.5 py-0 text-xs" data-testid="badge-chat-count">
                    3
                  </Badge>
                </Button>
              </a>
            </Link>
            <Link href="/profile">
              <a>
                <Button
                  variant={isActive("/profile") ? "secondary" : "ghost"}
                  size="sm"
                  data-testid="link-profile"
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </a>
            </Link>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/marketplace">
                  <a className="flex items-center w-full" data-testid="mobile-link-marketplace">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Marketplace
                  </a>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/jobs">
                  <a className="flex items-center w-full" data-testid="mobile-link-jobs">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Jobs
                  </a>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/chats">
                  <a className="flex items-center w-full" data-testid="mobile-link-chats">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chats
                  </a>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <a className="flex items-center w-full" data-testid="mobile-link-profile">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </a>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
