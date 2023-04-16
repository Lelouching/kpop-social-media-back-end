import { Repository } from "typeorm";
import { iMusicalGroupList } from "../../interfaces/musicalGroup.interface";
import { MusicalGroup } from "../../entities/musicalGroup.entities";
import { AppDataSource } from "../../data-source";

export const getMusicalGroupsService = async (pageQuery: number, perPageQuery: number): Promise<iMusicalGroupList> => {
    const musicalGroupRepo: Repository<MusicalGroup> = AppDataSource.getRepository(MusicalGroup)

    let page = pageQuery || 1
    let perPage = perPageQuery || 5

    if(page < 1){
        page = 1
    }

    if(perPage < 1 || perPage > 5){
        perPage = 5
    }

    const musicalGroups: MusicalGroup[] = await musicalGroupRepo.find({
        relations: {
            kpopArtists: true
        },
        skip: perPage * (page - 1),
        take: perPage
    })

    const musicalGroupNextPage: MusicalGroup[] = await musicalGroupRepo.find({
        skip: perPage * page,
        take: perPage
    })

    const musicalGroupCount: MusicalGroup[] = await musicalGroupRepo.find()

    return {
        previous: page - 2 < 0 ? null : `http://localhost:3000/musicalGroup?page=${page - 2}&perPage=${perPage}`,
        next: !musicalGroupNextPage.length ? null : `http://localhost:3000/musicalGroup?page=${page}&perPage=${perPage}`,
        count: musicalGroupCount.length,
        data: musicalGroups
    }
}