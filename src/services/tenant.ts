import { prisma } from "@/libs/prisma";

export const getTenent = async (host: String) => {
  return await prisma.tenant.findFirst({
    where: { host },
  });
};
