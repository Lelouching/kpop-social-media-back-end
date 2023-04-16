import { Artist } from "./../../entities/kpopArtists.entities"
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { iKpopArtistList } from "../../interfaces/kpopArtists.interface";

export const getKpopArtistsService = async (pageQuery: number, perPageQuery: number, orderQuery: string, sortQuery: string): Promise<iKpopArtistList> => {
    const kpopArtistRepo: Repository<Artist> = AppDataSource.getRepository(Artist)

    let page: number = pageQuery || 1
    let perPage: number = perPageQuery || 10

    if(page < 0){
        page = 1
    }

    if(perPage < 1 || perPage > 10){
        perPage = 10
    }

    let order: string = orderQuery || "desc"
    let sort: string = sortQuery || "averagePoints"

    const requiredOrderString: string[] = ["asc", "desc"]
    const requiredSortString: string[] = ["vocal", "dance", "standardKorean", "popularity", "rap", "stagePresence", "averagePoints"]

    const validateOrder: boolean = requiredOrderString.some((key: string) => order.toLowerCase().includes(key))
    const validateSort: boolean = requiredSortString.some((key: string) => {
        if(sort.toLowerCase().includes(key.toLowerCase())){
            sort = key
            return true
        }
        return false
    })

    if(!validateOrder) {
        order = "desc"
    }

    if(!validateSort) {
        sort = "averagePoints"
    }

    let ordenation: any = {}

    if(sort === "vocal") ordenation = { vocal: order }

    if(sort === "dance") ordenation = { dance: order }

    if(sort === "standardKorean") ordenation = { standardKorean: order }

    if(sort === "popularity") ordenation = { popularity: order }

    if(sort === "rap") ordenation = { rap: order }

    if(sort === "stagePresence") ordenation = { stagePresence: order }

    if(sort === "averagePoints") ordenation = { averagePoints: order }
    
    const kpopArtists: Artist[] = await kpopArtistRepo.find({
        relations: {
            musicalGroup: true
        } ,
        skip: (page - 1) * perPage,
        take: perPage,
        order: ordenation
    })

    const kpopArtistNextPage: Artist[] = await kpopArtistRepo.find({
        skip: page * perPage,
        take: perPage
    })

    const countKpopArtist: Artist[] = await kpopArtistRepo.find()

    return {
        previous: page - 2 < 0 ? null : `http://localhost:3000/kpopArtists?page${page - 2}&perPage${perPage}`,
        next: !kpopArtistNextPage.length ? null : `http://localhost:3000/kpopArtists?page${page}&perPage${perPage}`,
        count: countKpopArtist.length,
        data: kpopArtists
    }
}