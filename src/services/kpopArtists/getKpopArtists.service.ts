import { Artist } from "./../../entities/kpopArtists.entities"
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { iKpopArtistList } from "../../interfaces/kpopArtists.interface";

export const getKpopArtistsService = async (pageQuery: number, perPageQuery: number): Promise<iKpopArtistList> => {
    const kpopArtistRepo: Repository<Artist> = AppDataSource.getRepository(Artist)

    let page: number = pageQuery || 1
    let perPage: number = perPageQuery || 5

    if(page < 0){
        page = 1
    }

    if(perPage < 1 || perPage > 5){
        perPage = 5
    }    
    
    const kpopArtists: Artist[] = await kpopArtistRepo.find({
        relations: {
            musicalGroup: true
        },
        skip: (page - 1) * perPage,
        take: perPage
    })

    const kpopArtistNextPage: Artist[] = await kpopArtistRepo.find({
        skip: page * perPage,
        take: perPage
    })

    const countKpopArtist: Artist[] = await kpopArtistRepo.find()

    return {
        previous: page - 2 < 0 ? null : `http://localhost:3000/kpopArtists?page${page - 2}&perPage${perPage}`,
        next: kpopArtistNextPage.length === 0 ? null : `http://localhost:3000/kpopArtists?page${page}&perpPage${perPage}`,
        count: countKpopArtist.length,
        data: kpopArtists
    }
}