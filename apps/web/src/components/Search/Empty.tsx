import emptyImg from '../../assets/images/ico-empty-search.svg';
const Empty = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-center">
        <img src={emptyImg.src} className="mx-auto w-[142px]" />
      </div>
      <div className="mt-5 text-center text-sm font-semibold tracking-wider">
        Better luck next time!
      </div>
      <div className="mx-auto mt-2.5 w-full max-w-[589px] text-center text-sm tracking-wider">
        We can't find anything that matches your search or filter now. How about
        searching with different keyword or try to reset your filter?
      </div>
    </div>
  );
};

export default Empty;
