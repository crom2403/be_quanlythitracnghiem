import { User } from 'src/modules/users/entities/user.entity';
export declare class Notification {
    id: number;
    user: User;
    title: string;
    content: string;
    is_read: boolean;
    created_at: Date;
}
