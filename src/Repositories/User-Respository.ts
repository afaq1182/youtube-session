import { UnauthorizedException } from "@nestjs/common";
import { UserDTO } from "src/DTO/User-DTO";
import { Users } from "src/Entities/User.entity";
import { EntityRepository, Repository } from "typeorm";
import * as bcrypt from "bcrypt"
import { response } from "express";

@EntityRepository(Users)
export class UserRepository extends Repository<Users>
{ 
    async LogIn(userDTO: UserDTO)
    {
        var {username, password} = userDTO; 
        const user = await Users.findOne({where: {username}})
        if(user) 
        {
            if( await bcrypt.compare(password,user.password))
            {
                //delete user.password;
                // delete user.isAdmin;
                // delete user.isStaff;
                console.log(user);
                return user;
            }
            throw new UnauthorizedException('Wrong Credentials...!!!');
        }
        throw new UnauthorizedException('Wrong Credentials...!!!');
    }
    async createUser(userDTO: UserDTO)
    {
        const {username,password} = userDTO;
        const user = new Users();
        user.username = username;
        user.password = await bcrypt.hash(password,10);
        return await user.save();
    }
}