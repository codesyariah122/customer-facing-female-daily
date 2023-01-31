type DataContent = {
  id: number;
  title: string;
  content: string;
};
type DataStaticPages = {
  data: DataContent[];
};

const GeneralPages = ({ data }: DataStaticPages) => {
  return (
    <div>
      <title>General Pages</title>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="mx-auto w-3/6 text-center leading-5">
                <h2 className="py-8 text-xl font-semibold">{item.title}</h2>
                <div className="pb-8 leading-6">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeneralPages;
