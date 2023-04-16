import "dotenv/config"
import { Repository } from "typeorm"
import { iUserLogin, iUserLoginReturn } from "../../interfaces/login.interface"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { compare } from "bcryptjs"
import { userInfoSchema } from "../../schemas/users.schema"
import { sign } from "jsonwebtoken"

export const loginUserService = async (userData: iUserLogin): Promise<iUserLoginReturn> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.createQueryBuilder().
    where("LOWER(email) = :email", { email: userData.email.toLowerCase() }).
    withDeleted().
    getOne()

    if(!user){
        throw new AppError("Invalid credentials", 401)
    }

    if(user.deletedAt){
        throw new AppError("Banned from the application", 403)
    }

    const comparePassword: boolean = await compare(userData.password, user.password)

    if(!comparePassword){
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = sign(
        {
            email: user.email,
            admin: user.admin
        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id)
        }
    )

    return {
        token,
        user: userInfoSchema.parse(user)
    }
}