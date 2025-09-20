import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface Props {
  onNewPostClick: () => void;
  onReviewPostClick: () => void;
}

export default function FeedHeader({
  onNewPostClick,
  onReviewPostClick,
}: Props) {
  const [activeTab, setActiveTab] = useState<"popular" | "review" | "new">(
    "popular"
  );

  return (
    <div className="flex items-center justify-between border-b bg-white p-2 mb-4 rounded">
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("popular")}
          className={`px-3 py-1 rounded ${
            activeTab === "popular"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          পপুলার পাস
        </button>

        <button
          onClick={() => {
            setActiveTab("review");
            onReviewPostClick();
          }}
          className={`px-3 py-1 rounded ${
            activeTab === "review"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          রিভউ পাস
        </button>

        <button
          onClick={() => {
            setActiveTab("new");
            onNewPostClick();
          }}
          className={`flex items-center gap-1 px-3 py-1 rounded ${
            activeTab === "new" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
          }`}
        >
          নতুন পোস্ট করুন
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
