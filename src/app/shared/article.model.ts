import { Comment } from './comment.model';
import { Like } from './like.model';

export class Article {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public body: string,
    public category: string,
    public likes: number,
    public is_published: boolean,
    public created_at: string,
    public published_at: string,
    public comments?: Comment[],
    public likers?: Like[]
  ) {}
}
