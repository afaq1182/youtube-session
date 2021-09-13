import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersService, PassportModule.register({session: true})],
  providers: [AuthService ,UsersService , LocalStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
