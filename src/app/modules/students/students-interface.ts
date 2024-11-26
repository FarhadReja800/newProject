
import { Schema, model, connect } from "mongoose";


export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContractNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContractNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  connectNO: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender:"male" | "female" | "Other";
    
  dateOfBirth: string;
  email: string;
  contractNumber: string;
  emergencyContract: string;
  bloodGroup:  "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  premanetAddress: string;

  guardian: Guardian;

  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive:"active" | "inActive";
};

export default Student;
