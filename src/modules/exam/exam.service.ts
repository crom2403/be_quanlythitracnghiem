import {
  CreateExamManualDto,
  ExamConfigsType,
} from 'src/modules/exam/dto/create-exam-manual.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from 'src/modules/exam/entities/exam.entity';
import { Repository } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { ExamConfig } from 'src/modules/exam/entities/exam-config.entity';
import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { ExamStudyGroup } from 'src/modules/exam/entities/exams-study-groups.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(ExamConfig)
    private examConfigRepository: Repository<ExamConfig>,
    @InjectRepository(StudyGroup)
    private studyGroupRepository: Repository<StudyGroup>,
    @InjectRepository(ExamStudyGroup)
    private examStudyGroupRepository: Repository<ExamStudyGroup>,
  ) {}

  async createExamManual(
    userId: number,
    createExamManualDto: CreateExamManualDto,
  ) {
    const { listIdStudyGroups, listExamConfigs } = createExamManualDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found, cannot create exam');
    }

    if (listExamConfigs.length === 0) {
      throw new Error('List exam config is empty, cannot create exam');
    }

    if (listIdStudyGroups.length === 0) {
      throw new Error('List study group is empty, cannot create exam');
    }

    const exam = this.examRepository.create({
      ...createExamManualDto,
      created_by: user,
    });

    await this.examRepository.save(exam);

    // Xử lý exam configs
    await Promise.all(
      listExamConfigs.map(async (questionConfig: ExamConfigsType) => {
        const newExamConfig = this.examConfigRepository.create({
          ...questionConfig,
          exam,
        });
        await this.examConfigRepository.save(newExamConfig);
      }),
    );

    // Xử lý study groups
    await Promise.all(
      listIdStudyGroups.map(async (idStudyGroup: number) => {
        const study_group = await this.studyGroupRepository.findOne({
          where: { id: idStudyGroup },
        });
        if (!study_group) {
          throw new Error(
            `Study group with ID ${idStudyGroup} not found, cannot create exam`,
          );
        }
        const newQuestionConfig = this.examStudyGroupRepository.create({
          study_group,
          exam,
        });
        await this.examStudyGroupRepository.save(newQuestionConfig);
      }),
    );

    return exam;
  }
}
