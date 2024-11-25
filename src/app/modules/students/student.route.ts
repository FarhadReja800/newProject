import express from "express";
import { studentContollers } from "./student.controller";

const studentRouter = express.Router();

studentRouter.post("/create-student", studentContollers.createStudent);
studentRouter.get("/", studentContollers.getAllStudents);
studentRouter.get("/:studentId", studentContollers.getSingleStudent);

export default studentRouter;
