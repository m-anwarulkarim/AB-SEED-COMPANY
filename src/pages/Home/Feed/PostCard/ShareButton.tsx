import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaCopy, FaSmile } from "react-icons/fa";

interface Props {
  postId: number;
  onShare?: (postId: number) => void;
}

export default function ShareButton({ postId, onShare }: Props) {
  const [open, setOpen] = useState(false);

  const handleShare = (type: string) => {
    onShare?.(postId);
    setOpen(false);
    alert(`Shared via ${type}`);
  };

  return (
    <div className="flex-1 relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex-1 py-2 rounded hover:bg-gray-100"
      >
        ↗ Share
      </button>

      {open && (
        <div className="absolute mt-1 left-0 flex gap-2 bg-white p-2 rounded shadow border z-20">
          <button onClick={() => handleShare("WhatsApp")}>
            <FaWhatsapp />
          </button>
          <button onClick={() => handleShare("Gmail")}>
            <FaEnvelope />
          </button>
          <button onClick={() => handleShare("Copy Link")}>
            <FaCopy />
          </button>
          <button onClick={() => handleShare("Emoji")}>
            <FaSmile />
          </button>
        </div>
      )}
    </div>
  );
}
