/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Role,
  User,
  Subject,
  TeacherSubject,
  Chapter,
  Question,
  Answer,
  StudyGroup,
  GroupStudent,
  Semester,
  AcademicYear,
} from 'src/modules';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import {
  roleData,
  userData,
  subjectData,
  listQuestionData,
} from '../mock-data';
import { Exam, ExamConfig } from 'src/modules/exam';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
    @InjectRepository(TeacherSubject)
    private teacherSubjectRepository: Repository<TeacherSubject>,
    @InjectRepository(Chapter)
    private chapterRepository: Repository<Chapter>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    @InjectRepository(StudyGroup)
    private studyGroupRepository: Repository<StudyGroup>,
    @InjectRepository(GroupStudent)
    private groupStudentRepository: Repository<GroupStudent>,
    @InjectRepository(Semester)
    private semesterRepository: Repository<Semester>,
    @InjectRepository(AcademicYear)
    private academicYearRepository: Repository<AcademicYear>,
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
    @InjectRepository(ExamConfig)
    private examConfigRepository: Repository<ExamConfig>,
  ) {}

  async onModuleInit() {
    console.log('SeederService initialized');
    await this.createDefaultRoles();
    await this.createDefaultUsers();
    await this.createDefaultSubjects();
    await this.createDefaultTeacherSubjects();
    await this.createDefaultChapters();
    await this.createDefaultQuestionsAndAnswer();
    await this.createDefaultSemester();
    await this.createDefaultAcademicYears();
    await this.createDefaultStudyGroups();
    await this.createGroupStudents();
    await this.createDefaultExams();
    await this.createDefaultExamConfig();
  }

  // Tạo Role Default
  private async createDefaultRoles() {
    const count = await this.roleRepository.count();
    if (count === 0) {
      for (const roleName of roleData) {
        const role = new Role();
        role.name = roleName;
        await this.roleRepository.save(role);
      }
    }
  }

  // Mã hóa password
  public async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // Số vòng salt
    return await bcrypt.hash(password, saltRounds);
  }

  private async createDefaultUsers() {
    const count = await this.userRepository.count();
    if (count === 0) {
      const listRoles = await this.roleRepository.find();
      const users = await Promise.all(
        userData.map(async (data) => {
          let role = listRoles[0];
          if (data.student_code.startsWith('sv')) role = listRoles[2];
          else if (data.student_code.startsWith('gv')) role = listRoles[1];
          else role = listRoles[0];
          const user = new User();
          user.student_code = data.student_code!;
          user.fullname = data.fullname!;
          user.email = data.email!;
          user.birthday = data.birthday!;
          user.avatar = null;
          user.role = role;
          user.password = await this.hashPassword(data.password!);
          return user;
        }),
      );

      await this.userRepository.save(users);
      console.log('Default user created');
    }
  }

  private async createDefaultSubjects() {
    const count = await this.subjectRepository.count();
    if (count === 0) {
      const subjects = await Promise.all(
        subjectData.map(async (data) => {
          const subject = new Subject();
          subject.public_id = data.public_id;
          subject.name = data.name;
          subject.credits = data.credits;
          subject.practical_hours = data.practical_hours;
          subject.theory_hours = data.theory_hours;
          return subject;
        }),
      );

      await this.subjectRepository.save(subjects);
      console.log('Default subject created');
    }
  }

  private async createDefaultTeacherSubjects() {
    const count = await this.teacherSubjectRepository.count();
    if (count === 0) {
      const subjects = await this.subjectRepository.find();
      const teachers = await this.userRepository.find({
        where: { role: { name: 'teacher' } },
        relations: ['role'],
      });

      const teacherSubjects = [];

      for (const teacher of teachers) {
        // Random số lượng môn học mà giáo viên này sẽ dạy (từ 2 đến 4)
        const numberOfSubjects = Math.floor(Math.random() * 3) + 2;

        // Random các môn không trùng lặp
        const shuffledSubjects = subjects.sort(() => 0.5 - Math.random());
        const selectedSubjects = shuffledSubjects.slice(0, numberOfSubjects);

        for (const subject of selectedSubjects) {
          const teacherSubject = new TeacherSubject();
          teacherSubject.teacher = teacher;
          teacherSubject.subject = subject;
          teacherSubjects.push(teacherSubject);
        }
      }

      await this.teacherSubjectRepository.save(teacherSubjects);
      console.log('Default teacher-subjects created randomly');
    }
  }

  private async createDefaultChapters() {
    const count = await this.chapterRepository.count();
    if (count === 0) {
      const subjects = await this.subjectRepository.find();
      const chapters = [];
      for (const subject of subjects) {
        // Random số lượng chương học cho mỗi môn học (từ 1 đến 5)
        const numberOfChapters = Math.floor(Math.random() * 5) + 1;

        for (let i = 1; i <= numberOfChapters; i++) {
          const chapter = new Chapter();
          chapter.subject = subject;
          chapter.name = `Chương ${i}`;
          chapters.push(chapter);
        }
      }

      await this.chapterRepository.save(chapters);
      console.log('Default chapters created randomly');
    }
  }

  private async createDefaultQuestionsAndAnswer() {
    const countQuestions = await this.questionRepository.count();
    const countAnswers = await this.answerRepository.count();

    if (countQuestions === 0 && countAnswers === 0) {
      const admin = await this.userRepository.findOne({
        where: { role: { name: 'admin' } },
        relations: ['role'],
      });
      subjectData.forEach(async (subject, index) => {
        const currentSubject = await this.subjectRepository.findOne({
          where: { name: subject.name },
        });
        const listChapters = await this.chapterRepository.find({
          where: { subject: { id: currentSubject.id } },
        });

        const questionDatas = listQuestionData[index].item;

        for (const ques of questionDatas) {
          const question = new Question();
          question.content = ques.content;
          question.difficulty_level = ques.difficulty_level;
          question.chapter =
            listChapters[Math.floor(Math.random() * listChapters.length)];
          question.created_by = admin;

          const newQuesion = await this.questionRepository.save(question);
          if (newQuesion) {
            const answers = [];
            ques?.answers.forEach((ans) => {
              const answer = new Answer();
              answer.question = question;
              answer.content = ans.content;
              answer.is_correct = ans.is_correct;
              answers.push(answer);
            });
            await this.answerRepository.save(answers);
          }
        }
      });
      console.log('Default questions and answers created randomly');
    }
  }

  private async createDefaultSemester() {
    const count = await this.semesterRepository.count();
    if (count === 0) {
      const semesters = [];
      for (let i = 1; i <= 2; i++) {
        const semester = new Semester();
        semester.name = `Học kỳ ${i}`;
        semesters.push(semester);
      }

      await this.semesterRepository.save(semesters);
      console.log('Default semester created');
    }
  }

  private async createDefaultAcademicYears() {
    const count = await this.academicYearRepository.count();
    if (count === 0) {
      const academicYears = [];
      for (let i = 2015; i <= 2024; i++) {
        const academicYear = new AcademicYear();
        academicYear.start_year = i + '';
        academicYear.end_year = i + 1 + '';
        academicYears.push(academicYear);
      }

      await this.academicYearRepository.save(academicYears);
      console.log('Default academic years created');
    }
  }

  private async createDefaultStudyGroups() {
    const count = await this.studyGroupRepository.count();
    if (count === 0) {
      const subjects = await this.subjectRepository.find();
      const teachers = await this.userRepository.find({
        where: { role: { name: 'teacher' } },
        relations: ['role'],
      });
      const semesters = await this.semesterRepository.find();
      const academicYears = await this.academicYearRepository.find();

      const studyGroups = [];
      for (const teacher of teachers) {
        // Random số lượng nhóm học tập mà giáo viên này sẽ dạy (từ 1 đến 3)
        const numberOfGroups = Math.floor(Math.random() * 3) + 1;
        for (let i = 1; i <= numberOfGroups; i++) {
          const studyGroup = new StudyGroup();
          studyGroup.semester =
            semesters[Math.floor(Math.random() * semesters.length)];
          studyGroup.academic_year =
            academicYears[Math.floor(Math.random() * academicYears.length)];
          studyGroup.teacher = teacher;
          studyGroup.subject =
            subjects[Math.floor(Math.random() * subjects.length)];
          studyGroup.name = `Nhóm ${i}`;
          studyGroup.note = `Nhóm học tập ${i}`;
          studyGroup.invite_code = `${teacher.student_code}-${i}`;
          studyGroups.push(studyGroup);
        }
      }
      await this.studyGroupRepository.save(studyGroups);

      await this.studyGroupRepository.save(studyGroups);
      console.log('Default study groups created randomly');
    }
  }

  private async createGroupStudents() {
    const count = await this.groupStudentRepository.count();
    if (count === 0) {
      const studyGroups = await this.studyGroupRepository.find();
      const students = await this.userRepository.find({
        where: { role: { name: 'student' } },
        relations: ['role'],
      });
      const groupStudents = [];
      for (const studyGroup of studyGroups) {
        // Random số lượng sinh viên trong nhóm học tập (từ 10 đến 20)
        const numberOfStudents = Math.floor(Math.random() * 11) + 10;
        // Random các sinh viên không trùng lặp
        const shuffledStudents = students.sort(() => 0.5 - Math.random());
        const selectedStudents = shuffledStudents.slice(0, numberOfStudents);
        for (const student of selectedStudents) {
          const groupStudent = new GroupStudent();
          groupStudent.student = student;
          groupStudent.study_group = studyGroup;
          groupStudents.push(groupStudent);
        }
      }
      await this.groupStudentRepository.save(groupStudents);
      console.log('Default group students created randomly');
    }
  }

  private async createDefaultExams() {
    const count = await this.examRepository.count();
    if (count === 0) {
      const teachers = await this.userRepository.find({
        where: { role: { name: 'teacher' } },
        relations: ['role'],
      });
      const exams = [];
      for (const teacher of teachers) {
        // Random số lượng kỳ thi mà giáo viên này sẽ dạy (từ 1 đến 3)
        const numberOfExams = Math.floor(Math.random() * 3) + 1;
        for (let i = 1; i <= numberOfExams; i++) {
          const exam = new Exam();
          exam.name = `Kỳ thi ${i}`;
          exam.start_time = '2025-04-09 00:00:00';
          exam.end_time = '2023-04-19 00:00:00';
          exam.is_shuffled_question = Math.random() < 0.5;
          exam.is_shuffled_answer = Math.random() < 0.5;
          exam.allow_review = Math.random() < 0.5;
          exam.allow_review_point = Math.random() < 0.5;
          exam.exam_type = Math.random() < 0.5 ? 'manual' : 'auto';
          exam.created_by = teacher;
          exams.push(exam);
        }
      }
      await this.examRepository.save(exams);
      console.log('Default exams created randomly');
    }
  }

  async createDefaultExamConfig() {
    const count = await this.examConfigRepository.count();
    if (count === 0) {
      const exams = await this.examRepository.find();
      const examConfigs = [];
      for (const exam of exams) {
        // Random số lượng cấu hình kỳ thi cho mỗi kỳ thi (từ 1 đến 3)
        const numberOfConfigs = ['easy', 'medium', 'hard'];

        for (let i = 0; i < numberOfConfigs.length; i++) {
          const examConfig = new ExamConfig();
          examConfig.exam = exam;
          examConfig.difficulty_level = numberOfConfigs[i];
          examConfig.question_count = Math.floor(Math.random() * 10) + 1;
          examConfigs.push(examConfig);
        }
      }
      await this.examConfigRepository.save(examConfigs);
      console.log('Default exam configs created randomly');
    }
  }

  //   async addQuestionToAnExam(examId: number, questionId: number) {
  //     const exam = await this.examRepository.findOne({
  //       where: { id: examId },
  //       relations: ['questions'],
  //     });
  //     const question = await this.questionRepository.findOne({
  //       where: { id: questionId },
  //     });
  //     if (exam && question) {
  //       exam.questions.push(question);
  //       await this.examRepository.save(exam);
  //       console.log('Question added to exam successfully');
  //     } else {
  //       console.log('Exam or question not found');
  //     }
  //   }
}
