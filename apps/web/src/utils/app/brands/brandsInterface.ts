export interface IBrand {
  id: number;
  name: string;
  category?: number;
}
export interface ICategory {
  id: number;
  name: string;
  label?: string;
}

export interface ISubBanner {
  id?: number;
  name?: string;
  imageUrl?: string;
}

export interface IBanner {
  id: number;
  imageUrl: string;
}
