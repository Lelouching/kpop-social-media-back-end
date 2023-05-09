import { Repository } from "typeorm"
import { MusicalGroup } from "../../entities/musicalGroup.entities"
import { AppDataSource } from "../../data-source"

export const getMusicalGroupByIdService = async (musicalGroupId: number): Promise<MusicalGroup | null> => {
    const musicalGroupRepo: Repository<MusicalGroup> = AppDataSource.getRepository(MusicalGroup)

    const musicalGroup: MusicalGroup | null = await musicalGroupRepo.findOne({
        where: {
            id: musicalGroupId
        },
        relations: {
            kpopArtists: true
        }
    })

    return musicalGroup
}