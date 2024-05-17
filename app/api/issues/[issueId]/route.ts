import prisma from "@/prisma/client";
import { editIssueSchema } from "@/app/schemas/IssueSchema";

export async function PATCH(
  request: Request,
  { params: { issueId } }: { params: { issueId: string } },
) {
  const body = await request.json();
  const validation = editIssueSchema.safeParse(body);

  if (!validation.success) {
    return Response.json(validation.error.errors, { status: 400 });
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });

  if (!issue) {
    return Response.json({ error: "Issue not found" }, { status: 404 });
  }

  const updatedIssue = await prisma.issue.update({
    where: {
      id: parseInt(issueId),
    },
    data: validation.data,
  });

  return Response.json(updatedIssue, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params: { issueId } }: { params: { issueId: string } },
) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });

  if (!issue) {
    return Response.json({ error: "Issue not found" }, { status: 404 });
  }

  const deletedIssue = await prisma.issue.delete({
    where: { id: parseInt(issueId) },
  });

  return Response.json(deletedIssue, { status: 200 });
}
