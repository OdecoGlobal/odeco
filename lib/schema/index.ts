import z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(3, 'Name should be at least 3 characters'),
  email: z.email(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});
