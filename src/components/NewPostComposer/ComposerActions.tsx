import { Button } from "@/components/ui/button";

interface Props {
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVideoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ImageIcon: React.ReactNode;
  VideoIcon: React.ReactNode;
  onPost: () => void;
}

import UploadButton from "./UploadButton";

export default function ComposerActions({
  onImageUpload,
  onVideoUpload,
  ImageIcon,
  VideoIcon,
  onPost,
}: Props) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex gap-2">
        <UploadButton
          id="imageUpload"
          label="Photo"
          icon={ImageIcon}
          accept="image/*"
          multiple
          onChange={onImageUpload}
        />
        <UploadButton
          id="videoUpload"
          label="Video"
          icon={VideoIcon}
          accept="video/*"
          multiple
          onChange={onVideoUpload}
        />
      </div>

      <Button onClick={onPost}>Post</Button>
    </div>
  );
}
