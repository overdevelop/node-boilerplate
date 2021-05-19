import runAsync from '../../../lib/runAsync';
import { Request, Response } from 'express';
import { ListStudentsService } from '../../../application/student/listStudentsService';

interface Dependencies {
  listStudentsService: ListStudentsService
}

function listStudents({ listStudentsService }: Dependencies) {
  return runAsync(async (req: Request, res: Response) => {

    const students = await listStudentsService.execute();

    res.status(200).json(students);
  })
}

export default listStudents;