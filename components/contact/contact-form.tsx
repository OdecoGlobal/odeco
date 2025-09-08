'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export const contactFormSchema = z.object({
  name: z.string().min(3, 'Name should be at least 3 characters'),
  email: z.email(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});
export type contactFormType = z.infer<typeof contactFormSchema>;
const ContactForm = () => {
  const form = useForm<contactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  const onSubmit = (values: contactFormType) => {
    console.log(values);
  };
  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="md:flex md:flex-row md:items-center gap-4 space-y-3 md:space-y-0">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className=" text-sm w-full">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full"
                        placeholder="Your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-sm w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full"
                        placeholder="your-email@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className=" text-sm w-full">
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full"
                      placeholder="What's this about?"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className=" text-sm w-full">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full"
                      placeholder="Tell me more about your project"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="btn">
              <Send /> Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
