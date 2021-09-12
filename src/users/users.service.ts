import { Injectable } from '@nestjs/common';

export type User = 
{
id: number;
name: string;
username: string;
isAdmin: boolean,
password: string;
}
 
@Injectable()
export class UsersService 
{
    private readonly users: User[] = 
    [
        {
            id: 1,
            name: 'afaq',
            username: 'alsoafaq',
            isAdmin: true,
            password: 'afaqpassword'
        },
        {
            id: 2,
            name: 'tabish',
            username: 'alsotabish',
            isAdmin: false,
            password: 'tabishpassword'
        }
    ];


    async findone(username: string)//: Promise<User | undefined>
    {
        return this.users.find(user => user.username === username)
    }
}
