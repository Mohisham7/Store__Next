// components/Footer.tsx

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  CreditCard,
  Wallet,
  Banknote,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2">
            <span className=" text-lg font-semibold mb-1">
              Store<span className="text-blue-600">_Mohamed</span>
            </span>
          </div>

          <p className="text-sm mt-3 leading-6">
            A trusted online store that offers you the best products at the best
            prices, with secure payment options and fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-black">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/orders/track" className="hover:text-black">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Policies</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-black">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-black">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/return-policy" className="hover:text-black">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Payments */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-black">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-black">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-black">
              <Instagram size={22} />
            </a>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Payment Methods
          </h3>
          <div className="flex space-x-4">
            <CreditCard size={28} />
            <Wallet size={28} />
            <Banknote size={28} />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-300 py-4">
        © {new Date().getFullYear()} Store_Mohamed - All rights reserved
      </div>
    </footer>
  );
}
