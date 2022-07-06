import { Router } from "express";
import userController from "../controllers/userController.js";
import validCreateUser from "../middlewares/validInputCreateUser.js";

const userRouter = Router();

userRouter.post("/sign-up", validCreateUser ,userController.createUser)



export default userRouter;