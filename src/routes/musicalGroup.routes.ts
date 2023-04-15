import { musicalGroupCreateSchema } from "./../schemas/musicalGroup.schema"
import { Router } from "express"
import { createMusicalGroupController, getMusicalGroupsController } from "../controllers/musicalGroup.controllers"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { ifMusicalGroupAlreadyExistsMiddleware } from "../middlewares/ifMusicalGroupAlreadyExists.middleware"

export const musicalGroupRouter: Router = Router()

musicalGroupRouter.post("", validateBodyMiddleware(musicalGroupCreateSchema), 
ifMusicalGroupAlreadyExistsMiddleware, createMusicalGroupController)
musicalGroupRouter.get("", getMusicalGroupsController)