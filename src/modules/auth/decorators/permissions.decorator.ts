import { SetMetadata } from '@nestjs/common';

// Decorator cho phép kiểm tra permission chi tiết
export const PERMISSIONS_KEY = 'permissions';
export const RequirePermissions = (...permissions: string[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
