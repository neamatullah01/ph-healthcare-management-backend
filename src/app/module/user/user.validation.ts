import z from "zod";
import { Gender } from "../../../generated/prisma/enums";

export const createDoctorZodSchema = z.object({
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be at most 20 characters long"),

  doctor: z.object({
    name: z
      .string("Name is required")
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name must be at most 50 characters long"),
    email: z.email("Invalid email address"),

    contactNumber: z
      .string("Contact number is required")
      .min(11, "Contact number must be at least 11 digits long")
      .max(14, "Contact number must be at most 14 digits long"),

    address: z
      .string("Address is required")
      .min(5, "Address must be at least 5 characters long")
      .max(100, "Address must be at most 100 characters long")
      .optional(),

    registrationNumber: z.string("Registration number is required"),

    experience: z
      .int("Experience must be a number")
      .nonnegative("Experience must be a non-negative number")
      .optional(),

    gender: z.enum(
      [Gender.MALE, Gender.FEMALE],
      "Gender must be either male or female",
    ),

    appointmentFee: z
      .number("Appointment fee must be a number")
      .nonnegative("Appointment fee must be a non-negative number"),

    qualification: z
      .string("Qualification is required")
      .min(2, "Qualification must be at least 2 characters long")
      .max(100, "Qualification must be at most 100 characters long"),

    currentWorkingPlace: z
      .string("Current working place is required")
      .min(2, "Current working place must be at least 2 characters long")
      .max(100, "Current working place must be at most 100 characters long"),

    designation: z
      .string("Designation is required")
      .min(2, "Designation must be at least 2 characters long")
      .max(50, "Designation must be at most 50 characters long"),
  }),

  specialties: z
    .array(z.uuid(), "Specialties must be an array of string")
    .min(1, "At least one specialty is required"),
});
