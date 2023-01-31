const Heading = ({ title }: { title: string }) => {
  return (
    <div className="mb-8 grid grid-cols-2">
      <div className="col-span-12 place-self-center">
        <h2 className="text-2xl font-bold capitalize text-black">{title}</h2>
      </div>
    </div>
  );
};

export default Heading;
