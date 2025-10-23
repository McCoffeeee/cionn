import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Gig" | "Contract";
  workMode: "In-Person" | "Remote" | "Hybrid";
  salary?: string;
  postedTime: string;
  companyLogo?: string;
}

export default function JobCard({
  title,
  company,
  location,
  type,
  workMode,
  salary,
  postedTime,
  companyLogo,
}: JobCardProps) {
  return (
    <Card className="hover-elevate active-elevate-2 cursor-pointer" data-testid="card-job">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={companyLogo} alt={company} />
            <AvatarFallback>{company.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg mb-1" data-testid="text-job-title">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3" data-testid="text-company-name">{company}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant={type === "Gig" ? "default" : "secondary"} data-testid="badge-job-type">
                {type}
              </Badge>
              <Badge variant="outline" data-testid="badge-work-mode">
                <Users className="w-3 h-3 mr-1" />
                {workMode}
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span data-testid="text-job-location">{location}</span>
              </div>
              {salary && (
                <span className="font-medium text-foreground" data-testid="text-salary">€{salary}</span>
              )}
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span data-testid="text-posted-time">{postedTime}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
