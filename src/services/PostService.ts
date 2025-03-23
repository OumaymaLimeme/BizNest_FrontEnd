// services/api.ts
import api from './Api';
import { Post } from '../types/Post';

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>('/post/all');
  return response.data;
};
