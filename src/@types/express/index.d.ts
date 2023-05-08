import { MusicalGroup } from "../../entities/musicalGroup.entities";
import { iUserInfo, iUserRequestInfo } from "../../interfaces/users.interface";

declare global{
    namespace Express{
        interface Request{
            musicalGroup: MusicalGroup,
            userToken: iUserRequestInfo,
            userId: iUserInfo
        }
    }
}