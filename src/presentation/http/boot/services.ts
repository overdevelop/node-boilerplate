import { Application } from 'express';
import { asFunction, AwilixContainer } from 'awilix';
import { addStudentPhoneService, createStudentService } from '../../../application/student';
import listStudentsServiceFactory from '../../../application/student/listStudentsService';

async function services(app: Application, container: AwilixContainer) {
  container.register({
    createStudentService: asFunction(createStudentService).singleton(),
    addStudentPhoneService: asFunction(addStudentPhoneService).singleton(),
    listStudentsService: asFunction(listStudentsServiceFactory).singleton()
  });
}

export default services;