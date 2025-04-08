import { User } from 'src/modules/users';

export const userData: Partial<User>[] = [
  ...Array.from({ length: 50 }).map((_, i) => ({
    student_code: `sv${i + 1}`,
    fullname: `Sinh viên ${i + 1}`,
    email: `student${i + 1}@student.stu.edu.vn`,
    password: '123456',
    birthday: new Date('2002-01-01'),
    avatar: null,
    roleId: 3,
  })),
  ...Array.from({ length: 10 }).map((_, i) => ({
    student_code: `gv${i + 1}`,
    fullname: `Giáo viên ${i + 1}`,
    email: `teacher${i + 1}@stu.edu.vn`,
    password: '123456',
    birthday: new Date('1980-01-01'),
    avatar: null,
    roleId: 2,
  })),
  ...Array.from({ length: 5 }).map((_, i) => ({
    student_code: `ad${i + 1}`,
    fullname: `Admin ${i + 1}`,
    email: `admin${i + 1}@gmail.com`,
    password: '123456',
    birthday: new Date('1990-01-01'),
    avatar: null,
    roleId: 1,
  })),
];
