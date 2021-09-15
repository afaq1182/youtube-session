import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UserDTO } from 'src/DTO/User-DTO';
import { AuthService } from 'src/Services/auth.service';

@Controller('auth')
export class AuthController 
{
    constructor(private authService: AuthService){}

    @Post('/signup')
    async createUser(@Body() userDto: UserDTO)
    {
        return await this.authService.createUser(userDto);
    }

    @Post('/signin')
    @UseGuards(new LocalAuthGuard(UserDTO))
    async LogIn(@Body() userDTO: UserDTO, @Req() req)
    {
        console.log(userDTO)
        console.log(req.user.username)
        console.log('Controller called')
        await this.authService.LogIn(userDTO);
        return 'LOGGGED IN '+req.user.username.toUpperCase()
    }

    @Get('/check')
    @UseGuards(new AuthenticatedGuard)
    async checkuser(@Req() req)
    {
        return 'WELCOME '+req.user.username.toUpperCase()+' !!!';
    }

    @Get('/logout')
    @UseGuards(new AuthenticatedGuard)
    async logout(@Req() req,@Res() res)
    {
        req.session.destroy(function(err)
        {
            res.send('You are logged out now my boy..!!!!');
            res.clearCookie(this.cookie, { path: '/' });
            res.clearCookie('connect.sid');
        })
    }
}
