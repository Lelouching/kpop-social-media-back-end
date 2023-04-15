import { Router } from "express"
import { createUserController } from "../controllers/users.controllers"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { userCreateSchema } from "../schemas/users.schema"
import { ifEmailAlreadyExistsMiddleware } from "../middlewares/ifEmailAlreadyExists.middleware"
import { ifUsernameAlreadyExistsMiddleware } from "../middlewares/ifUsernameAlreadyExists.middleware"

export const userRouter: Router = Router()

userRouter.post("", validateBodyMiddleware(userCreateSchema), ifEmailAlreadyExistsMiddleware, ifUsernameAlreadyExistsMiddleware, createUserController)
