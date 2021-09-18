import { UnauthorizedException } from "@nestjs/common";
import { UserDTO } from "src/DTO/User-DTO";
import { User } from "src/Entities/User.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User>
{
    async LogIn(userDTO: UserDTO)
    {
        const {username, password} = userDTO;
       // console.log(userDTO)
        //const result = await User.query(`SELECT * FROM user WHERE username="${username}"`)
        const result = await User.findOne({where: {username}})
        if(result) 
        {
            if(result.password === password)
            {
                return result;
            }
            //return result
        }
        //console.log(result.password)
        throw new UnauthorizedException('Wrong Credentials...!!!');

    }
    async createUser(userDTO: UserDTO)
    {
        const {username,password} = userDTO;
        const user = new User;
        user.username = username;
        user.password = password;
        return await user.save();
    }
}