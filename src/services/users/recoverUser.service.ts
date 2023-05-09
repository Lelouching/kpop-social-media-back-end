import { Repository } from "typeorm";
import { AppError } from "../../errors";
import { iUserInfo } from "../../interfaces/users.interface";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";

export const recoverUserService = async (userId: number, user: iUserInfo): Promise<void> => {
    if(!user.deletedAt){
        throw new AppError("User is not deleted", 400)
    }

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    await userRepo.recover({
        id: userId
    })
}