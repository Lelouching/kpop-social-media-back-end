import { NextFunction, Request, Response } from "express";
import { getKpopArtistByIdService } from "../services/kpopArtists/getKpopArtistById.service";
import { Artist } from "../entities/kpopArtists.entities";

export const ifKpopArtistExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const kpopArtistId: number = Number(req.params.id)
    const ifKpopArtistExists: Artist | null = await getKpopArtistByIdService(kpopArtistId)

    if(!ifKpopArtistExists){
        return res.status(404).json({
            message: "Kpop artist not found"
        })
    }

    req.kpopArtist = ifKpopArtistExists

    return next()
}