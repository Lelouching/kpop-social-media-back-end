import { Repository } from "typeorm"
import { MusicalGroup } from "../../entities/musicalGroup.entities"
import { AppDataSource } from "../../data-source"

export const deleteMusicalGroupByIdService = async (musicalGroupId: number): Promise<void> => {
    const musicalGroupRepo: Repository<MusicalGroup> = AppDataSource.getRepository(MusicalGroup)

    await musicalGroupRepo.delete({
        id: musicalGroupId
    })
}