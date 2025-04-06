import { Exam } from '../entities';
import { StudyGroup } from 'src/modules/study-group/entities';
export declare class ExamStudyGroup {
    id: number;
    exam: Exam;
    study_group: StudyGroup;
    created_at: Date;
    updated_at: Date;
}
