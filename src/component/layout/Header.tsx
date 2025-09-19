import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaStore,
  FaShoppingCart,
  FaBullhorn,
  FaBell,
  FaUser,
  FaSearch,
  FaCommentDots,
  FaThumbsUp,
  FaHeart,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className=" mx-auto px-4 py-3">
        {/* --- Large Screen Layout (xl and up) --- */}
        <div className="hidden xl:flex items-center   justify-between w-full  ">
          <div>
            {/* Left Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-green-600 flex-shrink-0"
            >
              <div className="flex items-center gap-1 border border-green-600 rounded-full p-2">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
                />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold whitespace-nowrap">
                Ab Seed Company
              </span>
            </Link>
          </div>

          <div>
            {/* Middle Nav: 6 icons always in one row */}
            <nav className="flex flex-nowrap justify-center gap-4 sm:gap-5 lg:gap-6 text-center flex-shrink-0">
              <Link
                to="/"
                className="flex flex-col items-center text-xs sm:text-sm lg:text-base text-gray-700 hover:text-green-600 flex-shrink-0"
              >
                <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                  <div className="absolute top-0 left-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center rounded-full border border-green-600 text-green-600 bg-white">
                    <FaCommentDots className="w-3 h-3 lg:w-4 lg:h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full border border-green-600 text-green-600 bg-white">
                    <FaThumbsUp className="w-2 h-2 lg:w-3 lg:h-3" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full border border-green-600 text-green-600 bg-white">
                    <FaHeart className="w-2 h-2 lg:w-3 lg:h-3" />
                  </div>
                </div>
                <span></span>
              </Link>

              <Link
                to="/all"
                className="flex flex-col items-center text-xs sm:text-sm lg:text-base text-gray-700 hover:text-green-600 flex-shrink-0"
              >
                <FaStore className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                <span>সকল পণ্য</span>
              </Link>

              <Link
                to="/cart"
                className="flex flex-col items-center text-xs sm:text-sm lg:text-base text-gray-700 hover:text-green-600 flex-shrink-0"
              >
                <FaShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                <span>অর্ডার কার্ট</span>
              </Link>

              <Link
                to="/offers"
                className="flex flex-col items-center text-xs sm:text-sm lg:text-base text-gray-700 hover:text-green-600 flex-shrink-0"
              >
                <FaBullhorn className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                <span>নতুন অফার</span>
              </Link>

              <Link
                to="/notifications"
                className="flex flex-col items-center text-xs sm:text-sm lg:text-base text-gray-700 hover:text-green-600 flex-shrink-0"
              >
                <FaBell className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                <span>নোটিফিকেশন</span>
              </Link>

              <Link
                to="/profile"
                className="flex flex-col items-center text-xs sm:text-sm lg:text-base text-gray-700 hover:text-green-600 flex-shrink-0"
              >
                <FaUser className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                <span>প্রোফাইল</span>
              </Link>
            </nav>
          </div>

          {/* Right Search & Help */}
          <div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-2 rounded-full border px-2 py-1">
                <FaSearch className="h-5 w-5 lg:h-6 lg:w-6 text-gray-500" />
                <Input
                  placeholder="খুঁজুন..."
                  className="border-0 focus:ring-0 
                           w-20 sm:w-28 md:w-36 lg:w-44 xl:w-56"
                />
              </div>

              <Button
                variant="outline"
                className="rounded-full flex items-center gap-1 px-2 sm:px-3 text-xs sm:text-sm lg:text-base"
              >
                <FaCommentDots className="h-5 w-5 lg:h-6 lg:w-6" />
                সাহায্য...
              </Button>
            </div>
          </div>
        </div>

        {/* --- Mobile & Tablet Layout (lg and down) --- */}
        <div className="flex flex-col xl:hidden gap-3">
          {/* Top Row: Logo + Search/Help */}
          <div className="flex items-center justify-between w-full flex-shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 text-green-600 flex-shrink-0"
            >
              <div className="flex items-center gap-1 border border-green-600 rounded-full p-2">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="h-6 w-6 sm:h-7 sm:w-7"
                />
              </div>
              <span className="text-base sm:text3xl md:text-3xl  font-bold whitespace-nowrap">
                Ab Seed Company
              </span>
            </Link>

            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-2 rounded-full border px-2 py-1">
                <FaSearch className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
                <Input
                  placeholder="খুঁজুন..."
                  className="border-0 focus:ring-0 w-20 sm:w-28 md:w-32"
                />
              </div>

              <Button
                variant="outline"
                className="rounded-full flex items-center gap-1 px-2 sm:px-3 text-xs sm:text-sm"
              >
                <FaCommentDots className="h-5 w-5 sm:h-6 sm:w-6" />
                সাহায্য...
              </Button>
            </div>
          </div>

          {/* Bottom Row: Nav Icons */}
          <nav className="flex justify-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap overflow-x-auto px-1 no-scrollbar">
            {[
              { label: "", extra: true, to: "/" },
              {
                label: "সকল পণ্য",
                icon: <FaStore className="h-6 w-6" />,
                to: "/products",
              },
              {
                label: "অর্ডার কার্ট",
                icon: <FaShoppingCart className="h-6 w-6" />,
                to: "/cart",
              },
              {
                label: "নতুন অফার",
                icon: <FaBullhorn className="h-6 w-6" />,
                to: "/offers",
              },
              {
                label: "নোটিফিকেশন",
                icon: <FaBell className="h-6 w-6" />,
                to: "/notifications",
              },
              {
                label: "প্রোফাইল",
                icon: <FaUser className="h-6 w-6" />,
                to: "/profile",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="flex flex-col items-center text-xs sm:text-sm text-gray-700 hover:text-green-600 min-w-max flex-shrink-0"
              >
                {item.extra ? (
                  <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11">
                    <div className="absolute top-0 left-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border border-green-600 text-green-600 bg-white">
                      <FaCommentDots className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border border-green-600 text-green-600 bg-white">
                      <FaThumbsUp className="w-2 h-2 sm:w-3 sm:h-3" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border border-green-600 text-green-600 bg-white">
                      <FaHeart className="w-2 h-2 sm:w-3 sm:h-3" />
                    </div>
                  </div>
                ) : (
                  item.icon
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
