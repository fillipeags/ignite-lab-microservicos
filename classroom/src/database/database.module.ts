import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
// eslint-disable-next-line prettier/prettier
export class DatabaseModule { }
