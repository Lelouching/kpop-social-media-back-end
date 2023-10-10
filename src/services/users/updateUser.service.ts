import { DeepPartial, Repository } from "typeorm";
import { iUserInfo, iUserRequestInfo, iUserReturnUpdate } from "../../interfaces/users.interface";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { userUpdateReturnSchema } from "../../schemas/users.schema";
import { AppError } from "../../errors";
import { hash } from "bcryptjs";

export const updateUserService = async (oldUserInfo: iUserInfo, newUserInfo: any, userToken: iUserRequestInfo): Promise<iUserReturnUpdate> => {
    if(!userToken.admin && newUserInfo?.admin){
        throw new AppError("only an admin can set another user as admin", 403)
    }

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    if(newUserInfo?.password){
        newUserInfo.password = await hash(newUserInfo.password, 10)
    }

    const oldUserInfoParse: iUserReturnUpdate = userUpdateReturnSchema.parse(oldUserInfo)

    const user: iUserReturnUpdate = await userRepo.save({...oldUserInfoParse, ...newUserInfo})

    return user
}