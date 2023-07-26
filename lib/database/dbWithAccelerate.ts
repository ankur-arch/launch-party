import { PrismaClient } from "@prisma/client";

// TODO: Task 1 - add accelerate extension
const dbWithAccelerate = new PrismaClient();

export { dbWithAccelerate };
