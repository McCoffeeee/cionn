import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import SearchFilters from "@/components/SearchFilters";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

export default function Jobs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold" data-testid="text-page-title">Jobs & Gigs</h1>
          <Button data-testid="button-post-job">
            <Briefcase className="w-4 h-4 mr-2" />
            Post a Job
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <SearchFilters />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3 space-y-4">
            <JobCard
              title="Senior React Developer"
              company="TechCo Ireland"
              location="Dublin"
              type="Full-time"
              workMode="Hybrid"
              salary="60,000-80,000"
              postedTime="2 days ago"
            />
            <JobCard
              title="Graphic Designer - Freelance"
              company="Creative Studio"
              location="Cork"
              type="Gig"
              workMode="In-Person"
              salary="300/day"
              postedTime="1 week ago"
            />
            <JobCard
              title="Content Writer"
              company="Marketing Agency"
              location="Galway"
              type="Part-time"
              workMode="Remote"
              salary="25/hour"
              postedTime="3 days ago"
            />
            <JobCard
              title="Software Engineer Contractor"
              company="StartupXYZ"
              location="Limerick"
              type="Contract"
              workMode="In-Person"
              salary="500-700/day"
              postedTime="5 days ago"
            />
            <JobCard
              title="UX/UI Designer"
              company="Design House"
              location="Dublin"
              type="Gig"
              workMode="Hybrid"
              salary="400/day"
              postedTime="1 day ago"
            />
            <JobCard
              title="Video Editor"
              company="Media Productions"
              location="Cork"
              type="Part-time"
              workMode="Remote"
              salary="30/hour"
              postedTime="4 days ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
