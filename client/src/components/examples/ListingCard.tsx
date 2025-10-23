import ListingCard from "../ListingCard";

export default function ListingCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <ListingCard
        title="Professional Canon EOS R5 Camerasss"
        price="45"
        priceType="day"
        location="Dublin 2"
        condition="Excellent"
        rating={4.8}
        reviewCount={24}
        verified={true}
      />
      <ListingCard
        title="Camping Tent - 4 Person"
        price="25"
        priceType="day"
        location="Cork"
        condition="Good"
        rating={4.5}
        reviewCount={12}
      />
      <ListingCard
        title="DJ Equipment Setup with Mixer"
        price="80"
        priceType="day"
        location="Galway"
        condition="Like New"
        verified={true}
      />
      <ListingCard
        title="MacBook Pro 16-inch M3 Pro"
        price="1,200"
        location="Limerick"
        condition="Excellent"
        rating={4.9}
        reviewCount={8}
      />
    </div>
  );
}
