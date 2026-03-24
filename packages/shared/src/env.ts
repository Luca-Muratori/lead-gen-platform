import { z } from 'zod';

export const envSchema = z.object({
  // Infrastructure
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  
  // Database (We will add these in Step 4)
  DATABASE_URL: z.string().url().optional(),
  
  // App Specifics
  NEXT_PUBLIC_APP_URL: z.string().url(),
});

export const validateEnv = () => {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
};