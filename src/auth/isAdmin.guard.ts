import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";


@Injectable()
export class IsAdmin implements CanActivate
{
    async canActivate(context: ExecutionContext)
    {
        const request = context.switchToHttp().getRequest();
        console.log(request.user)
        if(!request.user.isAdmin === true)
        {
            throw new UnauthorizedException('You are not authorized for this request...!!!');
        }
        return true;
    }
}