import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

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
}
