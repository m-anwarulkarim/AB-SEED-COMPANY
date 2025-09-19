import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onPost: (content: string, images?: string[]) => void;
}

export default function NewPostComposer({ onPost }: Props) {
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handlePost = () => {
    if (!text.trim()) return;
    onPost(text, images);
    setText("");
    setImages([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const urls = files.map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...urls]);
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
      {images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <img key={i} src={img} className="w-20 h-20 object-cover rounded" />
          ))}
        </div>
      )}
      <div className="flex justify-between items-center">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />
        <Button onClick={handlePost}>Post</Button>
      </div>
    </div>
  );
}
