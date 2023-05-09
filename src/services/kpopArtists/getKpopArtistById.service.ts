import { Repository } from "typeorm";
import { Artist } from "../../entities/kpopArtists.entities";
import { AppDataSource } from "../../data-source";

export const getKpopArtistByIdService = async (kpopArtistId: number): Promise<Artist | null> => {
    const kpopArtistRepo: Repository<Artist> = AppDataSource.getRepository(Artist)

    const kpopArtist: Artist | null = await kpopArtistRepo.findOne({
        where: {
            id: kpopArtistId
        },
        relations: {
            musicalGroup: {
                kpopArtists: true
            }
        }
    })

    if(kpopArtist){
        kpopArtist.musicalGroup.kpopArtists.forEach((artist: Artist, index: number) => {
            if(artist.id === kpopArtist.id){
                kpopArtist.musicalGroup.kpopArtists.splice(index, 1)
            }
        })
    }

    return kpopArtist
}