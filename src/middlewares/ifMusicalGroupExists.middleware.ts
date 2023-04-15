import { NextFunction, Request, Response } from "express";
import { MusicalGroup } from "../entities/musicalGroup.entities";
import { getMusicalGroupByNameService } from "../services/musicalGroup/getMusicalGroupByName.service";

export const ifMusicalGroupExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const musicalGroup: MusicalGroup | null = await getMusicalGroupByNameService(req.body.musicalGroup)

    if(!musicalGroup){
        return res.status(404).json({
            message: "Musical Group does not exist"
        })
    }

    req.musicalGroup = musicalGroup

    return next()
}