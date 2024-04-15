import React from "react";
import { motion } from "framer-motion";
import { ArrowDownOnModalIcon, TagIcon } from "@/components/svg";

function AddExpenseModal() {
  const date = new Date()
    .toString()
    .split(" ")
    .slice(0, 4)
    .join(" ");
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 20 }}
      transition={{ duration: 0.2 }}
      className="top-0 absolute bg-white opacity-95 backdrop-blur-sm w-full flex items-center justify-center h-[80vh] overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-gray-400  text-sm text-center">Today At {date}</p>
        <form className="flex justify-center items-center ">
          <input
            type="text"
            placeholder="0"
            className="text-center outline-none text-5xl border-b-2 border-gray-200 bg-transparent w-[200px] pb-2"
          />
        </form>
        <p className="mt-4">{ArrowDownOnModalIcon()}</p>
        <button className="flex items-center gap-2 text-gray-500 text-lg hover:scale-110 mb-4 transition-all">
          {TagIcon()} Select your tag
        </button>
        <div className="flex justify-around w-full items-center gap-2">
          <button className="w-1/2 py-2 border rounded-lg bg-red-200 hover:scale-110 hover:shadow-lg transition-all">
            Cancel
          </button>
          <button className="w-1/2 py-2 border rounded-lg bg-black text-white hover:scale-110 hover:shadow-lg transition-all">
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default AddExpenseModal;
