import { useState, type ReactNode } from "react";
import {
  Users,
  LayoutDashboard,
  Newspaper,
  ShoppingBag,
  Video,
  Clock,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Settings,
  Bell,
  HelpCircle,
  Star,
} from "lucide-react";

type MenuItem = {
  label: string;
  icon: ReactNode;
};

const allMenus: MenuItem[] = [
  { label: "Friends", icon: <Users className="w-5 h-5" /> },
  {
    label: "Professional dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  { label: "Feeds", icon: <Newspaper className="w-5 h-5" /> },
  { label: "Groups", icon: <Users className="w-5 h-5" /> },
  { label: "Marketplace", icon: <ShoppingBag className="w-5 h-5" /> },
  { label: "Video", icon: <Video className="w-5 h-5" /> },
  { label: "Memories", icon: <Clock className="w-5 h-5" /> },
  { label: "Saved", icon: <Bookmark className="w-5 h-5" /> },
  { label: "Settings", icon: <Settings className="w-5 h-5" /> },
  { label: "Notifications", icon: <Bell className="w-5 h-5" /> },
  { label: "Help Center", icon: <HelpCircle className="w-5 h-5" /> },
  { label: "Favorites", icon: <Star className="w-5 h-5" /> },
];

export default function SidebarLeft() {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, allMenus.length));
  };

  const handleShowLess = () => {
    setVisibleCount(10);
  };

  return (
    <aside className="p-4 space-y-3 w-64">
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold">Anwarul Karim</span>
      </div>

      {/* Menu Section */}
      {allMenus.slice(0, visibleCount).map((m, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
        >
          {m.icon}
          <span className="text-sm">{m.label}</span>
        </div>
      ))}

      {/* See More Button */}
      {visibleCount < allMenus.length && (
        <div
          onClick={handleSeeMore}
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-blue-600"
        >
          <ChevronDown className="w-5 h-5" />
          <span className="text-sm">See more</span>
        </div>
      )}

      {/* Show Less Button */}
      {visibleCount > 10 && (
        <div
          onClick={handleShowLess}
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-red-600"
        >
          <ChevronUp className="w-5 h-5" />
          <span className="text-sm">Show less</span>
        </div>
      )}
    </aside>
  );
}
