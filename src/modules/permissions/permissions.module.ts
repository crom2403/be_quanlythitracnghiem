import { Module } from '@nestjs/common';
import { PermissionsService } from './services';
import { PermissionsController } from './controllers';

@Module({
  providers: [PermissionsService],
  controllers: [PermissionsController],
  exports: [PermissionsService],
})
export class PermissionsModule {}
