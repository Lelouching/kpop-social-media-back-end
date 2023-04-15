import { Repository } from "typeorm";
import { Artist } from "../../entities/kpopArtists.entities";
import { iKpopArtistCreate } from "../../interfaces/kpopArtists.interface";
import { AppDataSource } from "../../data-source";
import { MusicalGroup } from "../../entities/musicalGroup.entities";

export const createKpopArtistService = async (kpopArtistData: iKpopArtistCreate, musicalGroup: MusicalGroup): Promise<Artist> => {
    const kpopArtistRepo: Repository<Artist> = AppDataSource.getRepository(Artist)

    const kpopArtist: Artist = kpopArtistRepo.create({...kpopArtistData, musicalGroup: musicalGroup})

    await kpopArtistRepo.save(kpopArtist)

    return kpopArtist
}