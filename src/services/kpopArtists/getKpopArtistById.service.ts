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

    return kpopArtist
}