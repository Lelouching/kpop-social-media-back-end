import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Artist } from "../../entities/kpopArtists.entities"

export const deleteKpopArtistService = async (kpopArtistId: number): Promise<void> => {
    const kpopArtistRepo: Repository<Artist> = AppDataSource.getRepository(Artist)

    await kpopArtistRepo.delete({
        id: kpopArtistId
    })
}