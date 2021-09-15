import { Module } from '@nestjs/common';
import { UsersService } from '../Services/users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
