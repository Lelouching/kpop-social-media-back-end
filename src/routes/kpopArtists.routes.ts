import { createKpopArtistController, getKpopArtistsController } from "../controllers/kpopArtists.controllers"
import { ifIsAdminMiddleware } from "../middlewares/ifIsAdmin.middleware"
import { ifMusicalGroupExistsMiddleware } from "../middlewares/ifMusicalGroupExists.middleware"
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware"
import { kpopArtistCreateSchema } from "../schemas/kpopArtists.schema"
import { validateBodyMiddleware } from "./../middlewares/validateBody.middleware"
import { Router } from "express"

export const kpopArtistsRouter: Router = Router()

kpopArtistsRouter.post("", validateBodyMiddleware(kpopArtistCreateSchema), validateTokenMiddleware,
ifIsAdminMiddleware, ifMusicalGroupExistsMiddleware, createKpopArtistController)
kpopArtistsRouter.get("", getKpopArtistsController)