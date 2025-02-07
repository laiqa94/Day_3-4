import { Products } from ">> @/types/products";

export const getWishlistItems = () => {
    console.log("Fetching wishlist items");
}
export const moveAllToCart = () => {
    console.log("All items moved to cart");
}

export const addToCart = (product?: Products) => {
  console.log("Items added to cart")
}

export const removeFromWishlist = (productId?: string) => {
    console.log("Item removed from cart")
}
