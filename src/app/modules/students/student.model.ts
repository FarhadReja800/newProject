import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./students-interface";
import { Schema, model, connect } from "mongoose";

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContractNumber: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContractNo: {
    type: String,
    required: true,
  },
});

const loclaGuardianschema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  connectNO: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,

  email: { type: String, required: true },
  gender: ["male", "female"],
  dateOfBirth: { type: String },
  contractNumber: { type: String, required: true },
  emergencyContract: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  premanetAddress: { type: String, required: true },
  presentAddress: { type: String, required: true },

  guardian: guardianSchema,
  localGuardian: loclaGuardianschema,
  profileImage: {
    type: String,
    required: true,
  },
  isActive: ["active", "blocked"],
});

export const StudentModel = model<Student>("Student", studentSchema);
