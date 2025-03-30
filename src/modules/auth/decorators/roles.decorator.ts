// Tạo decorator để đánh dấu vai trò cần thiết cho mỗi route
import { SetMetadata } from '@nestjs/common';
import { RoleType } from '../enums';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleType[]) => SetMetadata(ROLES_KEY, roles);
