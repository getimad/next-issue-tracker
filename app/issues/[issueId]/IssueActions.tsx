"use client";

import ActionBtn from "@components/ActionBtn";
import ClientBtn from "@/app/_components/ClientBtn";
import DeleteDialogBox from "./DeleteDialogBox";
import { useState } from "react";

interface Props {
  issueId: string;
}

const IssueActions = ({ issueId }: Props) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <>
      <aside className="rounded-md border border-palette-2 p-3 ">
        <h2 className="mb-3 text-xl font-semibold text-palette-4">Actions</h2>
        <nav className="flex flex-row flex-wrap gap-3 md:flex-col">
          <ActionBtn
            href={`/issues/${issueId}/edit`}
            className="bg-green-200 text-center text-green-900"
          >
            Edit Issue
          </ActionBtn>
          <ClientBtn
            onClick={() => setIsOpenDialog(true)}
            className="bg-red-200 text-center text-red-900"
          >
            Delete Issue
          </ClientBtn>
        </nav>
      </aside>

      {isOpenDialog && (
        <DeleteDialogBox issueId={issueId} setIsOpenDialog={setIsOpenDialog} />
      )}
    </>
  );
};

export default IssueActions;
