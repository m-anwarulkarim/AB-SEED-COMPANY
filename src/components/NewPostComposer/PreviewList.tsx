interface Props {
  images: string[];
  videos: string[];
}

export default function PreviewList({ images, videos }: Props) {
  return (
    <>
      {images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-20 h-20 object-cover rounded border dark:border-gray-700"
            />
          ))}
        </div>
      )}

      {videos.length > 0 && (
        <div className="flex gap-2 overflow-x-auto mt-2">
          {videos.map((vid, i) => (
            <video
              key={i}
              src={vid}
              controls
              className="w-28 h-20 rounded border dark:border-gray-700"
            />
          ))}
        </div>
      )}
    </>
  );
}
