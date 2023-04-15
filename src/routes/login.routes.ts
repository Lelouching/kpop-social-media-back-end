import { Router } from "express"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { userLoginSchema } from "../schemas/login.schema"
import { loginUserController } from "../controllers/login.controllers"

export const loginRouter: Router = Router()

loginRouter.post("", validateBodyMiddleware(userLoginSchema), loginUserController)
