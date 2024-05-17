import { $Enums } from "@prisma/client";

interface Issue {
  id: number;
  title: string;
  description: string;
  status: $Enums.Status;
  createdAt: Date;
  updatedAt: Date;
}

export default Issue;
