import { TeacherSubject } from './teacher-subject.entity';
export declare class Subject {
    id: number;
    public_id: string;
    name: string;
    credits: number;
    theory_hours: number;
    practical_hours: number;
    teacher_subjects: TeacherSubject[];
    created_at: Date;
    updated_at: Date;
}
