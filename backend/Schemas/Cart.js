import { Schema, model } from "mongoose";

const cartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        item: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        price: { type: Number, required: true },
        qty: { type: Number, default: 1 },
        shipping: { type: Number, default: 0 },
      },
    ],
    totalPrice: { type: Number, default: 0 },
    totalShipping: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Cart = model("carts", cartSchema);
export default Cart;
