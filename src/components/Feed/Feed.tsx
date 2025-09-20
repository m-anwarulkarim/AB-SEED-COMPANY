import { useState } from "react";
import type { Post } from "@/type/types";
import type { Review } from "@/type/reviewTypes";
import PostCard from "./PostCard";
import FeedHeader from "../FeedHeader/FeedHeader";
import useFeed from "./useFeed";
import FeedComposer from "./FeedComposer"; // image/video post
import ReviewComposer from "../ReviewPost/ReviewComposer";

export default function Feed() {
  const {
    posts,
    seeMorePosts,
    addPost,
    toggleLike,
    addComment,
    sharePost,
    hasMore,
  } = useFeed();

  // State for which tab/composer is active
  const [activeComposer, setActiveComposer] = useState<
    "none" | "new" | "review"
  >("none");

  const [reviews, setReviews] = useState<Review[]>([]);

  const handleNewPostClick = () => setActiveComposer("new");
  const handleReviewPostClick = () => setActiveComposer("review");

  const handleAddReview = (review: Review) => {
    setReviews((prev) => [review, ...prev]);
    setActiveComposer("none");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Feed Header */}
      <FeedHeader
        onNewPostClick={handleNewPostClick}
        onReviewPostClick={handleReviewPostClick}
      />

      {/* Composer */}
      {activeComposer === "new" && <FeedComposer />}
      {activeComposer === "review" && (
        <ReviewComposer onAddReview={handleAddReview} />
      )}

      {/* Posts List */}
      {posts.length > 0 && (
        <div className="flex flex-col gap-4">
          {posts.map((post: Post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={toggleLike}
              onAddComment={addComment}
              onShare={sharePost}
            />
          ))}
        </div>
      )}

      {/* Review List */}
      {reviews.length > 0 && (
        <div className="flex flex-col gap-4 mt-4">
          {reviews.map((r) => (
            <div key={r.id} className="border p-3 rounded bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={r.avatar}
                  alt={r.author}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="font-semibold">{r.author}</div>
                  <div className="text-xs text-gray-500">
                    {new Date(r.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="font-semibold mb-1">{r.title}</div>
              <div className="mb-2">{r.text}</div>
            </div>
          ))}
        </div>
      )}

      {/* See More */}
      {hasMore && (
        <div className="text-center mt-4">
          <button
            onClick={seeMorePosts}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            See more posts
          </button>
        </div>
      )}
    </div>
  );
}
