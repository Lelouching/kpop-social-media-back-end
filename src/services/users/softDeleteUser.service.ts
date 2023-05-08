import { Repository } from "typeorm"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"

export const softDeleteUserService = async (userId: number): Promise<void> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    await userRepo.softDelete({
        id: userId
    })
}