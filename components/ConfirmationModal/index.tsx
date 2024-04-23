import React, { SetStateAction } from "react";
import { LockIcon, ArrowRightIcon } from "@/components/svg";
import { motion } from "framer-motion";
import { ExpenseProp } from "@/store/expenseReducer";
import { addExpense } from "@/store/expenseReducer";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store";

interface ConfirmationModalProps {
  setIsConformationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  expense: ExpenseProp;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  confirmRef: any;
}
function ConfirmationModal({
  setIsConformationOpen,
  expense,
  setIsOpen,
  confirmRef,
}: ConfirmationModalProps) {
  const dispatch = useDispatch();
  const handleCancelConformation = () => {
    setIsConformationOpen(false);
  };
  const { darkMode } = useAppSelector(state => state.darkMode);
  const handleCreateNewExpense = () => {
    const newExpense = {
      price: expense.price,
      date: new Date()
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" "),
      tag: expense.tag,
      sticker: expense.sticker,
    };
    dispatch(addExpense(newExpense));
    setIsConformationOpen(false);
    setIsOpen(false);
  };

  return (
    <div
      ref={confirmRef}
      className=" border-2 h-screen top-0 fixed w-full  opacity-95 backdrop-blur-sm z-50"
    >
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 20 }}
        transition={{ duration: 0.2 }}
        className={` p-3 border-t-2 rounded-xl h-[55vh] ${
          darkMode ? "bg-base-content" : "bg-white"
        } fixed -bottom-10 backdrop-blur-sm `}
      >
        <p className="text-4xl font-bold mb-4">Confirm</p>
        <div className="flex items-center gap-3">
          <p className="bg-gray-400 rounded-full p-2">{LockIcon()}</p>
          <p className="text-gray-500">
            Help us ensure accuracy by reviewing your expense before confirming
            because you can not edit later.
          </p>
        </div>
        <div className=" flex items-center gap-2 justify-evenly h-[25vh] text-2xl">
          <span>{expense.price}</span>
          <span>{ArrowRightIcon()}</span>
          <span>{expense.tag}</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleCancelConformation}
            className="w-1/2 bg-red-200 p-4 rounded-lg hover:scale-105 hover:shadow-md transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateNewExpense}
            className="w-1/2 rounded-lg bg-black  text-white p-4 hover:scale-105 hover:shadow-md transition-all"
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ConfirmationModal;
