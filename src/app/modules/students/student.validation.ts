import Joi from 'joi';

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      "string.empty": "First name is required.",
      "string.max": "First name cannot exceed 20 characters.",
      "string.pattern.base": "First name must start with an uppercase letter.",
    }),
  middleName: Joi.string()
    .trim()
    .allow(null, "")
    .messages({
      "string.base": "Middle name must be a string.",
    }),
  lastName: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z]+$/)
    .messages({
      "string.empty": "Last name is required.",
      "string.pattern.base": "Last name must contain only alphabets.",
    }),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Father's name is required.",
    }),
  fatherOccupation: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Father's occupation is required.",
    }),
  fatherContractNumber: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Father's contact number is required.",
    }),
  motherName: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Mother's name is required.",
    }),
  motherOccupation: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Mother's occupation is required.",
    }),
  motherContractNo: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Mother's contact number is required.",
    }),
});

const localGuardianSchema = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Local guardian name is required.",
    }),
  occupation: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Local guardian occupation is required.",
    }),
  connectNO: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Local guardian contact number is required.",
    }),
  address: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Local guardian address is required.",
    }),
});

const studentSchema = Joi.object({
  id: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Student ID is required.",
    }),
  name: userNameSchema.required().messages({
    "object.base": "Name must be a valid object.",
  }),
  email: Joi.string()
    .email()
    .trim()
    .required()
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid format.",
    }),
  gender: Joi.string()
    .valid("male", "female", "Other")
    .required()
    .messages({
      "string.empty": "Gender is required.",
      "any.only": "Gender must be one of 'male', 'female', or 'Other'.",
    }),
  dateOfBirth: Joi.string()
    .isoDate()
    .messages({
      "date.format": "Date of birth must be in ISO format (YYYY-MM-DD).",
    }),
  contractNumber: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Contact number is required.",
    }),
  emergencyContract: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Emergency contact number is required.",
    }),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .messages({
      "any.only": "Blood group must be a valid type (e.g., A+, O-, etc.).",
    }),
  premanetAddress: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Permanent address is required.",
    }),
  presentAddress: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Present address is required.",
    }),
  guardian: guardianSchema.required().messages({
    "object.base": "Guardian information must be valid.",
  }),
  localGuardian: localGuardianSchema.required().messages({
    "object.base": "Local guardian information must be valid.",
  }),
  profileImage: Joi.string()
    .uri()
    .required()
    .messages({
      "string.empty": "Profile image URL is required.",
      "string.uri": "Profile image must be a valid URI.",
    }),
  isActive: Joi.string()
    .valid("active", "blocked")
    .default("active")
    .messages({
      "any.only": "Status must be either 'active' or 'blocked'.",
    }),
});

export default studentSchema;
