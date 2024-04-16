import React from "react";
import { motion } from "framer-motion";
import { AddIcon } from "@/components/svg";

function SelectTagModal() {
  return (
    <div className=" border-2 h-screen top-0 fixed w-full opacity-95 backdrop-blur-sm z-50 py-2">
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 20 }}
        transition={{ duration: 0.2 }}
        className=" p-3 border-t-2 rounded-xl h-[55vh] bg-white w-full fixed -bottom-10 backdrop-blur-sm "
      >
        <p className="text-4xl font-bold mb-4 text-center">Expenses</p>
        <div>
          <button className="p-2 rounded-full border text-md text-gray-200">
            {AddIcon()}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default SelectTagModal;
