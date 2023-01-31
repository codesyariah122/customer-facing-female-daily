export interface IProduct {
  id: number;
  name: string;
  brand: string;
  category: number;
  imageUrl: string;
  stock: string;
  price: number;
  priceAfterDiscount: number;
  discount: number;
  rate: number;
  status: boolean;
  medias: Array<IProductMedias>;
}

export interface IProductMedias {
  url: string;
}
export interface ICategory {
  id: number;
  name: string;
  selected: boolean;
}

export interface IProducts {
  product: IProduct;
  quantity: String;
}
