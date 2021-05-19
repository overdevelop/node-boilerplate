import * as Knex from 'knex';
import * as uuid from 'uuid';
import { Student, StudentRepository } from '../../domain/student';
import StudentMapper from './StudentMapper';

interface Dependencies {
  db: Knex
}

function knexStudentRepositoryFactory({ db }: Dependencies): StudentRepository {
  return {
    async findAll(): Promise<Student[]> {
      const row: any[] = await db('student').select();

      return row.map(StudentMapper.toEntity);
    },
    async findById(id: string): Promise<Student> {
      const [row] = await db('student').where({id}).select();

      return StudentMapper.toEntity(row);
    },
    async getNextId(): Promise<string> {
      return Promise.resolve(uuid.v4());
    },
    async store(student: Student): Promise<void> {
      const [{count}] = await db('student').count().whereRaw(`id = '${student.id}'`);

      if (!Number(count)) {
        await db('student').insert(StudentMapper.toDatabase(student));
      } else {
        await db('student').update(StudentMapper.toDatabase(student)).where({id: student.id});
      }
    }
  }
}

export default knexStudentRepositoryFactory;