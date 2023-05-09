import { Artist } from "../../entities/kpopArtists.entities";
import { MusicalGroup } from "../../entities/musicalGroup.entities";
import { iUserInfo, iUserRequestInfo } from "../../interfaces/users.interface";

declare global{
    namespace Express{
        interface Request{
            musicalGroup: MusicalGroup,
            kpopArtist: Artist,
            userToken: iUserRequestInfo,
            userId: iUserInfo
        }
    }
}