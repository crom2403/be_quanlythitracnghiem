import { AcademicYear, Semester, GroupStudent } from '../entities';
import { ExamStudyGroup } from 'src/modules/exam/entities';
import { Subject } from 'src/modules/subject/entities';
import { User } from 'src/modules/users/entities';
export declare class StudyGroup {
    id: number;
    subject: Subject;
    teacher: User;
    name: string;
    note: string;
    invite_code: string;
    semester: Semester;
    academic_year: AcademicYear;
    group_students: GroupStudent[];
    exam_study_group: ExamStudyGroup[];
    created_at: Date;
    updated_at: Date;
}
