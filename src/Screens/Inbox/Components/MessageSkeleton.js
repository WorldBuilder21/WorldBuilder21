import React from "react";

export default function MessageSkeleton() {
  return (
    <div className="m-2 flex w-full animate-pulse flex-col rounded-lg border p-4 shadow">
      <div className="flex">
        <svg
          className="h-20 w-20 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div className="ml-3 flex flex-col items-start justify-center">
          <div className="mb-2 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="mt-2">
        <div className="mb-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}
