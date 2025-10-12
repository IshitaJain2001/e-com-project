import { Router } from "express";
import { getProfile, login, logout, signup, updateProfile } from "../Controllers/User.js";
import password from "../middlewares/passwordVrification.js";
import upload, { handleMulterError } from "../middlewares/multer.js";

const userRouter= Router()
userRouter.post("/signup",upload.single("picture"), handleMulterError, signup )
userRouter.post("/login", password, login)
userRouter.get("/getProfile", getProfile)
userRouter.post("/logout", logout)
userRouter.put("/updateProfile", upload.single("picture"), handleMulterError, updateProfile);

export default userRouter;