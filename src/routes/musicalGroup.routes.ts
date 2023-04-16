import { musicalGroupCreateSchema } from "./../schemas/musicalGroup.schema"
import { Router } from "express"
import { createMusicalGroupController, getMusicalGroupsController } from "../controllers/musicalGroup.controllers"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { ifMusicalGroupAlreadyExistsMiddleware } from "../middlewares/ifMusicalGroupAlreadyExists.middleware"
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware"
import { ifIsAdminMiddleware } from "../middlewares/ifIsAdmin.middleware"

export const musicalGroupRouter: Router = Router()

musicalGroupRouter.post("", validateBodyMiddleware(musicalGroupCreateSchema), validateTokenMiddleware,
ifIsAdminMiddleware, ifMusicalGroupAlreadyExistsMiddleware, createMusicalGroupController)
musicalGroupRouter.get("", getMusicalGroupsController)