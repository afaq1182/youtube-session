import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/Services/users.service';
import { AuthService } from '../Services/auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthController } from '../Controllers/auth.controller';
import { UserRepository } from 'src/Repositories/User-Respository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersService, PassportModule.register({ session: true }), TypeOrmModule.forFeature([UserRepository])],
  providers: [AuthService, UsersService, LocalStrategy, SessionSerializer, UserRepository],
  controllers: [AuthController],
})
export class AuthModule { }
