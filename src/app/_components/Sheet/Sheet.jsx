import { Button } from "@/components/ui/button";
import freshCartIcon from "../../../../public/FreshCart Logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors cursor-pointer">
          <FaBars className="text-white " />
        </button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className={`border-b border-gray-100 p-4`}>
            <Image src={freshCartIcon} alt="logo" />
          </SheetTitle>
          <SheetDescription>
            <form className="p-4 border-b border-gray-100">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center"
                >
                  <FaMagnifyingGlass className="text-white" />
                </button>
              </div>
            </form>
          </SheetDescription>
        </SheetHeader>
        <nav className="p-4">
          <div className="space-y-1">
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
              href="/products"
            >
              Shop
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
              href="/categories"
            >
              Categories
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
              href="/brands"
            >
              Brands
            </Link>
          </div>
        </nav>
        <div class="mx-4 border-t border-gray-100"></div>
        <div class="p-4 space-y-1">
          <Link
            class="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
            href="/wishlist"
          >
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <CiHeart />
              </div>
              <span class="font-medium text-gray-700">Wishlist</span>
            </div>
          </Link>
          <Link
            class="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
            href="/cart"
          >
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                <FaShoppingCart />
              </div>
              <span class="font-medium text-gray-700">Cart</span>
            </div>
          </Link>
        </div>
        <div class="mx-4 border-t border-gray-100"></div>
        <div class="p-4 space-y-1">
          <div class="grid grid-cols-2 gap-3 pt-2">
            <Link
              class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
              href="/login"
            >
              Sign In
            </Link>
            <Link
              class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-green-600 text-primary-600 font-semibold hover:bg-green-50 transition-colors"
              href="/register"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <Link
          class="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors"
          href="/contact"
        >
          <div class="w-10 h-10 rounded-full bg-green-100 flex items-center text-green-500 justify-center">
            <FaHeadset />
          </div>
          <div>
            <div class="text-sm font-semibold text-gray-700">Need Help?</div>
            <div class="text-sm text-primary-600">Contact Support</div>
          </div>
        </Link>
      </SheetContent>
    </Sheet>
  );
}
