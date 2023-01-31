import { productsDataSample } from './productsData';
export const productsData = {
  toolbarProductsTotal: 13465,
  toolbarProductsTotalLabel: 'Products',
  sortLabel: 'Sort By',
  sortUseSelect: true,
  sortSelectSource: [
    {
      itemCode: 'NEWEST',
      itemName: 'Newest',
    },
    {
      itemCode: 'OLDEST',
      itemName: 'Oldest',
    },
  ],
  productsSources: {
    products: productsDataSample,
  },
  isGridLayout: true,
  isListLayout: false,
  totalCount: 13465,
  pageSize: 15,
  siblingCount: 3,
  currentPage: 1,
};
