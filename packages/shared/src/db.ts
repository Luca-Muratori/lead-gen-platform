import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 1. Get the URL, providing a fallback so the Build doesn't crash
const databaseUrl = process.env.DATABASE_URL || "mongodb+srv://dummy:dummy@cluster.mongodb.net/db";

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    accelerateUrl:databaseUrl,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;