// types/Post.ts
import { User } from './User';
import { Image } from './Image';
import { SubCategory } from './SubCategory';

export interface Post {
  id: number;
  title: string;
  content: string;
  user: User;
  images: Image[];
  subCategories: SubCategory[];
}
