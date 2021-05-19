import Student from './Student';

interface StudentRepository {
  getNextId(): Promise<string>;
  findById(id: string): Promise<Student>;
  findAll(): Promise<Student[]>;
  store(student: Student): Promise<void>;
}

export {
  StudentRepository
}