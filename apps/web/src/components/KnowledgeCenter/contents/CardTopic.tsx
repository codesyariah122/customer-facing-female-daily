import Link from 'next/link';
import { useTopicLists } from '@hooks/useGetTopics';
import { Icon, Loading } from '@components/KnowledgeCenter';
import Image from 'next/image';

type topicType = {
  id: number;
  code: string;
  image: {
    url: string;
  };
  name: {
    id: string;
  };
};

const CardTopic = () => {
  const { data: topicLists, isLoading: isLoadingLists } = useTopicLists();

  return (
    <>
      {/* Desktop */}
      <div className="hidden px-40 lg:block">
        {isLoadingLists && (
          <div className="mb-12 grid grid-cols-4 gap-x-4">
            <Loading size={8} type={'card'} />
          </div>
        )}
        {topicLists && (
          <>
            <div className="mb-6 grid grid-cols-2">
              <div className="col-span-12 place-self-center">
                <h2 className="text-2xl font-bold capitalize text-black">
                  Pilih topik pertanyaan Anda
                </h2>
              </div>
            </div>

            <div className="justfiy-center flex place-content-center">
              <div className="grid grid-cols-4" style={{ width: '60vw' }}>
                {topicLists.map((topic: topicType, idx: number) => (
                  <Link
                    key={idx}
                    href={`/knowledge-center/topic/${topic.code}`}
                  >
                    <div
                      className="m-4 my-16 mr-0 h-28 w-40 cursor-pointer rounded-lg bg-white py-8 px-8 shadow-lg hover:shadow-sm"
                      key={idx}
                    >
                      <div className="-mt-12 flex place-content-center justify-center">
                        <Icon url={topic.image.url} />
                      </div>
                      <div className="mt-4 flex max-w-md place-content-center justify-center">
                        <p className="text-center text-gray-600">
                          {topic.name.id}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile */}
      <div className="block overflow-x-hidden lg:hidden">
        {isLoadingLists && (
          <div className="mb-12 grid grid-cols-4 gap-0">
            <Loading size={8} type={'card'} />
          </div>
        )}
        {topicLists && (
          <>
            <div className="mb-6 grid grid-cols-2 gap-x-2">
              <div className="col-span-12 place-self-center">
                <h2 className="text-1xl font-bold text-black">
                  Pilih topik pertanyaan Anda
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {topicLists.map((topic: topicType, idx: number) => (
                <div key={idx} className="w-32 place-self-center md:w-10/12">
                  <Link href={`/knowledge-center/topic/${topic.code}`}>
                    <div
                      className="m-2 my-10 mr-0 h-20 cursor-pointer rounded-lg bg-white py-8 shadow-lg"
                      key={idx}
                    >
                      <div className="-mt-12 flex place-content-center justify-center">
                        <Image
                          src={topic.image.url}
                          alt="vector-knowledge"
                          width="40"
                          height="40"
                        />
                      </div>
                      <div className="mt-4 flex max-w-md place-content-center justify-center">
                        <p className="text-center text-sm text-gray-600">
                          {topic.name.id}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CardTopic;
