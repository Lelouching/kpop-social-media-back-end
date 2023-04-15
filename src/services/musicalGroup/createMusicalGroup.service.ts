import { Repository } from "typeorm";
import { MusicalGroup } from "../../entities/musicalGroup.entities";
import { iMusicalGroupCreate } from "../../interfaces/musicalGroup.interface";
import { AppDataSource } from "../../data-source";

export const createMusicaGroupService = async (musicalGroupData: iMusicalGroupCreate): Promise<MusicalGroup> => {
    const musicalGroupRepo: Repository<MusicalGroup> = AppDataSource.getRepository(MusicalGroup)

    const musicalGroup: MusicalGroup = musicalGroupRepo.create(musicalGroupData)

    await musicalGroupRepo.save(musicalGroup)

    return musicalGroup
}