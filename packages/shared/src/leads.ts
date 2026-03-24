import { prisma } from './db';

export const createLead = async (data: {
  email: string;
  name?: string;
  source: string;
}) => {
  return await prisma.lead.create({
    data: {
      ...data,
      status: 'NEW',
    },
  });
};

export const getLeads = async () => {
  return await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
  });
};