import Cart from "../Schemas/Cart.js";
import Product from "../Schemas/ProductSchema.js";
export const addToCart = async (req, res) => {
  const userId = req.user?._id;
  const { productId, price, shipping } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ error: "Missing userId or productId" });
  }

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({
        userId,
        products: [],
        totalPrice: 0,
        totalShipping: 0,
      });
    }

    const existingProduct = cart.products.find(
      (p) => p.item.toString() === productId
    );

    if (existingProduct) existingProduct.qty += 1;
    else
      cart.products.push({
        item: productId,
        price,
        shipping,
        qty: 1,
      });

    cart.totalPrice = cart.products.reduce((sum, p) => sum + p.price * p.qty, 0);
    cart.totalShipping = cart.products.reduce((sum, p) => sum + p.shipping, 0);

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ error: "Not logged in" });

    let cart = await Cart.findOne({ userId }).populate("products.item");
    if (!cart)
      cart = { userId, products: [], totalPrice: 0, totalShipping: 0 };
    else cart = cart.toObject();

    res.status(200).json({ cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};
