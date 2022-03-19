import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/Services/users.service';
import { AuthService } from '../Services/auth.service';
import { LocalStrategy } from '../auth/local.strategy';
import { SessionSerializer } from '../auth/session.serializer';
import { AuthController } from '../Controllers/auth.controller';
import { UserRepository } from 'src/Repositories/User-Respository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [UsersService, PassportModule.register({ session: true }), TypeOrmModule.forFeature([UserRepository])],
  providers: [AuthService, UsersService, LocalStrategy, SessionSerializer, UserRepository],//, {provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor}],
  controllers: [AuthController],
})
export class AuthModule { }
