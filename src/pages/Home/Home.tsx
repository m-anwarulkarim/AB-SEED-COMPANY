import Feed from "./Feed/PostCard/Feed";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-72 border-r bg-white overflow-y-auto">
        <SidebarLeft />
      </div>

      <main className="flex-1 overflow-y-auto">
        <Feed />
      </main>

      <div className="w-80 border-l bg-white hidden lg:block">
        <SidebarRight />
      </div>
    </div>
  );
}
