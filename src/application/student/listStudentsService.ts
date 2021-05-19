import { Student, StudentRepository } from '../../domain/student';
import { ApplicationService } from '../../lib/ApplicationService';

interface Dependencies {
  studentRepository: StudentRepository
}

export type ListStudentsService = ApplicationService<void, Student[]>;

function listStudentsServiceFactory({studentRepository}: Dependencies): ListStudentsService {
  return {
    async execute(): Promise<Student[]> {
      const students = await studentRepository.findAll();

      return students;
    }
  }
}

export default listStudentsServiceFactory;