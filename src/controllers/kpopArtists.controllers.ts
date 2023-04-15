import { Request, Response } from "express";
import { Artist } from "../entities/kpopArtists.entities";
import { createKpopArtistService } from "../services/kpopArtists/createKpopArtist.service";

export const createKpopArtistController = async (req: Request, res: Response): Promise<Response> => {
    const kpopArtist: Artist = await createKpopArtistService(req.body, req.musicalGroup)

    return res.status(201).json(kpopArtist)
}