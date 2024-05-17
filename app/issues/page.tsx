import prisma from "@/prisma/client";
import Link from "next/link";

export default async function IssuesPage() {
  const issues = await prisma.issue.findMany();

  return (
    <main className="m-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-palette-4">Issues</h1>
        <Link
          className="cursor-pointer rounded-md border border-transparent bg-palette-4 px-3 py-2 font-medium text-white transition-all duration-300 hover:border-palette-1"
          href="/issues/new"
        >
          New Issue
        </Link>
      </div>

      <section className="overflow-hidden rounded-xl border border-palette-2">
        <table className="w-full table-auto">
          <thead className="bg-palette-2 text-left text-palette-4">
            <tr>
              <th className="w-1/3 p-3 font-medium">Issue</th>
              <th className="hidden w-1/3 p-3 font-medium md:table-cell">
                Status
              </th>
              <th className="hidden w-1/3 p-3 font-medium md:table-cell">
                Created
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {issues.map((issue) => (
              <tr
                className="border-b border-palette-2 last:border-0"
                key={issue.id}
              >
                <td className="w-1/3 p-3">
                  {issue.title}
                  <span className="mt-1 block text-xs font-semibold md:hidden">
                    {issue.status}
                  </span>
                </td>
                <td className="hidden w-1/3 p-3 md:table-cell">
                  {issue.status}
                </td>
                <td className="hidden w-1/3 p-3 md:table-cell">
                  {issue.createdAt.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
