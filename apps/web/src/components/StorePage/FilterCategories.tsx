const category = [
  {
    id: 2,
    name: 'Body Moisturizer',
    child: [],
  },
  {
    id: 3,
    name: 'Bath & Shower',
    child: [],
  },
  {
    id: 4,
    name: 'Personal Care',
    child: [],
  },
  {
    id: 5,
    name: 'Fragrance',
    child: [],
  },
  {
    id: 6,
    name: 'Hair',
    child: [],
  },
];

const FilterCategories = () => {
  return (
    <div className="border-gray-10 rounded-2xl border p-5 shadow-lg">
      <ul className="space-y-4">
        {category.map((item, index) => {
          return (
            <li key={index}>
              <div className="flex w-full items-center justify-between">
                <label
                  htmlFor={`cat-${item.id}`}
                  className="flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    id={`cat-${item.id}`}
                    name={`cat-${item.id}`}
                    defaultValue={`cat-${item.id}`}
                    className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                  />
                  <div className="relative mr-3 cursor-pointer">
                    <i className="ico-check" />
                    <i className="ico-uncheck" />
                  </div>
                  <div className="flex flex-1 items-center justify-between text-sm tracking-wider">
                    <span>{item.name}</span>
                  </div>
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterCategories;
