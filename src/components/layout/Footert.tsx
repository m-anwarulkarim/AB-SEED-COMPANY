import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">ShopMaster</h3>
          <p className="text-sm mb-4">
            The world's best online store for electronics, fashion, and
            lifestyle.
          </p>
          <div className="flex space-x-3 text-lg">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a key={i} href="#" className="hover:text-white transition">
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Shop", "About Us", "Contact", "Blog"].map((item, i) => (
              <li key={i}>
                <Link to="/" className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Help Center",
              "Returns",
              "Shipping Info",
              "Track Order",
              "FAQ",
            ].map((item, i) => (
              <li key={i}>
                <Link to="/" className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to get the latest updates and offers.
          </p>
          <form className="flex gap-2 flex-col sm:flex-row">
            <Input
              placeholder="Your email"
              className="flex-1 bg-white text-gray-900"
            />
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-500 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopMaster. All rights reserved.
      </div>
    </footer>
  );
}
