import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Table, User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get('table')
  findAllTables() {
    return this.usersService.findAllTables();
  }

  @Post()
  createUser(@Body() data: Omit<User, 'id'>) {
    return this.usersService.createUser(data);
  }

  @Post('table')
  createTable(@Body() data: Omit<Table, 'id'>) {
    return this.usersService.createTable(data);
  }
}