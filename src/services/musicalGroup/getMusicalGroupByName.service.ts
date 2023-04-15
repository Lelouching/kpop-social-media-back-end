import { Repository } from "typeorm"
import { MusicalGroup } from "../../entities/musicalGroup.entities"
import { AppDataSource } from "../../data-source"

export const getMusicalGroupByNameService = async (musicalGroupName: string): Promise<MusicalGroup | null> => {
    const musicalGroupRepo: Repository<MusicalGroup> = AppDataSource.getRepository(MusicalGroup)

    const musicalGroup: MusicalGroup | null = await musicalGroupRepo.createQueryBuilder().
    where("LOWER(name) = :name", { name: musicalGroupName.toLowerCase() }).
    getOne()

    return musicalGroup
}