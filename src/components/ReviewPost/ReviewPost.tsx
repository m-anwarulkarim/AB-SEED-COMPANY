import { useState } from "react";
import type { Review } from "@/type/reviewTypes";

interface Props {
  onAddReview: (newReview: Review) => void; // parent থেকে review handle করার জন্য
}

export default function ReviewPost({ onAddReview }: Props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const handlePost = () => {
    if (!text.trim()) return;

    const newReview: Review = {
      id: Date.now(),
      author: "You",
      avatar: "https://i.pravatar.cc/150?img=10", // placeholder avatar
      createdAt: new Date().toISOString(),
      rating,
      title,
      text,
      images: [],
      videos: [],
    };

    onAddReview(newReview); // parent component-এ পাঠানো হবে
    setTitle("");
    setText("");
    setRating(5);
  };

  return (
    <div className="border p-3 rounded bg-white shadow-sm flex flex-col gap-2 mb-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Review Title"
        className="border rounded px-2 py-1"
      />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        className="border rounded px-2 py-1 resize-none"
        rows={3}
      />

      <div>
        Rating:{" "}
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border rounded px-1 py-0.5"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handlePost}
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Post Review
      </button>
    </div>
  );
}
