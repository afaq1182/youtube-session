import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class UserDTO
{
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}