import type { CommentItem, Post } from "@/type/types";
import { useState } from "react";

interface Props {
  post: Post;
  onLike?: (postId: number, liked: boolean) => void;
  onAddComment?: (postId: number, commentText: string) => void;
  onShare?: (postId: number) => void;
}

const TRUNCATE_LENGTH = 220;

export default function PostCard({
  post,
  onLike,
  onAddComment,
  onShare,
}: Props) {
  const [liked, setLiked] = useState<boolean>(false);
  const [visibleTextExpanded, setVisibleTextExpanded] =
    useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>("");
  const [visibleComments, setVisibleComments] = useState<number>(
    Math.min(2, post.comments.length)
  );

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onLike?.(post.id, newLiked);
  };

  const handleAddComment = () => {
    const txt = commentText.trim();
    if (!txt) return;
    onAddComment?.(post.id, txt);
    setCommentText("");
    setVisibleComments((v) => v + 1);
  };

  const handleShare = () => {
    onShare?.(post.id);
    // optional: show toast
  };

  const shouldTruncate =
    post.content.length > TRUNCATE_LENGTH && !visibleTextExpanded;
  const displayedText = shouldTruncate
    ? post.content.slice(0, TRUNCATE_LENGTH) + "..."
    : post.content;

  return (
    <article className="bg-white rounded shadow mb-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div className="flex-1">
          <div className="font-semibold">{post.author}</div>
          <div className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </div>
        </div>
        <div className="text-gray-500 text-sm">⋯</div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <p className="text-gray-800 whitespace-pre-wrap">
          {displayedText}
          {post.content.length > TRUNCATE_LENGTH && (
            <button
              onClick={() => setVisibleTextExpanded((s) => !s)}
              className="ml-2 text-blue-600 hover:underline text-sm"
            >
              {visibleTextExpanded ? "Show less" : "See more"}
            </button>
          )}
        </p>

        {/* Images grid */}
        {post.images && post.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            {post.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`post-${post.id}-${idx}`}
                className="w-full h-48 object-cover rounded"
                loading="lazy"
              />
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
          <div>{post.likes + (liked ? 1 : 0)} likes</div>
          <div>
            {post.comments.length} comments · {post.shares} shares
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-3 border-t pt-3">
          <button
            onClick={handleLike}
            className={`flex-1 py-2 rounded hover:bg-gray-100 ${
              liked ? "text-blue-600 font-semibold" : ""
            }`}
          >
            👍 Like
          </button>
          <button
            onClick={() => {
              // focus comment input by id
              const el = document.getElementById(
                `comment-input-${post.id}`
              ) as HTMLInputElement | null;
              el?.focus();
            }}
            className="flex-1 py-2 rounded hover:bg-gray-100"
          >
            💬 Comment
          </button>
          <button
            onClick={handleShare}
            className="flex-1 py-2 rounded hover:bg-gray-100"
          >
            ↗ Share
          </button>
        </div>

        {/* Comments */}
        <div className="mt-3">
          {post.comments.slice(0, visibleComments).map((c: CommentItem) => (
            <div key={c.id} className="flex items-start space-x-3 py-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                {c.author.charAt(0).toUpperCase()}
              </div>
              <div className="bg-gray-100 rounded px-3 py-2">
                <div className="font-semibold text-sm">{c.author}</div>
                <div className="text-sm text-gray-800">{c.text}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {new Date(c.createdAt).toLocaleString()}
                </div>
              </div>
            </div>
          ))}

          {visibleComments < post.comments.length && (
            <button
              onClick={() => setVisibleComments((v) => v + 3)}
              className="text-sm text-blue-600 hover:underline mt-2"
            >
              View more comments
            </button>
          )}

          {/* Add comment */}
          <div className="mt-3 flex items-center space-x-2">
            <input
              id={`comment-input-${post.id}`}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 border rounded px-3 py-2 text-sm"
              placeholder="Write a comment..."
            />
            <button
              onClick={handleAddComment}
              className="px-3 py-2 bg-blue-600 text-white rounded text-sm"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
