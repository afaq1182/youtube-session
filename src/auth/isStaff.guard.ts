import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";


@Injectable()
export class isStaff implements CanActivate
{ 
    async canActivate(context: ExecutionContext)
    {
        const request = context.switchToHttp().getRequest();
        if(request.user===undefined) 
        {
            throw new BadRequestException('You need to Log In first...!!!');
        }
        if(!request.user.isStaff === true)
        {
            throw new UnauthorizedException('You are not authorized for this request...!!!');
        }
        return true;
    }
}