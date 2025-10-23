import OrderCard from '../OrderCard';

export default function OrderCardExample() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
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
  );
}
