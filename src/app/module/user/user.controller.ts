import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { UserService } from "./user.service";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await UserService.createDoctor(payload);

  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Doctor registered successfully",
    data: result,
  });
});

export const UserController = {
  createDoctor,
};
