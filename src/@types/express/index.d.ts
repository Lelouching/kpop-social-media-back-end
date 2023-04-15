import { MusicalGroup } from "../../entities/musicalGroup.entities";

declare global{
    namespace Express{
        interface Request{
            musicalGroup: MusicalGroup
        }
    }
}