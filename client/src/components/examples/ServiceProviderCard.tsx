import ServiceProviderCard from '../ServiceProviderCard';

export default function ServiceProviderCardExample() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
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
  );
}
