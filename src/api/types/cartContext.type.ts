export type CartContextType = {
  numOfCartItems: number;
  setnumOfCartItems: (num: number) => void;
  getUserCart: () => void;
  numOfWishlistItems: number;
  setnumOfWishlistItems: (num: number) => void;
  getUserWishlist: () => void;
};
