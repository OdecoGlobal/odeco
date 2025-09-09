import { contactFormSchema } from '@/lib/schema';
import z from 'zod';

export type contactFormType = z.infer<typeof contactFormSchema>;
