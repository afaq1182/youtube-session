import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class SessionSerializer extends PassportSerializer
{
    async serializeUser(user: any, done: (err: Error, user: any) => void): Promise<any>
    {
        console.log(user)
        done(null, user)
    }

    async deserializeUser(payload: any, done: (err: Error, payload: string) => void)
    {
        done(null, payload)
    }
}