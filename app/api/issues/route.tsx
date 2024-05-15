import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/app/schemas/IssueSchema";

// Get all issues
export async function GET(request: NextRequest) {
  const issues = await prisma.issue.findMany();
  return NextResponse.json(issues, { status: 200 });
}

// Create an issue
export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const issue = await prisma.issue.create({
    data: validation.data,
  });

  return NextResponse.json(issue, { status: 201 });
}
