import { NextFunction, Request, Response } from "express"
import { MusicalGroup } from "../entities/musicalGroup.entities"
import { getMusicalGroupByNameService } from "../services/musicalGroup/getMusicalGroupByName.service"

export const ifMusicalGroupAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    const musicalGroup: MusicalGroup | null = await getMusicalGroupByNameService(req.body.name)
    
    if(musicalGroup){
        return res.status(409).json({
            message: "Musical group already exists"
        })
    }

    return next()
}