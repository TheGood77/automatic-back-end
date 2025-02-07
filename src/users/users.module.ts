import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [PrismaService, UsersService],
  controllers: [UsersController],
})
export class UsersModule { }