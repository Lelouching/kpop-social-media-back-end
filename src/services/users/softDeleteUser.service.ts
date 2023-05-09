import { Repository } from "typeorm"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"
import { iUserInfo } from "../../interfaces/users.interface"
import { AppError } from "../../errors"

export const softDeleteUserService = async (userId: number, user: iUserInfo): Promise<void> => {
    if(user.deletedAt){
        throw new AppError("User already deleted", 400)
    }

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    await userRepo.softDelete({
        id: userId
    })
}