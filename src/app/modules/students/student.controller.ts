import { console } from "node:inspector/promises";
import { Response, Request } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body;

    const result = await StudentService.createStudentServiceDB(studentData);
    res.status(200).json({
      success: true,
      message: "Student Is Created Successfuly",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Student are retrieyed Successfuly",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "The Single Student in database",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentContollers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
