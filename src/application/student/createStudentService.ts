import { Student, StudentRepository } from '../../domain/student';
import { ApplicationService } from '../../lib/ApplicationService';

interface Dependencies {
  studentRepository: StudentRepository
}

interface StudentDTO {
  name: string;
  document: string;
  age: number;
}

export type CreateStudentService = ApplicationService<StudentDTO, string>

function createStudentServiceFactory({ studentRepository }: Dependencies): CreateStudentService {
  return {
    async execute(payload: StudentDTO): Promise<string> {

      const student = new Student({
        id: await studentRepository.getNextId(),
        name: payload.name,
        document: payload.document,
        age: payload.age
      });

      await studentRepository.store(student);

      return student.id;
    }

  }
}

export default createStudentServiceFactory;