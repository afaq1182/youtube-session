import { Body, ClassSerializerInterceptor, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard } from 'src/Guards/authenticated.guard';
import { LocalAuthGuard } from 'src/Guards/local-auth.guard';
import { UserDTO } from 'src/DTO/User-DTO';
import { AuthService } from 'src/Services/auth.service';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
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
    async LogIn(@Body() userDTO: UserDTO, @Req() req, @Res() res)
    {
        // await this.authService.LogIn(userDTO);
        // return 'LOGGGED IN '+req.user.username.toUpperCase()
        //res.status(HttpStatus.OK).send( await this.authService.LogIn(userDTO));
        return await this.authService.LogIn(userDTO);
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
            res.send('You are logged OUT..!!!!');
            res.clearCookie(this.cookie, { path: '/' });
            res.clearCookie('connect.sid');
        })
    }
}
