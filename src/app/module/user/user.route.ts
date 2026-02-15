import { Router } from "express";
import { UserController } from "./user.controller";
import { ValidateRequest } from "../../middleware/validateRequest";
import { createDoctorZodSchema } from "./user.validation";

const router = Router();

router.post(
  "/create-doctor",
  ValidateRequest(createDoctorZodSchema),
  UserController.createDoctor,
);

export const UserRoutes = router;
