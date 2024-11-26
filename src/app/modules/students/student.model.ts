import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./students-interface";
import { Schema, model, connect } from "mongoose";
import validator from 'validator';


const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
    maxlength:[20,'First name con not 20 characters'],
    validate:{
      validator: function(value){
        const firstNameSrt = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameSrt === value;
        
      },
      message:'{VALUE}, is not in capitalize format',
      
    }
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
  validate: {
    validator: (value: string) => validator.isAlpha(value),
    message:'{VALUE} is not valid',
  }
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required.'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required.'],
    trim: true,
  },
  fatherContractNumber: {
    type: String,
    required: [true, 'Father contact number is required.'],
    trim: true,
    
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required.'],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required.'],
    trim: true,
  },
  motherContractNo: {
    type: String,
    required: [true, 'Mother contact number is required.'],
    trim: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required.'] },
  occupation: { type: String, required: [true, 'Local guardian occupation is required.'] },
  connectNO: { type: String, required: [true, 'Local guardian contact number is required.'] },
  address: { type: String, required: [true, 'Local guardian address is required.'] },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, 'Student ID is required.'], unique: true },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required.'],
    trim: true,
  },
  email: { type: String, required: [true, 'Email is required.'],
     unique: true,
      trim: true,
      validate:{
        validator: (value: string) => validator.isEmail(value),
        message:'{VALUE} is not valid Email type Pleae valid Email',
      }
    },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "Other"],
      message: '{VALUE} is not a valid gender.',
    },
    required: [true, 'Gender is required.'],
  },
  dateOfBirth: { type: String },
  contractNumber: { type: String, required: [true, 'Contact number is required.'] },
  emergencyContract: { type: String, required: [true, 'Emergency contact number is required.'] },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: '{VALUE} is not a valid blood group.',
      
    },
  },
  premanetAddress: { type: String, required: [true, 'Permanent address is required.'] },
  presentAddress: { type: String, required: [true, 'Present address is required.'] },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required.'],
    trim: true,
  },
  profileImage: {
    type: String,
    required: [true, 'Profile image is required.'],
  },
  isActive: {
    type: String,
    enum: {
      values: ["active", "blocked"],
      message: '{VALUE} is not a valid status.',
    },
    default: "active",
  },
});



export const StudentModel = model<Student>("Student", studentSchema);
