import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Table, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async createUser(data: Omit<User, 'id'>): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async createTable(data: Omit<Table, 'id'>): Promise<Table> {
    return this.prisma.table.create({ data });
  }

  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findAllTables(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }
}