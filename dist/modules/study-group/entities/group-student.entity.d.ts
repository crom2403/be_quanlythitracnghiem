import { StudyGroup } from './study-group.entity';
import { User } from 'src/modules/users/entities';
export declare class GroupStudent {
    id: number;
    study_group: StudyGroup;
    student: User;
    joined_at: Date;
}
