import { useState } from "react";
import type { Post, CommentItem } from "@/type/types";
import NewPostComposer from "../NewPostComposer";
import PostCard from "./PostCard";

function makeSamplePosts(): Post[] {
  const posts: Post[] = [];
  for (let i = 1; i <= 20; i++) {
    const comments: CommentItem[] = [
      {
        id: 1,
        author: "Rafi",
        text: `Nice post ${i}`,
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        author: "Mita",
        text: `Great! ${i}`,
        createdAt: new Date().toISOString(),
      },
    ];
    posts.push({
      id: i,
      author: `User ${i}`,
      avatar: `https://i.pravatar.cc/150?img=${i + 5}`,
      createdAt: new Date(Date.now() - i * 1000 * 60 * 60).toISOString(),
      content:
        i % 3 === 0
          ? "লম্বা পোস্ট উদাহরণ — দেখার জন্য See more কাজ করবে। Lorem ipsum dolor sit amet..."
          : `Short post ${i}`,
      images: [],
      likes: Math.floor(Math.random() * 40),
      comments,
      shares: Math.floor(Math.random() * 10),
    });
  }
  return posts;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>(makeSamplePosts());
  const [visibleCount, setVisibleCount] = useState(5);

  const handleSeeMorePosts = () =>
    setVisibleCount((v) => Math.min(posts.length, v + 5));

  const handleLike = (postId: number, liked: boolean) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, likes: p.likes + (liked ? 1 : -1) } : p
      )
    );
  };

  const handleAddComment = (postId: number, commentText: string) => {
    const newComment: CommentItem = {
      id: Date.now(),
      author: "You",
      text: commentText,
      createdAt: new Date().toISOString(),
    };
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, comments: [...p.comments, newComment] } : p
      )
    );
  };

  const handleShare = (postId: number) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, shares: p.shares + 1 } : p))
    );
  };

  const handleAddPost = (content: string, images: string[] = []) => {
    const newPost: Post = {
      id: Date.now(),
      author: "You",
      avatar: "https://i.pravatar.cc/150?img=10",
      createdAt: new Date().toISOString(),
      content,
      images,
      likes: 0,
      comments: [],
      shares: 0,
    };
    setPosts((prev) => [newPost, ...prev]);
    setVisibleCount((v) => v + 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <NewPostComposer onPost={handleAddPost} />

      {posts.slice(0, visibleCount).map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onAddComment={handleAddComment}
          onShare={handleShare}
        />
      ))}

      {visibleCount < posts.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleSeeMorePosts}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            See more posts
          </button>
        </div>
      )}
    </div>
  );
}
