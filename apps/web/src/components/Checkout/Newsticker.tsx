interface newsStickerProps {
  caption?: string | any;
  clasName?: string | any;
  icon?: string | any;
}
const Newsticker = ({
  caption = '',
  clasName = 'bg-sky-200',
  icon = 'ico-information-blue',
}: newsStickerProps) => {
  return (
    <div
      className={`container mx-auto  p-2 text-xs xl:max-w-screen-xl ${clasName}`}
    >
      <div className="flex">
        <i className={`${icon} mx-4`} />
        <div>
          <span>{caption}</span>
        </div>
      </div>
    </div>
  );
};

export default Newsticker;
