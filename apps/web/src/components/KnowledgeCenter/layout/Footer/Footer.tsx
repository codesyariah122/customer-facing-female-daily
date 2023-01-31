import { Icon } from '@components/KnowledgeCenter/icon';
import { isInFemaleDailyAgentApp } from '@utils/helpers';

const date = new Date();
const iconApp = [
  { id: 1, name: 'appstore', width: 130, height: 130 },
  { id: 2, name: 'playstore', width: 130, height: 130 },
];
const iconLinks = [
  { id: 1, name: 'instagram', width: 50, height: 50 },
  { id: 2, name: 'twitter', width: 50, height: 50 },
  { id: 3, name: 'facebook', width: 50, height: 50 },
  { id: 4, name: 'youtube', width: 50, height: 50 },
];
const Footer = () => {
  return (
    <>
      {!isInFemaleDailyAgentApp() ? (
        <>
          <footer
            className="mb-0 hidden h-20 md:block lg:block"
            style={{ background: '#DB284E' }}
          >
            <div className="flex h-16 place-content-center justify-center">
              <div className="ml-24 h-0 flex-1 py-6">
                <span className="text-1xl text-white">
                  Female Daily Studio {date.getFullYear()}
                </span>
              </div>
              <div className="h-0 w-48 shrink-0 py-0">
                <div className="flex justify-center space-x-2">
                  {iconApp.map((d) => (
                    <div key={d.id}>
                      <Icon name={d.name} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-0 w-48 shrink-0 py-5">
                <div className="flex justify-center space-x-2">
                  {iconLinks.map((d) => (
                    <div key={d.id}>
                      <Icon name={d.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </footer>

          <footer
            className="mt-auto block h-full w-full  md:hidden lg:hidden"
            style={{ background: '#DB284E' }}
          >
            <div className="grid grid-cols-2 gap-x-4">
              <div className="col-span-full">
                <div className="ml-12 flex justify-start space-x-4">
                  {iconApp.map((d) => (
                    <div key={d.id}>
                      <Icon name={d.name} width={d.width} height={d.height} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-full">
                <div className="ml-12 flex justify-start space-x-2">
                  {iconLinks.map((d) => (
                    <div key={d.id}>
                      <Icon name={d.name} width={d.width} height={d.height} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-full mb-16">
                <div className="ml-12 mt-6 flex justify-start">
                  <div className="shrink-0">
                    <span className="text-1xl text-white">
                      Female Daily Studio {date.getFullYear()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      ) : null}
    </>
  );
};

export default Footer;
