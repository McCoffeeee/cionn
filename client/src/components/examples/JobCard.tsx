import JobCard from '../JobCard';

export default function JobCardExample() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
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
    </div>
  );
}
