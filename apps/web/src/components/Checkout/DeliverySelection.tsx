import { Listbox } from '@headlessui/react';
import { useState } from 'react';

const Delivery = [
  {
    id: 1,
    name: 'Regular (2-7 days)',
    infoPrice: 'Rp9.000 - Rp13.000',
    unavailable: true,
  },
  {
    id: 2,
    name: 'One Day Delivery (1 day)',
    infoPrice: 'Rp9.000 - Rp13.000',
    unavailable: false,
  },
  {
    id: 3,
    name: 'Same Day',
    infoPrice: 'Rp9.000 - Rp13.000',
    unavailable: false,
  },
];
const DeliverySelection = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(Delivery[0]);
  return (
    <div className="relative grid">
      <span>Select Delivery</span>
      <Listbox value={selectedDelivery} onChange={setSelectedDelivery}>
        <Listbox.Button className="my-2 rounded border-2 p-4 text-left">
          {selectedDelivery.name}
        </Listbox.Button>
        <Listbox.Options className="absolute top-24 z-10 h-40 w-full overflow-y-auto bg-white p-4	text-gray-500	 drop-shadow-md ">
          {Delivery.map((delivery) => (
            <Listbox.Option key={delivery.id} value={delivery}>
              <div className="grid border-b py-4">
                <div className="text-black">{delivery.name}</div>
                <div className="pt-2 text-xs text-gray-500	">
                  {delivery.infoPrice}
                </div>
              </div>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default DeliverySelection;
