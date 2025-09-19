import { useState } from "react";
import type { CommentItem } from "@/type/types";

interface Props {
  postId: number;
  comments: CommentItem[];
  onAddComment?: (postId: number, commentText: string) => void;
}

export default function CommentButton({
  postId,
  comments,
  onAddComment,
}: Props) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handlePost = () => {
    if (!text.trim()) return;
    onAddComment?.(postId, text);
    setText("");
  };

  return (
    <div className="flex-1 relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex-1 py-2 rounded hover:bg-gray-100"
      >
        💬 Comment
      </button>

      {open && (
        <div className="mt-2 p-2 border rounded bg-gray-50">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            className="w-full border rounded px-2 py-1 mb-2"
          />
          <button
            onClick={handlePost}
            className="px-2 py-1 bg-blue-600 text-white rounded text-sm"
          >
            Post
          </button>
          <div className="mt-2 max-h-32 overflow-y-auto">
            {comments.map((c) => (
              <div key={c.id} className="text-sm py-1 border-b last:border-b-0">
                <span className="font-semibold">{c.author}: </span>
                {c.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
