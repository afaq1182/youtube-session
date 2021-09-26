import { UnauthorizedException } from "@nestjs/common";
import { UserDTO } from "src/DTO/User-DTO";
import { Users } from "src/Entities/User.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Users)
export class UserRepository extends Repository<Users>
{
    async LogIn(userDTO: UserDTO)
    {
        const {username, password} = userDTO;
        const result = await Users.findOne({where: {username}})
        if(result) 
        {
            if(result.password === password)
            {
                return result;
            }
        }
        throw new UnauthorizedException('Wrong Credentials...!!!');
    }
    async createUser(userDTO: UserDTO)
    {
        const {username,password} = userDTO;
        const user = new Users();
        user.username = username;
        user.password = password;
        return await user.save();
    }
}