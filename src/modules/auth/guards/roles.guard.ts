// Guard kiểm tra quyền truy cập dựa trên vai trò
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleType } from '../enums';
import { ROLES_KEY } from '../decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Lấy danh sách các vai trò được yêu cầu từ decorator
    const requiredRoles = this.reflector.getAllAndOverride<RoleType[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // Nếu route không yêu cầu vai trò cụ thể, cho phép truy cập
    if (!requiredRoles) {
      return true;
    }

    // Lấy thông tin user từ request (đã được JWT guard xử lý trước đó)
    const { user } = context.switchToHttp().getRequest();
    // Kiểm tra xem user có ít nhất một trong các vai trò yêu cầu không
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
