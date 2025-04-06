import { GroupStudent } from 'src/modules/study-group/entities';
import { TeacherSubject } from 'src/modules/subject/entities';
import { Role } from './role.entity';
import { ExamAttempt } from 'src/modules/exam/entities';
export declare class User {
    id: number;
    student_code: string;
    email: string;
    fullname: string;
    gender: 'Nam' | 'Nữ';
    birthday: Date;
    role: Role;
    teacher_subjects: TeacherSubject[];
    password: string;
    status: boolean;
    avatar: string;
    refreshToken: string;
    group_students: GroupStudent[];
    exam_attempts: ExamAttempt[];
    created_at: Date;
    updated_at: Date;
}
