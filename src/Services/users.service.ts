import { Injectable } from '@nestjs/common';

export type User = 
{
id: number;
name: string;
username: string;
password: string;
isAdmin: boolean;
isStaff: boolean;
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
            password: 'afaqpassword',
            isAdmin: true,
            isStaff: false
        },
        {
            id: 2,
            name: 'tabish',
            username: 'alsotabish',
            password: 'tabishpassword',
            isAdmin: false,
            isStaff: true
        }
    ];


    async findone(username: string)//: Promise<User | undefined>
    {
        return this.users.find(user => user.username === username)
    }
}
