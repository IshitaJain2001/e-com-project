import products from "../Schemas/ProductSchema.js"
import fs from "fs";
import cloudinary from "../config/cloudinary.js";

export async function getProduct(req,res){
try {
   const product= await products.find()
   res.json(product)
} catch (error) {
   res.status(500).json({
      error:error
   })
}
 }

 export async function addProduct(req,res){
    
     try {
    
         let imageUrl = "";
         if(req.file){
             const result = await cloudinary.uploader.upload(req.file.path, {
                    folder: "uploads",
                  });

                    imageUrl = result.secure_url;

                          fs.unlinkSync(req.file.path);
         }
    const newProduct = new products({
           productName: req.body.productName,
      productPrice: Number(req.body.productPrice),
      description: req.body.description,
      productCategory: req.body.productCategory,
      productImage: imageUrl,
      productCount: Number(req.body.productCount),
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.log("Product add error:", err);
    res.status(400).json({ error: err.message || "Failed to add product" });
  }
 }