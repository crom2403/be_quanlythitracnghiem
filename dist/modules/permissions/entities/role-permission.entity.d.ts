import { Permission } from 'src/modules/permissions/entities/permission.entity';
import { Role } from 'src/modules/users/entities/role.entity';
export declare class RolePermission {
    role_id: number;
    permission_id: number;
    role: Role;
    permission: Permission;
}
