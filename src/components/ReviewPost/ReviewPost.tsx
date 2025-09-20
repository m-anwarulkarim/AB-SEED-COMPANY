import { useState } from "react";
import type { Review } from "@/type/reviewTypes";
import type { FormEvent } from "react";

interface Props {
  onAddReview: (newReview: Review) => void; // parent থেকে review handle করার জন্য
}

export default function ReviewPost({ onAddReview }: Props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const RATING_OPTIONS = [5, 4, 3, 2, 1];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // ফর্ম সাবমিট হলে পেজ রিলোড হওয়া আটকায়
    if (!title.trim() || !text.trim()) return; // টাইটেল এবং টেক্সট উভয়ই চেক করা হচ্ছে

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
    <form
      onSubmit={handleSubmit}
      className="border p-4 rounded bg-white shadow-sm flex flex-col gap-3 mb-6"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="রিভিউ টাইটেল"
        className="border rounded px-3 py-2 w-full"
        required
      />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="আপনার রিভিউ লিখুন..."
        className="border rounded px-3 py-2 w-full resize-none"
        rows={3}
        required
      />

      <div className="flex items-center gap-2">
        <label htmlFor="rating-select">রেটিং:</label>
        <select
          id="rating-select"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {RATING_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n} স্টার
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 self-start"
      >
        পোস্ট করুন
      </button>
    </form>
  );
}
