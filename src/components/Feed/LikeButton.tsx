import { useState } from "react";
import {
  FaThumbsUp,
  FaHeart,
  FaLaugh,
  FaSurprise,
  FaSadTear,
  FaAngry,
} from "react-icons/fa";

interface Props {
  postId: number;
  onLike?: (postId: number, reaction?: string) => void;
}

const reactions = [
  { icon: <FaThumbsUp className="text-blue-600" />, name: "Like" },
  { icon: <FaHeart className="text-red-600" />, name: "Love" },
  { icon: <FaLaugh className="text-yellow-500" />, name: "Haha" },
  { icon: <FaSurprise className="text-yellow-400" />, name: "Wow" },
  { icon: <FaSadTear className="text-blue-300" />, name: "Sad" },
  { icon: <FaAngry className="text-red-700" />, name: "Angry" },
];

export default function LikeButton({ postId, onLike }: Props) {
  const [liked, setLiked] = useState(false);
  const [hover, setHover] = useState(false);

  // যদি শুধুই সাধারণ লাইক হয়
  const handleLike = (reactionName?: string) => {
    setLiked(!liked);
    onLike?.(postId, reactionName);
    setHover(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => handleLike()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`flex-1 py-2 rounded hover:bg-gray-100 ${
          liked ? "text-blue-600 font-semibold" : ""
        }`}
      >
        👍 Like
      </button>

      {hover && (
        <div className="absolute -top-12 left-0 flex gap-2 bg-white p-1 rounded shadow border z-20">
          {reactions.map((r, idx) => (
            <button
              key={idx}
              onClick={() => handleLike(r.name)}
              className="p-1 hover:scale-110 transition"
            >
              {r.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
