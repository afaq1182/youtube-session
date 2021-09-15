import { Body, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local'
import { UserDTO } from "src/DTO/User-DTO";
import { AuthService } from "../Services/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy)
{
    constructor(private authService: AuthService) {super(new UserDTO)}

    async validate(username: string, password: string) : Promise<any>
    {
        const userDTO = {username: username, password: password};
        const user = await this.authService.LogIn(userDTO);
        console.log(user)
        if(!user) throw new UnauthorizedException('user not found...!!!');
        return user;
    }
}