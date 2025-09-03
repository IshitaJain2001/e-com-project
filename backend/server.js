 import express from "express"
 import dotenv from "dotenv"
import products from "./Routers/Products"
 dotenv.config()
 const app= express()
app.use(express.json())
app.use("/products", products)
 app.listen(process.env.PORT)