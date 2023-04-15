import { Repository } from "typeorm";
import { iUserInfo } from "../../interfaces/users.interface";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { userInfoSchema } from "../../schemas/users.schema";

export const getUserByUsernameService = async (username: string): Promise<iUserInfo | null> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.createQueryBuilder().
    where("LOWER(username) = :username", { username: username.toLowerCase() }).
    getOne()

    if(!user) return null

    return userInfoSchema.parse(user)
}