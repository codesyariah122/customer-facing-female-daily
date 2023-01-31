import Image from 'next/image';

const Content = () => {
  return (
    <div className="container mx-auto mt-5 xl:max-w-screen-lg">
      <div className="my-4 space-y-4">
        <Image
          src="https://media-fd-stg.setoko-test.com/images/b519d376-758d-4f27-b926-2e77b36900f6.jpg"
          width={934}
          height={280}
          alt="article"
          className="h-[280px] w-full object-cover"
        />
        <div className="space-y-4">
          <h2 className="text-22 font-semibold">Big ideas for small spaces</h2>
          <div className="space-x-2 text-sm">
            <span className="space-x-2">
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                living
              </span>
            </span>
            <span className="text-black-light space-x-2">
              <span>12 Feb 2021</span>
              <span>|</span>
              <span>2 min read</span>
            </span>
          </div>
          <div className="border-b py-4">
            <p>
              Got a teeny room, an empty corner, or a bare wall? That’s a prime
              spot for a cozy nook or a little vignette. Whether you turn yours
              into a book-filled retreat, an intimate dining alcove, or a snug
              seating area, a “room within a room” feels instantly inviting. And
              as these ­Airbnbs show, it’s not hard to pull off — all you need
              are some smart styling strategies.
            </p>
            <br />
            <p>
              A tone-on-tone scheme helps this space feel roomy and
              clutter-free, even when the shelves are stacked with a big mix of
              items (books, microwave, portraits), says designer Emily
              Henderson. “The pops of red add life,” she says. “For a quieter
              vibe, you could replace the chair with a navy velvet one.” Prefer
              to play up contrasts? “Swap out the rattan pendant for a sleek,
              industrial-style metal fixture,” suggests lifestyle blogger Will
              Taylor.
            </p>
            <br />
            <p>
              A big dose of symmetry (matching chairs, identical pillows) gives
              this corner its own distinctive look, says Taylor. “If you want to
              get a little less formal, just mix up the arrangement and
              assortment of throw pillows so they’re not so uniform.” A
              cushioned banquette is a practical choice when space is tight.
            </p>
            <br />
            <p>
              Got a teeny room, an empty corner, or a bare wall? That’s a prime
              spot for a cozy nook or a little vignette. Whether you turn yours
              into a book-filled retreat, an intimate dining alcove, or a snug
              seating area, a “room within a room” feels instantly inviting. And
              as these ­Airbnbs show, it’s not hard to pull off — all you need
              are some smart styling strategies.
            </p>
            <br />
            <p>
              A tone-on-tone scheme helps this space feel roomy and
              clutter-free, even when the shelves are stacked with a big mix of
              items (books, microwave, portraits), says designer Emily
              Henderson. “The pops of red add life,” she says. “For a quieter
              vibe, you could replace the chair with a navy velvet one.” Prefer
              to play up contrasts? “Swap out the rattan pendant for a sleek,
              industrial-style metal fixture,” suggests lifestyle blogger Will
              Taylor. A big dose of symmetry (matching chairs, identical
              pillows) gives this corner its own distinctive look, says Taylor.
              “If you want to get a little less formal, just mix up the
              arrangement and assortment of throw pillows so they’re not so
              uniform.” A cushioned banquette is a practical choice when space
              is tight.
            </p>
          </div>
          <div>
            <span className="space-x-2 text-xs">
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                Furniture
              </span>
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                Lifestyle
              </span>
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                Interior
              </span>
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                Home
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
