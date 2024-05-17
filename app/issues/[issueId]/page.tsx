import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueActions from "./IssueActions";

interface Props {
  params: {
    issueId: string;
  };
}

export default async function IssuePage({ params: { issueId } }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });

  if (!issue) {
    return notFound();
  }

  return (
    <main className="m-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <IssueDetails issue={issue} />
        <IssueActions issueId={issueId} />
      </div>
    </main>
  );
}
