import NestedLayout from '@components/helpCenter/NestedLayout';
import NoDataFound from '@components/helpCenter/NoDataFound';
import { useGetSubTopic } from '@hooks/useHelpCenter';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
const DetailTopic = () => {
  const router = useSearchParams();
  const id = router.get('topicId');
  const { data, isLoading, isFetching } = useGetSubTopic(id ? id : '');
  return (
    <NestedLayout>
      {(data?.length > 0 && (
        <ul className="flex w-full flex-col divide-y py-4">
          {data.map((e: any, i: number) => (
            <li key={i} className="py-4 text-sm sm:text-base">
              <Link href={`${id}/${e.code}`}>{e.name.en}</Link>
            </li>
          ))}
        </ul>
      )) || <NoDataFound />}
    </NestedLayout>
  );
};

export default DetailTopic;
