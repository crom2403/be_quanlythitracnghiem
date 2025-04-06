import { BaseEntity } from './base.entity';
export declare abstract class SoftDeleteEntity extends BaseEntity {
    deletedAt?: Date;
}
