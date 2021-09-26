import { Controller, Get, Post, Req, Request, Res, Session, UseGuards } from '@nestjs/common';
import { AppService } from '../app.service';
import { AuthenticatedGuard } from '../Guards/authenticated.guard';
import { IsAdmin } from '../Guards/isAdmin.guard';
import { isStaff } from '../Guards/isStaff.guard';
import { LocalAuthGuard } from '../Guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req){
    return {message: `Logged In..!!! Welcome Home ${req.user.name.toUpperCase()}...!!!!`};
  }

  @Get('protected')
  @UseGuards(new AuthenticatedGuard)
  @UseGuards(new isStaff)
  getHello(@Request() req): string {
    return `Hey ${req.user.name.toUpperCase()}...!!!`
  }

  @Get('/logout')
  @UseGuards(new AuthenticatedGuard)
  async logout(@Req() req, @Res() res)
  {
    req.session.destroy(function (err) {
      if(err) throw err;
      res.send('USER LOGGED OUT...!!!') //Inside a callback… bulletproof!
     });
    res.clearCookie('connect.sid');
    return req.session;
  }
}
