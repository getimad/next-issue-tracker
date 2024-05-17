import ActionBtn from "@components/ActionBtn";

interface Props {
  issueId: string;
}

const IssueActions = ({ issueId }: Props) => {
  return (
    <aside className="rounded-md border border-palette-2 p-3 ">
      <h2 className="mb-3 text-xl font-semibold text-palette-4">Actions</h2>
      <nav className="flex flex-row flex-wrap gap-3 md:flex-col">
        <ActionBtn
          href={`/issues/${issueId}/edit`}
          className="bg-green-200 text-center text-green-900"
        >
          Edit Issue
        </ActionBtn>
        <ActionBtn
          href={`/issues/${issueId}/delete`}
          className="bg-red-200 text-center text-red-900"
        >
          Delete Issue
        </ActionBtn>
      </nav>
    </aside>
  );
};

export default IssueActions;
