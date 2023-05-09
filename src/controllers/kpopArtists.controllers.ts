import { Request, Response } from "express";
import { Artist } from "../entities/kpopArtists.entities";
import { createKpopArtistService } from "../services/kpopArtists/createKpopArtist.service";
import { getKpopArtistsService } from "../services/kpopArtists/getKpopArtists.service";
import { iKpopArtistList } from "../interfaces/kpopArtists.interface";
import { deleteKpopArtistService } from "../services/kpopArtists/deleteKpopArtist.service";

export const createKpopArtistController = async (req: Request, res: Response): Promise<Response> => {
    const kpopArtist: Artist = await createKpopArtistService(req.body, req.musicalGroup)

    return res.status(201).json(kpopArtist)
}

export const getKpopArtistsController = async (req: Request, res: Response): Promise<Response> => {
    const kpopArtists: iKpopArtistList = await getKpopArtistsService(Number(req.query.page), 
    Number(req.query.perPage), String(req.query.order), String(req.query.sort))

    return res.status(200).json(kpopArtists)
}

export const deleteKpopArtistsController = async (req: Request, res: Response): Promise<Response> => {
    const kpopArtistId: number = Number(req.params.id)
    await deleteKpopArtistService(kpopArtistId)

    return res.status(204).send()
}

export const getKpopArtistByIdController = async (req: Request, res: Response): Promise<Response> => {
    const kpopArtist: Artist = req.kpopArtist

    return res.status(200).json(kpopArtist)
}