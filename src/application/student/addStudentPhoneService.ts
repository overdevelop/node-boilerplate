import { StudentRepository } from '../../domain/student';
import { ApplicationService } from '../../lib/ApplicationService';

interface Dependencies {
  studentRepository: StudentRepository
}

interface AddStudentPhoneDTO {
  id: string,
  phone: string;
}

export type AddStudentPhoneService = ApplicationService<AddStudentPhoneDTO, void>;

function addStudentPhoneServiceFactory({studentRepository}: Dependencies): AddStudentPhoneService {
  return {
    async execute(payload: AddStudentPhoneDTO): Promise<void> {
      const student = await studentRepository.findById(payload.id);

      console.log(student);

      student.addPhone(payload.phone);

      await studentRepository.store(student);
    }
  }
}

export default addStudentPhoneServiceFactory;