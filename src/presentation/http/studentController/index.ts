import { Injector } from '../../../lib/Injector';
import { Router } from 'express';
import createStudent from './createStudent';
import addStudentPhone from './addStudentPhone';
import listStudents from './listStudents';

function studentControllerFactory({inject}: Injector) {
  const router = Router();

  router.get('/', inject(listStudents));
  router.post('/', inject(createStudent));
  router.post('/:id/phones', inject(addStudentPhone));

  return router;
}

export default studentControllerFactory;