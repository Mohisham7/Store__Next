import { Loader } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2 h-screen">
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md font-bold">
            MH
          </div>
          <span className="text-xl font-bold">
            Store<span className="text-blue-600">_Mohamed</span>
          </span>
        </div>
        <Loader className="animate-spin" />
      </div>
    </>
  );
}
