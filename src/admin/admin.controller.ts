import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) { }

  @Post('login')
  async login(@Body() body: { password: string }) {
    return this.adminService.login(body);
  }
}