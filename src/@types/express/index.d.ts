import { MusicalGroup } from "../../entities/musicalGroup.entities";
import { iUserRequestInfo } from "../../interfaces/users.interface";

declare global{
    namespace Express{
        interface Request{
            musicalGroup: MusicalGroup,
            userToken: iUserRequestInfo,
            userId: iUserRequestInfo
        }
    }
}