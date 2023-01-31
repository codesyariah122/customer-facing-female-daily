const Address = () => {
  return (
    <div>
      <div className="mt-2 flex">
        <span className="text-xs ">Home</span>
        <div className="hidden">
          <span className="mx-4 rounded-lg bg-teal-600 py-1	px-2 text-xs font-semibold text-white opacity-60">
            Primary
          </span>
        </div>
      </div>
      <div>
        <span className="text-sm font-semibold">Jhon Doe</span>
        <p className="text-sm text-gray-500">
          Jatirangga, Jatisampurna, Bekasi City, West Java, 17434 [Note: Fraser
          Park CBD]
        </p>
      </div>
      <span className="text-sm text-gray-500">08123456789</span>
    </div>
  );
};

export default Address;
