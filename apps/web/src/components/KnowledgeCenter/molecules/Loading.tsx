import Image from 'next/image';
import Logo from '@assets/images/femaledaily-logo.png';
import { v4 as uuidv4 } from 'uuid';
import '@components/KnowledgeCenter/styles';

const Loading = (props: any) => {
  return (
    <>
      {props.type === 'card' &&
        [...Array(props.size)].map((e: any) => (
          <div
            key={uuidv4()}
            className="skeleton mb-6 flex cursor-pointer flex-col content-center items-center justify-center overflow-hidden rounded-xl text-center leading-snug shadow-md hover:shadow-sm sm:p-4"
            style={{
              maxHeight: '132px',
              maxWidth: '132px',
              aspectRatio: 1,
            }}
          >
            <p style={{ visibility: 'hidden' }}>Loading ...</p>
          </div>
        ))}
      {props.type === 'list' &&
        [...Array(props.size)].map((e: any) => (
          <div
            key={uuidv4()}
            className="skeleton col-span-12 mb-6 w-full"
            style={{
              height: '5vh',
              width: '50vw',
              aspectRatio: 1,
            }}
          >
            <p style={{ visibility: 'hidden' }}>Loading ...</p>
          </div>
        ))}
      {props.type === 'text-list' &&
        [...Array(props.size)].map((e: any) => (
          <div
            key={uuidv4()}
            className="skeleton col-span-12 mb-6 w-full"
            style={{
              height: '5vh',
              width: '100%',
              aspectRatio: 1,
            }}
          >
            <p style={{ visibility: 'hidden' }}>Loading ...</p>
          </div>
        ))}
      {props.type === 'block-card' &&
        [...Array(props.size)].map((e: any) => (
          <div
            key={uuidv4()}
            className="skeleton col-span-12 mb-6 w-full"
            style={{
              height: '15vh',
              width: '100%',
              aspectRatio: 1,
            }}
          >
            <p style={{ visibility: 'hidden' }}>Loading ...</p>
          </div>
        ))}
      {props.type === 'breadcrumb' &&
        [...Array(props.size)].map((e: any) => (
          <div
            key={uuidv4()}
            className="skeleton col-span-12 mb-6 w-full"
            style={{
              height: '5vh',
              width: '100%',
              aspectRatio: 1,
            }}
          >
            <p style={{ visibility: 'hidden' }}>Loading ...</p>
          </div>
        ))}
      {props.type === 'text' &&
        [...Array(props.size)].map((e: any) => (
          <>
            <Image src={Logo} alt="fd-logo" width={150} height={150} />
            <div className="neon__text">
              <h1 className="text__inside font-semibold text-red-800 hover:text-red-300 ">
                Please wait ...
              </h1>
            </div>
          </>
        ))}
    </>
  );
};

export default Loading;
