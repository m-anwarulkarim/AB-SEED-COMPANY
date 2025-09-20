import { useState } from "react";
import { FaImage, FaVideo } from "react-icons/fa";
import ComposerActions from "../NewPostComposer/ComposerActions";
import PreviewList from "../NewPostComposer/PreviewList";

export default function FeedComposer() {
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const urls = Array.from(e.target.files).map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...urls]);
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const urls = Array.from(e.target.files).map((f) => URL.createObjectURL(f));
    setVideos((prev) => [...prev, ...urls]);
  };

  const handlePost = () => {
    console.log("Posting:", { images, videos });
    setImages([]);
    setVideos([]);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded shadow mb-6">
      <ComposerActions
        ImageIcon={<FaImage />}
        VideoIcon={<FaVideo />}
        onImageUpload={handleImageUpload}
        onVideoUpload={handleVideoUpload}
        onPost={handlePost}
      />
      <PreviewList images={images} videos={videos} />
    </div>
  );
}
