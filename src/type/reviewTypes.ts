export interface Review {
  id: number;
  author: string;
  avatar: string;
  createdAt: string;
  rating: number;
  title: string;
  text: string;
  images?: string[];
  videos?: string[];
}

export type NewReview = Omit<Review, "id" | "createdAt">;
