import prisma from "@/prisma/client";

export async function GET(
  request: Request,
  { params: { issueId } }: { params: { issueId: string } },
) {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(issueId),
    },
  });

  if (!issue) {
    return Response.json({ error: "Issue not found" }, { status: 404 });
  }

  return Response.json(issue, { status: 200 });
}
