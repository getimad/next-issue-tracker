"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { createIssueSchema } from "@/app/schemas/IssueSchema";
import { z } from "zod";
import axios from "axios";
import Spinner from "@components/Spinner";

// Get the type of the createIssueSchema
type IssueForm = z.infer<typeof createIssueSchema>;

export default function NewIssuePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (data: IssueForm) => {
    try {
      setIsLoading(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setIsLoading(false);
      setServerError("An unxpected error occurred. Please try again.");
    }
  };

  return (
    <main className="mx-6 mt-6">
      <section className="mx-auto max-w-2xl">
        {/* Title */}
        <h1 className="mb-6 text-3xl font-semibold text-palette-4">
          Create a New Issue
        </h1>

        {/* Errors */}
        {(serverError || errors.title || errors.description) && (
          <ul className="mb-3 rounded-md bg-red-200 p-3 text-sm font-medium text-red-700">
            {serverError && <li>{serverError}</li>}
            {errors.title && <li>{errors.title.message}</li>}
            {errors.description && <li>{errors.description.message}</li>}
          </ul>
        )}

        {/* Form */}
        <form method="post" onSubmit={handleSubmit(sendRequest)}>
          <div className="flex flex-col justify-center gap-3">
            <div>
              <input
                className="mb-1 w-full rounded-md border border-palette-2 p-3 outline-none"
                type="text"
                placeholder="Title"
                {...register("title")}
              />
            </div>
            <div>
              <textarea
                className="max-h-96 min-h-56 w-full rounded-md border border-palette-2 p-3 outline-none"
                placeholder="Description"
                {...register("description")}
              ></textarea>
            </div>
            <button
              className="flex cursor-pointer items-center justify-center gap-3 rounded-md border border-transparent bg-palette-2 p-3 font-medium text-palette-4 transition-all duration-300 hover:border-palette-1"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Spinner />}
              Submit New Issue
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
