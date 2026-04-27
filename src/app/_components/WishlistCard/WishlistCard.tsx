import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import React, { useContext, useState } from "react";
import AddtoCart from "../AddtoCart/AddtoCart";
import { FaTrashAlt } from "react-icons/fa";
import { WishListItem } from "@/api/types/wishlist.type";
import { removeItem } from "@/actions/wishlist.actions";
import { toast } from "sonner";
import { CartContext } from "@/context/CartContext";

export default function WishlistCard({
  item,
  deleteItem,
}: {
  item: WishListItem;
  deleteItem: (id: string) => void;
}) {
  const [isdisabled, setisdisabled] = useState<boolean>(false);
  const [isAdded, setisAdded] = useState<boolean>(false);
  const [addedItems, setaddedItems] = useState<string[]>([]);

  const {numOfWishlistItems , setnumOfWishlistItems} = useContext(CartContext)

  async function deleteWishlistItem(id: string) {
    const res = await removeItem(id);

    setisdisabled(true);

    if (res?.status === "success") {
      toast.success(res.message, { duration: 2000, position: "top-center" });
      deleteItem(id);
      setisdisabled(false);
      setnumOfWishlistItems(numOfWishlistItems - 1);
    } else {
      toast.error(res?.message, { duration: 2000, position: "top-center" });
      setisdisabled(false);
    }
  }

  return (
    <div className="divide-y divide-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
        <div className="md:col-span-6 flex items-center gap-4">
          <Link
            className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
            href={`/products/${item.id}`}
          >
            <img
              alt={item.slug}
              className="w-full h-full object-contain p-2"
              src={item.imageCover}
            />
          </Link>

          <div className="min-w-0">
            <Link
              className="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2"
              href={`/products/`}
            >
              Woman Shawl
            </Link>
            <p className="text-sm text-gray-400 mt-1">{item.category.name}</p>
          </div>
        </div>

        <div className="md:col-span-2 flex md:justify-center items-center gap-2">
          <span className="md:hidden text-sm text-gray-500">Price:</span>

          <div className="font-semibold text-gray-900">{item.price} EGP</div>
        </div>

        <div className="md:col-span-2 flex md:justify-center">
          <span className="md:hidden text-sm text-gray-500 mr-2">Status:</span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            In Stock
          </span>
        </div>

        <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
          <div
            onClick={() => {
              setisAdded(true);

              setaddedItems([...addedItems, item.id]);
            }}
          >
            {!isAdded && (
              <AddtoCart
                id={item.id}
                word="Add to Cart"
                classes="flex-1 cursor-pointer md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-green-600 text-white hover:bg-green-700"
              />
            )}

            {isAdded && addedItems.includes(item.id) && (
              <>
                <Link
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                  href="/cart"
                >
                  <FaCheck className="text-green-500" />
                  <span className="md:hidden lg:inline">View Cart</span>
                </Link>
              </>
            )}
          </div>

          <button
            disabled={isdisabled}
            onClick={() => deleteWishlistItem(item.id)}
            className="w-10 h-10 rounded-lg border cursor-pointer border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
