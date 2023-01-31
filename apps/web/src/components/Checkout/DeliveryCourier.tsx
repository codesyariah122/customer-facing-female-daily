import { Listbox } from '@headlessui/react';
import { useState } from 'react';

const Courier = [
  {
    id: 1,
    name: 'SiCepat (2-7 days)',
    infoPrice: 'Rp9.000',
    unavailable: true,
    estimate: 'Estimated date of arrival: 27 Feb - 2 Mar 2020',
  },
  {
    id: 2,
    name: 'AnterAja (2-4 days)',
    infoPrice: 'Rp.11.000',
    unavailable: false,
    estimate: 'Estimated date of arrival: Tomorrow - 2 Mar 2020',
  },
  {
    id: 3,
    name: 'J&T (2-3 days)',
    infoPrice: 'Rp13.000',
    unavailable: false,
    estimate: 'Estimated date of arrival: 28 Feb - 3 Mar 2020',
  },
];

const DeliveryCourier = () => {
  const [selectedCourier, setSelectedCourier] = useState(Courier[0]);
  return (
    <div className="grid">
      <div className="relative grid">
        <span>Selected Courier</span>
        <Listbox value={selectedCourier} onChange={setSelectedCourier}>
          <Listbox.Button className="my-2 rounded border-2 p-4 text-left">
            {selectedCourier.name}
          </Listbox.Button>
          <Listbox.Options className="absolute top-24 z-10 h-40 w-full overflow-y-auto bg-white p-4 text-gray-500		drop-shadow-md">
            {Courier.map((courier) => (
              <Listbox.Option key={courier.id} value={courier}>
                <div className="grid border-b py-4">
                  <div className="text-black">{courier.name}</div>
                  <div className="pt-2 text-xs text-gray-500	">
                    {courier.infoPrice}
                  </div>
                  <div className="pt-2 text-xs text-gray-500	">
                    {courier.estimate}
                  </div>
                </div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  );
};

export default DeliveryCourier;
