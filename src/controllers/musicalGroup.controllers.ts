import { Request, Response } from "express"
import { MusicalGroup } from "../entities/musicalGroup.entities"
import { createMusicaGroupService } from "../services/musicalGroup/createMusicalGroup.service"
import { iMusicalGroupList } from "../interfaces/musicalGroup.interface"
import { getMusicalGroupsService } from "../services/musicalGroup/getMusicalGroups.service"
import { deleteMusicalGroupByIdService } from "../services/musicalGroup/deleteMusicalGroupById.service"

export const createMusicalGroupController = async (req: Request, res: Response): Promise<Response> => {
    const musicalGroup: MusicalGroup = await createMusicaGroupService(req.body)
    
    return res.status(201).json(musicalGroup)
}

export const getMusicalGroupsController = async (req: Request, res: Response): Promise<Response> => {
    const musicalGroups: iMusicalGroupList = await getMusicalGroupsService(Number(req.query.page), Number(req.query.perPage), 
    String(req.query.order), String(req.query.sort))

    return res.status(200).json(musicalGroups)
}

export const deleteMusicalGroupController = async (req: Request, res: Response): Promise<Response> => {
    const musicalGroupId: number = Number(req.params.id)
    await deleteMusicalGroupByIdService(musicalGroupId)

    return res.status(204).send()
}

export const getMusicalGroupByIdController = async (req: Request, res: Response): Promise<Response> => {
    const musicalGroup: MusicalGroup = req.musicalGroup

    return res.status(200).json(musicalGroup)
}