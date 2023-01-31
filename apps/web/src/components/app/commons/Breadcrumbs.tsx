import Link from 'next/link';

type TData = {
  name: string;
  url: string;
};

type TDataBreadcrumbs = {
  dataBreadcrumbs: TData[];
};

/**
 * Breadcrumbs component <Breadcrumbs component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TDataBreadcrumbs}
 *  {
      dataBreadcrumbs (data for populate breadcrumbs)
    }
 * @returns {React.ReactElement}
 */

const Breadcrumbs = ({ dataBreadcrumbs }: TDataBreadcrumbs) => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="flex flex-wrap items-center gap-x-4 leading-none">
        {dataBreadcrumbs.map((item, index) => {
          return item.url !== '' ? (
            <BreadcrumbsActive key={index} name={item.name} url={item.url} />
          ) : (
            <BreadcrumbsCurrent key={index} name={item.name} url={item.url} />
          );
        })}
      </div>
    </div>
  );
};

/**
 * BreadcrumbsActive component <BreadcrumbsActive component on the breadcrumbs>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TData}
 *  {
      id (data id)
      name (data name)
      url (data url)
    }
 * @returns {React.ReactElement}
 */
const BreadcrumbsActive = ({ name, url }: TData) => {
  return (
    <>
      <Link href={url}>
        <strong className="text-pink-primary flex items-center text-xs font-medium leading-none">
          {name}
        </strong>
      </Link>
      <i className="ico-arrow-right-breadcrumbs"></i>
    </>
  );
};

/**
 * BreadcrumbsCurrent component <BreadcrumbsCurrent component on the breadcrumbs>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TData}
 *  {
      id (data id)
      name (data name)
      url (data url)
    }
 * @returns {React.ReactElement}
 */
const BreadcrumbsCurrent = ({ name, url }: TData) => {
  return <span className="text-black-light text-xs font-medium">{name}</span>;
};

export default Breadcrumbs;
