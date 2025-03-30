import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectController } from './controllers';
import { SubjectService } from './services';
import { Subject, TeacherSubject } from './entities';
import { UsersModule } from 'src/modules/users';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, TeacherSubject]), UsersModule],
  controllers: [SubjectController],
  providers: [SubjectService],
  exports: [TypeOrmModule, SubjectService],
})
export class SubjectModule {}
