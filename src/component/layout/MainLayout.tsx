import { Outlet } from "react-router";
import Footer from "./Footert";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white/70 dark:bg-slate-900/80">
      <Header />
      <div className=" flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
