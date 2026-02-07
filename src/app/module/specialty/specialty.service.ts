import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (payload: Specialty): Promise<Specialty> => {
  return await prisma.specialty.create({
    data: payload,
  });
};

const getAllSpecialties = async (): Promise<Specialty[]> => {
  return await prisma.specialty.findMany();
};

const deleteSpecialty = async (id: string) => {
  return await prisma.specialty.delete({
    where: { id },
  });
};

const updateSpecialty = async (
  id: string,
  Payload: Specialty,
): Promise<Specialty> => {
  return await prisma.specialty.update({
    where: { id },
    data: Payload,
  });
};

export const SpecialtyService = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty,
};
