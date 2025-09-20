import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onPost: (content: string, images?: string[], videos?: string[]) => void;
}

export default function NewPostComposer({ onPost }: Props) {
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  const handlePost = () => {
    if (!text.trim()) return;
    onPost(text, images, videos);
    setText("");
    setImages([]);
    setVideos([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const urls = files.map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...urls]);
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const urls = files.map((f) => URL.createObjectURL(f));
    setVideos((prev) => [...prev, ...urls]);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6 flex flex-col gap-2">
      <textarea
        className="border rounded p-2 resize-none w-full"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
      />

      {/* Preview Images */}
      {images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <img key={i} src={img} className="w-20 h-20 object-cover rounded" />
          ))}
        </div>
      )}

      {/* Preview Videos */}
      {videos.length > 0 && (
        <div className="flex gap-2 overflow-x-auto">
          {videos.map((vid, i) => (
            <video
              key={i}
              src={vid}
              controls
              className="w-32 h-20 object-cover rounded"
            />
          ))}
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <label className="cursor-pointer p-1 border rounded hover:bg-gray-100">
            📷
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          <label className="cursor-pointer p-1 border rounded hover:bg-gray-100">
            🎥
            <input
              type="file"
              multiple
              accept="video/*"
              className="hidden"
              onChange={handleVideoUpload}
            />
          </label>
        </div>

        <Button onClick={handlePost}>Post</Button>
      </div>
    </div>
  );
}
