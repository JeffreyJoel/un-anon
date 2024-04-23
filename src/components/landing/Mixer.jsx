"use client";

import { Copy, MoveDown, MoveRight } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../ui/button";

export const Mixer = () => {
  const [txId, setTxId] = useState("");
  const copyToClipboard = async (address) => {
    try {
      // const textToCopy = document.getElementById('textToCopy').innerText
      await navigator.clipboard.writeText(String(address));
      console.log("Address copied to clipboard");
      toast.success("Address copied ");
    } catch (err) {
      toast.error("Failed to copy address: " + String(err));
    }
  };
  return (
    <>
      <div className="py-8 px-6 max-w-5xl mx-auto border border-slate-900 bg-opacity-10 backdrop-blur-sm backdrop-filter rounded-xl ">
        <div className="flex flex-col md:flex-row justify-between items-center  ">
          <div className=" w-full md:w-3/4">
            <label
              htmlFor="first_name"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Tx Id
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              onChange={setTxId}
              required
            />
          </div>
          <MoveRight className=" w-96 h-12 mt-4 hidden md:block" />
          <MoveDown className=" w-96 h-8 my-4 block md:hidden" />
          <div className=" w-full md:w-3/4">
            <label
              htmlFor="receipient address"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Final Receipient Address
            </label>
            <div
              className="relative flex items-center justify-between  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onClick={copyToClipboard}
            >
              {/* // className=" mt-2 flex w-full max-w-sm cursor-pointer items-center justify-between rounded border border-gray-600 p-3 shadow" */}
              <span></span>
              <Copy />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Button
            variant={"outline"}
            className="py-5 px-7 gap-2 rounded-full border bg-[#0267FF] text-white text-md w-fit"
            translate="no"
          >
            Find
          </Button>
        </div>
      </div>
      <Toaster />
    </>
  );
};
