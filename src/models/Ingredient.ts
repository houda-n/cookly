export type ingredient = {
  id: string;
  name: string;
  description: string|null;
  imageUrl: string|null;
  type: string|null;
  purchased?: boolean;
};
