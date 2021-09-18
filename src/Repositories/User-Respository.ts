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
        //console.log(result.password+'  this password')
        console.log('This is the Entered USERNAME : '+username);
        console.log('This is the Entered PASSWORD : '+password);
        console.log(result);
        if(result) 
        {
            console.log('username matcheddd')
            if(result.password === password)
            {
               // const {username,password, ...rest} = userDTO;
                console.log('CAlled')
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