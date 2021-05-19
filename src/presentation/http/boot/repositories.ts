import { Application } from 'express';
import { asFunction, AwilixContainer } from 'awilix';
import { knexStudentRepositoryFactory } from '../../../infrastructure/student';

async function repositories(app: Application, container: AwilixContainer) {
  container.register({
    studentRepository: asFunction(knexStudentRepositoryFactory).singleton()
  });
}

export default repositories;