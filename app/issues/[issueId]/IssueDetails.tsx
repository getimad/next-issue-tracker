import Issue from "@interfaces/Issue";

interface Props {
  issue: Issue;
}

const IssueDetails = ({ issue }: Props) => {
  return (
    <section className="col-span-3 flex flex-col gap-3">
      <h1 className="text-3xl font-semibold text-palette-4">{issue.title}</h1>
      <div className="flex justify-between">
        <span>{issue.status}</span>
        <span className="text-palette-3">{issue.createdAt.toDateString()}</span>
      </div>
      <div className="min-h-48 rounded-md bg-palette-2 p-3">
        <p>{issue.description}</p>
      </div>
    </section>
  );
};

export default IssueDetails;
