"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

interface IssueForm {
  title: string;
  description: string;
}

export default function NewIssuePage() {
  const { register, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  const [error, setError] = useState("");

  const sendRequest = async (data: IssueForm) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("An unxpected error occurred. Please try again.");
    }
  };

  return (
    <main className="mx-6 mt-6">
      <section className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-3xl font-semibold text-palette-4">
          Create a New Issue
        </h1>
        {error && (
          <div className="mb-3 rounded-md bg-red-200 p-3 text-red-700">
            {error}
          </div>
        )}
        <form method="post" onSubmit={handleSubmit(sendRequest)}>
          <div className="flex flex-col justify-center gap-3">
            <input
              className="rounded-md border border-palette-2 p-3 outline-none"
              type="text"
              placeholder="Title"
              {...register("title")}
            />
            <textarea
              className="max-h-96 min-h-56 rounded-md border border-palette-2 p-3 outline-none"
              placeholder="Description"
              {...register("description")}
            ></textarea>
            <input
              className="cursor-pointer rounded-md border border-transparent bg-palette-2 p-3 font-medium text-palette-4 transition-all duration-300 hover:border-palette-1"
              type="submit"
              value="Submit New Issue"
            />
          </div>
        </form>
      </section>
    </main>
  );
}
