import { StudentModel } from "./student.model";
import Student from "./students-interface";

const createStudentServiceDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentService = {
  createStudentServiceDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
