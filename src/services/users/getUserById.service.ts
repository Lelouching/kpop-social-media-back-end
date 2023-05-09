import { Repository } from "typeorm"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"
import { userInfoSchema } from "../../schemas/users.schema"
import { iUserInfo } from "../../interfaces/users.interface"

export const getUserByIdService = async (userId: number): Promise<iUserInfo | null> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOne({
        where: {
            id: userId
        },
        withDeleted: true,
        relations: {
            favouriteKpopArtists: true,
            favouriteMusicalGroups: true
        }
    })

    if(!user) return null

    return userInfoSchema.parse(user)
}