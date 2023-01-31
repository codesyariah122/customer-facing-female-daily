import Image from 'next/image';
import { Vector } from '@components/KnowledgeCenter';
import KnowledgeCenter from '@components/KnowledgeCenter/vector/svg/knowledge-center.svg';

const HeroContent = () => {
  return (
    <>
      <div className="container hidden min-w-full lg:block">
        <div
          className="h-max bg-pink-100 bg-cover bg-center"
          style={{ width: '100%' }}
        >
          <div className="flex items-center justify-center py-16">
            <div className="h-16 flex-1">
              <div className="rotate-30" style={{ marginTop: '4rem' }}>
                <Vector name="frame-bottom" />
              </div>
            </div>
            <div className="h-60 w-96 flex-grow-0">
              <h1 className="text-3xl font-bold leading-snug">
                Pelajari Cara Berjualan Di Female Daily Studio
              </h1>
              <h5 className="mt-3 text-left text-2xl">
                Dan Raih Keuntunganmu!
              </h5>
            </div>

            <div className="shrink-0">
              <div className="-mt-20 overflow-hidden">
                <Vector name="store-people" />
              </div>
            </div>

            <div className="h-16 flex-1">
              <div
                className="object-none object-right-top"
                style={{ marginTop: '-11.5rem', marginLeft: '14rem' }}
              >
                <Vector name="frame-top" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="w-full">
          <Image
            src={KnowledgeCenter}
            alt="knowledge-center-mobile"
            width="950"
            height="200"
          />
        </div>
      </div>
    </>
  );
};

export default HeroContent;
