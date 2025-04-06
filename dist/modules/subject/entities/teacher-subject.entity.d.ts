import { Subject } from './subject.entity';
import { User } from 'src/modules/users/entities';
export declare class TeacherSubject {
    id: number;
    teacher: User;
    subject: Subject;
    created_at: Date;
}
