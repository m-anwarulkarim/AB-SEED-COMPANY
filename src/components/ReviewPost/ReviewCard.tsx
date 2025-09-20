import type { Review } from "@/type/reviewTypes";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  return (
    <div className="border p-3 rounded bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <img
          src={review.avatar}
          alt={review.author}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="font-semibold">{review.author}</div>
          <div className="text-xs text-gray-500">
            {new Date(review.createdAt).toLocaleString()}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`text-xl ${
              n <= review.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {review.title && <div className="font-semibold mb-1">{review.title}</div>}
      <div className="mb-2">{review.text}</div>

      {review.images?.length ? (
        <div className="flex gap-2 overflow-x-auto mb-2">
          {review.images.map((img, i) => (
            <img key={i} src={img} className="w-20 h-20 object-cover rounded" />
          ))}
        </div>
      ) : null}

      {review.videos?.length ? (
        <div className="flex gap-2 overflow-x-auto">
          {review.videos.map((vid, i) => (
            <video
              key={i}
              src={vid}
              controls
              className="w-32 h-20 object-cover rounded"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
