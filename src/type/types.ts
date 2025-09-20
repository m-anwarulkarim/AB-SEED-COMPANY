export type CommentItem = {
  id: number;
  author: string;
  text: string;
  createdAt: string;
};

export type Post = {
  id: number;
  author: string;
  avatar: string;
  createdAt: string;
  content: string;
  images: string[];
  videos?: string[]; // ✅ ভিডিও সাপোর্ট
  likes: number;
  comments: CommentItem[];
  shares: number;
};
