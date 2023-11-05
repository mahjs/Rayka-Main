import { z } from 'zod';

const phoneRegex = /(\+989|09)\d{9}/;

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(phoneRegex, { message: "Invalid phone number" }),
  title: z.string().min(1, { message: "Title is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export default formSchema;
