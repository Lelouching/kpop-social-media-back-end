import { Repository } from "typeorm"
import { User } from "../../entities/users.entities"
import { iUserCreate, iUserInfo } from "../../interfaces/users.interface"
import { AppDataSource } from "../../data-source"
import { userInfoSchema } from "../../schemas/users.schema"

export const createUserService = async (userData: iUserCreate): Promise<iUserInfo> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepo.create(userData)

    await userRepo.save(user)

    return userInfoSchema.parse(user)
}