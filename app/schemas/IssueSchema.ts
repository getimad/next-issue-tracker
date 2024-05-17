import { z, string } from "zod";

const createIssueSchema = z.object({
  title: string().min(1, "Title is required.").max(255),
  description: string().min(1, "Description is required."),
});

const editIssueSchema = z.object({
  title: string().min(1, "Title is required.").max(255),
  description: string().min(1, "Description is required."),
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]),
});

export { createIssueSchema, editIssueSchema };
