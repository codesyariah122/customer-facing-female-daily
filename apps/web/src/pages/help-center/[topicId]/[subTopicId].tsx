import NestedLayout from '@components/helpCenter/NestedLayout';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetFaq } from '@hooks/useHelpCenter';
import { useRouter } from 'next/router';
import NoDataFound from '@components/helpCenter/NoDataFound';
import EmailIco from '@assets/images/email_ico.png';
import WhatsApp from '@assets/images/whatsapp_ico.png';
import HelpCenter from '@assets/images/help-centers.svg';
import Image from 'next/image';
import Link from 'next/link';

const SubId = () => {
  const router = useSearchParams();
  const route = useRouter();
  const id = router.get('subTopicId');
  const query = router.get('faq');
  const { data, isLoading, isFetching } = useGetFaq(id ? id : '');
  const selectFaq = data?.find((e: any) => e.code === query);
  const name = data?.length && data.length && data[0].topic?.name.en;
  const setBreadCrumb = () => {
    let result = [
      {
        id: 3,
        name: name ? name : '',
        url: selectFaq ? `/help-center/${router.get('topicId')}/${id}` : '',
      },
    ];
    if (selectFaq) {
      result.push({
        id: 4,
        name: selectFaq.question.en,
        url: '',
      });
    }
    return result;
  };
  const getbreadCrumb = setBreadCrumb();
  return (
    <NestedLayout breadCrumb={getbreadCrumb} title={name}>
      {selectFaq ? (
        <div className="py-4">
          <div className="flex items-center justify-center space-x-4">
            <h3 className="flex-1 text-base sm:text-xl">
              {selectFaq.question.en}
            </h3>
            <button
              onClick={() => {
                route.back();
              }}
              className="hidden rounded border py-1 px-4 text-sm outline-none sm:block"
            >
              back
            </button>
          </div>

          <p className="py-2">{selectFaq.answer.en}</p>
          <div className="flex w-full justify-center py-20">
            <div className="w-9/12">
              <div>
                <div className="text-center">
                  <strong>Tim kami akan selalu ada untuk membantu Anda.</strong>
                </div>
                <div className="flex justify-center py-8">
                  <Image
                    src={HelpCenter}
                    width={85}
                    height={85}
                    alt="Help Center"
                    className="overflow-hidden rounded-t object-cover"
                  />
                </div>
                <div className="text-center">
                  <span>
                    Tidak menemukan jawaban untuk pertanyaan Anda? <br />{' '}
                    Hubungi kami lebih lanjut.
                  </span>
                </div>
              </div>
              <div className="mt-8 grid items-center justify-evenly xl:flex">
                <div className="rounded-lg bg-slate-50 py-2 px-8">
                  <Link href={'mailto: cs@femaledaily.com'} className="flex">
                    <div>
                      <Image
                        src={EmailIco}
                        width={30}
                        height={30}
                        alt="whatsapp"
                        className="overflow-hidden rounded-t object-cover"
                      />
                    </div>
                    <div className="grid pl-2">
                      <span>Email</span>
                      <span className="text-sm text-gray-500">
                        cs@femaledaily.com
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="bg-pink-primary my-4 rounded-lg py-2 px-8 text-center text-white xl:my-0">
                  <Link
                    href={
                      'https://storage.googleapis.com/femaledaily-static-page/refund/index.html'
                    }
                  >
                    <div className="grid">
                      <span>Laporkan Isu</span>
                      <span className="text-sm">Buat laporan di sini</span>
                    </div>
                  </Link>
                </div>
                <div className="rounded-lg bg-slate-50 py-2 px-8">
                  <Link
                    href={'https://api.whatsapp.com/send?phone=6285772899179'}
                    className="flex"
                  >
                    <div>
                      <Image
                        src={WhatsApp}
                        width={30}
                        height={30}
                        alt="whatsapp"
                        className="overflow-hidden rounded-t object-cover"
                      />
                    </div>
                    <div className="grid pl-2">
                      <span>WhatsApp</span>
                      <span className="text-sm text-gray-500">
                        Chat Sekarang
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        (data?.length && (
          <ul className="flex w-full flex-col divide-y py-4">
            {data.map((e: any, i: number) => (
              <li
                onClick={() => {
                  route.push(
                    `/help-center/${router.get('topicId')}/${id}/?faq=${
                      e.code
                    }`,
                    undefined,
                    { shallow: true }
                  );
                }}
                className="cursor-pointer py-4"
                key={i}
              >
                {e.question.en}
              </li>
            ))}
          </ul>
        )) || <NoDataFound />
      )}
    </NestedLayout>
  );
};

export default SubId;
