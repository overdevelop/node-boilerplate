import runAsync from '../../../lib/runAsync';
import { Request, Response } from 'express';
import { CreateStudentService } from '../../../application/student/createStudentService';

interface Dependencies {
  createStudentService: CreateStudentService
}

function createStudent({ createStudentService }: Dependencies) {
  return runAsync(async (req: Request, res: Response) => {

    const id = await createStudentService.execute(req.body);

    res.status(201).json({ id });
  })
}

export default createStudent;