import { Router } from "express"
import { createUserController } from "../controllers/users.controllers"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { userCreateSchema } from "../schemas/users.schema"
import { ifEmailExistsMiddleware } from "../middlewares/ifEmailExists.middleware"
import { ifUsernameExistsMiddleware } from "../middlewares/ifUsernameExists.middleware"

export const userRouter: Router = Router()

userRouter.post("", validateBodyMiddleware(userCreateSchema), ifEmailExistsMiddleware, ifUsernameExistsMiddleware, createUserController)
