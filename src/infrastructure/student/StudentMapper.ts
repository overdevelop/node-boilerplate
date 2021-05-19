import { Student } from '../../domain/student';

export default {
  toDatabase(student: Student): any {

    return {
      id: student.id,
      name: student.name,
      document: student.document,
      age: student.age,
      phones: student.phones.join(',') || null
    }
  },
  toEntity(row: any): Student {
    return new Student({
      id: row.id,
      name: row.name,
      document: row.document,
      age: row.age,
      phones: row.phones?.split(',')
    })
  }
}