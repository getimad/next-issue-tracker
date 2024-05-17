import ClientBtn from "@components/ClientBtn";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  issueId: string;
  setIsOpenDialog: (isOpen: boolean) => void;
}

const DeleteDialogBox: React.FC<Props> = ({ issueId, setIsOpenDialog }) => {
  const router = useRouter();

  const handleDeleteIssue = async () => {
    await axios.delete(`/api/issues/${issueId}`);
    router.push("/issues");
  };

  return (
    <div className="fixed bottom-1/2 right-1/2 w-[600px] translate-x-1/2 translate-y-1/2 rounded-md bg-white p-6 shadow-xl">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-palette-4">
          Confirm Deletion
        </h1>
        <p className="text-lg text-palette-4">
          Are you sure you want to delete this issue? This action cannot be
          undone.
        </p>
        <div className="flex flex-row gap-3">
          <ClientBtn
            className="bg-palette-1 text-palette-4"
            onClick={() => setIsOpenDialog(false)}
          >
            Cancel
          </ClientBtn>
          <ClientBtn
            className="bg-red-200 text-red-900"
            onClick={handleDeleteIssue}
          >
            Delete Issue
          </ClientBtn>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialogBox;
