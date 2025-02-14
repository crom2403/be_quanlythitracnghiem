import { Permission } from 'src/modules/permissions/entities/permission.entity';
import { Role } from 'src/modules/users/entities/role.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class RolePermission {
  @PrimaryColumn()
  role_id: number;

  @PrimaryColumn()
  permission_id: number;

  @ManyToOne(() => Role)
  role: Role;

  @ManyToOne(() => Permission)
  permission: Permission;
}
