import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) { }

  async login(@Body() body: { password: string }) {
    const { password } = body;

    const admin = await this.prisma.admin.findFirst();

    if (!admin) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    if (admin.password === password) {
      return { message: 'Login successful' };
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }
}