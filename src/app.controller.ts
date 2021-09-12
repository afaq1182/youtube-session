import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { IsAdmin } from './auth/isAdmin.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req){
    return {message: 'Logged In..!!!'};
  }

  @Get('protected')
  @UseGuards(new AuthenticatedGuard)
  @UseGuards(new IsAdmin)
  getHello(@Request() req): string {
    return `Hey ${req.user.name.toUpperCase()}...!!!`
  }
}
