import runAsync from '../../../lib/runAsync';
import { Request, Response } from 'express';
import { AddStudentPhoneService } from '../../../application/student/addStudentPhoneService';

interface Dependencies {
  addStudentPhoneService: AddStudentPhoneService
}

function addStudentPhone({ addStudentPhoneService }: Dependencies) {
  return runAsync(async (req: Request, res: Response) => {

    await addStudentPhoneService.execute({
      id: req.params.id,
      phone: req.body.phone
    });

    res.sendStatus(204);
  })
}

export default addStudentPhone;