"use client";
import { useRouter } from "next/navigation";

export default function ErrorDisplay() {
  const router = useRouter();

  return (
    <>
      <h1 className="text-3xl font-bold">
        Something went wrong...
      </h1>
      <button
        onClick={() => router.refresh()}
        className="py-2 lg:py-2 px-6 lg:px-10 flex items-center gap-0.5 font-bold rounded-lg bg-blue-700 text-white hover:bg-blue-500 transition-all duration-300 ease-in-out group"
      >
        Try Again
      </button>
    </>
  )
}