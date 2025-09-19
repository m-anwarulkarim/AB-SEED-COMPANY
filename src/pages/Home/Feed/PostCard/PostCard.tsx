import type { Post } from "@/type/types";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import ShareButton from "./ShareButton";

interface Props {
  post: Post;
  onLike?: (postId: number, liked: boolean) => void;
  onAddComment?: (postId: number, commentText: string) => void;
  onShare?: (postId: number) => void;
}

export default function PostCard({
  post,
  onLike,
  onAddComment,
  onShare,
}: Props) {
  return (
    <article className="bg-white rounded shadow mb-6 overflow-hidden">
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
      </div>

      <div className="px-4 pb-4">
        <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
        {(post.images || []).length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            {(post.images || []).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`post-${post.id}-${idx}`}
                className="w-full h-48 object-cover rounded"
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
          <div>{post.likes} likes</div>
          <div>
            {post.comments.length} comments · {post.shares} shares
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 border-t pt-3">
          <LikeButton postId={post.id} onLike={onLike} />
          <CommentButton
            postId={post.id}
            comments={post.comments}
            onAddComment={onAddComment}
          />
          <ShareButton postId={post.id} onShare={onShare} />
        </div>
      </div>
    </article>
  );
}
