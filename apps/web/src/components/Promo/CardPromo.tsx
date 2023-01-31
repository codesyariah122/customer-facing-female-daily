import Image from 'next/image';

const CardPromo = () => {
  return (
    <div className="rounded border shadow">
      <div>
        <Image
          src="https://media-fd-stg.setoko-test.com/images/b519d376-758d-4f27-b926-2e77b36900f6.jpg"
          width={302}
          height={127}
          alt="promo"
          className="h-[127px] w-full overflow-hidden rounded-t object-cover"
        />
      </div>
      <div className="space-y-3.5 py-6 px-4">
        <strong className="font-semibold">
          Nikon Deals - Holiday savings Now!
        </strong>
        <div className="flex flex-col">
          <span className="text-10">Promo Period</span>
          <time className="text-sm tracking-wider">18 Feb - 24 Apr 2021</time>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-10">Promo Code</span>
            <strong className="text-pink-primary font-medium">ALL2021</strong>
          </div>
          <div className="flex items-end">
            <div className="bg-pink-primary flex w-[93px] cursor-pointer justify-center rounded py-2 text-sm text-xs font-semibold tracking-wide text-white">
              <span>Copy Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPromo;
