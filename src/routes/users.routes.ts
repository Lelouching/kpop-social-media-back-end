import { Router } from "express"
import { createUserController, deleteUserController, getUserByIdController, recoverUserByIdController } from "../controllers/users.controllers"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { userCreateSchema } from "../schemas/users.schema"
import { ifEmailAlreadyExistsMiddleware } from "../middlewares/ifEmailAlreadyExists.middleware"
import { ifUsernameAlreadyExistsMiddleware } from "../middlewares/ifUsernameAlreadyExists.middleware"
import { ifHasPermissionMiddleware } from "../middlewares/ifHasPermission.middleware"
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware"
import { ifUserExistsMiddleware } from "../middlewares/ifUserExists.middleware"
import { ifIsAdminMiddleware } from "../middlewares/ifIsAdmin.middleware"

export const userRouter: Router = Router()

userRouter.post("", validateBodyMiddleware(userCreateSchema), ifEmailAlreadyExistsMiddleware, ifUsernameAlreadyExistsMiddleware, createUserController)
userRouter.delete("/:id", validateTokenMiddleware, ifUserExistsMiddleware, ifHasPermissionMiddleware, deleteUserController)
userRouter.get("/:id", ifUserExistsMiddleware, getUserByIdController)
userRouter.put("/:id/recover", validateTokenMiddleware, ifUserExistsMiddleware, ifIsAdminMiddleware, recoverUserByIdController)