import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

type DataTypes = {
  key: string;
  id: number;
  name: string;
  url: string;
};

type DataArrayTypes = {
  dataBreadcrumbs: DataTypes[];
};

const Breadcrumbs = ({ dataBreadcrumbs }: any): React.ReactElement => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="flex items-center gap-x-4">
        {dataBreadcrumbs.map((item: any) => {
          return item.url !== '' ? (
            <React.Fragment key={uuidv4()}>
              <BreadcrumbsActive id={item.id} name={item.name} url={item.url} />
            </React.Fragment>
          ) : (
            <React.Fragment key={uuidv4()}>
              <BreadcrumbsCurrent
                id={item.id}
                name={item.name}
                url={item.url}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const BreadcrumbsActive = ({ id, name, url }: any) => {
  return (
    <>
      <Link href={url}>
        <strong className="text-pink-primary text-xs font-medium">
          {name}
        </strong>
      </Link>
      <i className="ico-arrow-right-breadcrumbs"></i>
    </>
  );
};

const BreadcrumbsCurrent = ({ id, name, url }: any) => {
  return <div className="text-black-light text-xs font-medium">{name}</div>;
};

export default Breadcrumbs;
