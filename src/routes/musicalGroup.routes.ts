import { musicalGroupCreateSchema } from "./../schemas/musicalGroup.schema"
import { Router } from "express"
import { createMusicalGroupController } from "../controllers/musicalGroup.controllers"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"

export const musicalGroupRouter: Router = Router()

musicalGroupRouter.post("", validateBodyMiddleware(musicalGroupCreateSchema), createMusicalGroupController)
