import { Router } from "express";
import { addProduct, getProduct } from "../Controllers/Products.js";
import upload, { handleMulterError } from "../middlewares/multer.js";

const productsRouter= Router()
productsRouter.get("/",getProduct)
productsRouter.post("/add-product",upload.single("image")  , handleMulterError,addProduct )
export default productsRouter 