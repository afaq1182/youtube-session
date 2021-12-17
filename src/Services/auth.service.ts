import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDTO } from 'src/DTO/User-DTO';
import { UserRepository } from 'src/Repositories/Auth-Respository';
import { UsersService } from 'src/Services/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private userRepository: UserRepository){}

    async validateUser(username: string, password: string) : Promise<any>
    {
        const user = await this.userService.findone(username);
        if(user && user.password === password)
        {
            const {username,password, ...rest }= user;
            return rest;
        }
        else 
        {
            throw new UnauthorizedException('Wrong Credentials..!!!');
        }
    }
    async LogIn(userDTO: UserDTO)
    {
       // console.log(userDTO);
       return await this.userRepository.LogIn(userDTO);
    }
    async createUser(userDTO: UserDTO)
    {
        return await this.userRepository.createUser(userDTO);
    }
}
