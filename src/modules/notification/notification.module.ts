// import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';
import { NotificationService } from './services/notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [TypeOrmModule, NotificationService],
})
export class NotificationModule {}
