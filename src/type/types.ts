export interface Post {
  id: number;
  author: string;
  avatar: string;
  createdAt: string; // ISO date string
  content: string;
  images?: string[];
  likes: number;
  comments: CommentItem[];
  shares: number;
}

export interface CommentItem {
  id: number;
  author: string;
  text: string;
  createdAt: string;
}
