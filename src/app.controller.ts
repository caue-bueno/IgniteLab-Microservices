import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { PrismaService } from './prisma.service';
import {randomUUID} from 'node:crypto';
import { createNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }
  @Post()
  async create(@Body() body: createNotificationBody) {
    const { recipientId, content, category } = body

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,

      },
    });
  }

} 