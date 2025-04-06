import { StudyGroup } from 'src/modules/study-group/entities';
export declare class Semester {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    study_groups: StudyGroup[];
}
