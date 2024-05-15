import { z, string } from "zod";

const createIssueSchema = z.object({
  title: string().min(1).max(255),
  description: string().min(1),
});

export { createIssueSchema };
