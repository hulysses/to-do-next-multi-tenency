import { prisma } from "@/libs/prisma";

export const getTasks = async (tenant_id: Number) => {
  return await prisma.task.findMany({
    where: { tenant_id },
  });
};
