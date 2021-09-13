import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

 
@Injectable()
export class AuthenticatedGuard implements CanActivate
{
    async canActivate(context: ExecutionContext)
    {
        const request = context.switchToHttp().getRequest();
        if(request.user===undefined)
        {
            throw new BadRequestException('You need to log in first...!!!');
        }
        return request.isAuthenticated()
    }
}