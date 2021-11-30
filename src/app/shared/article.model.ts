import { Comment } from './comment.model';
import { Like } from './like.model';

export interface Article {
  id: number;
  title: string;
  description: string;
  body: string;
  category: string;
  likes: number;
  is_published: boolean;
  created_at: string;
  published_at: string;
  comments?: Comment[];
  likers?: Like[];
}
