import { Router } from "express";
import { addToCart, getCart } from "../Controllers/Cart.js";
import  authMiddleware from "../middlewares/authmiddleware.js";

const cartRouter=  Router()

cartRouter.post("/add",authMiddleware, addToCart)
cartRouter.get("/get", authMiddleware, getCart)


export default cartRouter;