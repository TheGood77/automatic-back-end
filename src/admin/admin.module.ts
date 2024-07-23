import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  providers: [PrismaService, AdminService],
  controllers: [AdminController],
})
export class AdminModule { }