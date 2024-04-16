import React, {
  SetStateAction,
  useState,
  useEffect,
  FormEventHandler,
  FormEvent,
} from "react";
import { motion } from "framer-motion";
import { ArrowDownOnModalIcon, TagIcon } from "@/components/svg";
import ConfirmationModal from "@/components/ConfirmationModal";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store";

function AddExpenseModal({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [isConfirmationOpen, setIsConformationOpen] = useState(false);
  const [expense, setExpense] = useState({
    price: "",
    tag: "",
    date: "",
  });

  const userExpenses = useAppSelector(state => state.expense);
  const date = new Date()
    .toString()
    .split(" ")
    .slice(0, 4)
    .join(" ");

  console.log(userExpenses, "hello expenses");
  const handleConfirmationModal = () => {
    setIsConformationOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense(prev => ({ ...prev, price: e.target.value }));
  };

  const handleForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: -20 }}
      transition={{ duration: 0.2 }}
      className=" absolute top-0 bg-white opacity-95 backdrop-blur-sm w-full flex items-center justify-center h-screen overflow-hidden flex-col"
    >
      <div className="flex flex-col items-center justify-center gap-4 ">
        <p className="text-gray-400  text-sm text-center">Today at {date}</p>
        <form
          onSubmit={handleForm}
          className="flex justify-center items-center flex-col gap-4"
        >
          <input
            onChange={handleChange}
            type="text"
            value={expense.price}
            placeholder="0"
            name="price"
            className="text-center outline-none text-5xl border-b-2 border-gray-200 bg-transparent w-[200px] pb-2"
          />
          <p className="mt-4">{ArrowDownOnModalIcon()}</p>
          <button className="flex items-center gap-2 text-gray-500 text-lg hover:scale-110 mb-4 transition-all">
            {TagIcon()} Select your tag
          </button>
          <div className="flex justify-around w-full items-center gap-2 relative ">
            <button
              onClick={() => setIsOpen(false)}
              className="w-1/2 py-2 border rounded-lg bg-red-200 hover:scale-110 hover:shadow-lg transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmationModal}
              className="w-1/2 py-2 border rounded-lg bg-black text-white hover:scale-110 hover:shadow-lg transition-all"
            >
              Next
            </button>
          </div>
        </form>
      </div>
      {isConfirmationOpen && (
        <ConfirmationModal
          setIsConformationOpen={setIsConformationOpen}
          expense={expense}
          setIsOpen={setIsOpen}
        />
      )}
    </motion.div>
  );
}

export default AddExpenseModal;
