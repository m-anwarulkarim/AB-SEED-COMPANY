import { Outlet } from "react-router";
import Footer from "./Footert";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
