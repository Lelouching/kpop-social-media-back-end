import { NextFunction, Request, Response } from "express"
import { MusicalGroup } from "../entities/musicalGroup.entities"
import { getMusicalGroupByIdService } from "../services/musicalGroup/getMusicalGroupById.service"

export const ifMusicalGroupExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const musicalGroupId: number = req.body.musicalGroupId || Number(req.params.id)
    const musicalGroup: MusicalGroup | null = await getMusicalGroupByIdService(musicalGroupId)

    if(!musicalGroup){
        return res.status(404).json({
            message: "Musical Group does not exist"
        })
    }

    req.musicalGroup = musicalGroup

    return next()
}