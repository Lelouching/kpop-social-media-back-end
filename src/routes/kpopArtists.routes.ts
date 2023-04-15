import { createKpopArtistController, getKpopArtistsController } from "../controllers/kpopArtists.controllers"
import { ifMusicalGroupExistsMiddleware } from "../middlewares/ifMusicalGroupExists.middleware"
import { kpopArtistCreateSchema } from "../schemas/kpopArtists.schema"
import { validateBodyMiddleware } from "./../middlewares/validateBody.middleware"
import { Router } from "express"

export const kpopArtistsRouter: Router = Router()

kpopArtistsRouter.post("", validateBodyMiddleware(kpopArtistCreateSchema), 
ifMusicalGroupExistsMiddleware, createKpopArtistController)
kpopArtistsRouter.get("", getKpopArtistsController)