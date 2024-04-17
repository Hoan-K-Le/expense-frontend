import React, { useState } from "react";
import { motion } from "framer-motion";
import { AddIcon, LeftArrow } from "@/components/svg";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store";
import { addTags } from "@/store/expenseReducer";

function SelectTagModal({ selectTagModalRef }: { selectTagModalRef: any }) {
  const [selectedTagInputModal, setSelectedTagInputModal] = useState(false);
  const [tagInput, setTagInput] = useState({ sticker: "", tagName: "" });
  const dispatch = useDispatch();
  const tags = useAppSelector(state => state.expense.listOfTags);

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTagInput(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmTag = () => {
    const newTag = {
      sticker: tagInput.sticker,
      tag: tagInput.tagName,
    };
    dispatch(addTags(newTag));
    setTagInput(prev => ({ ...prev, sticker: "", tagName: "" }));
    setSelectedTagInputModal(false);
  };

  return (
    <>
      <div
        ref={selectedTagInputModal ? null : selectTagModalRef}
        className=" border-t-2 h-screen top-0 fixed w-full opacity-95 backdrop-blur-sm z-50 py-2"
      >
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 20 }}
          transition={{ duration: 0.2 }}
          className=" p-3 border-t-2 rounded-xl h-[55vh] bg-white w-full fixed -bottom-10 backdrop-blur-sm "
        >
          <p className="text-4xl font-bold mb-4 text-center">Expenses</p>
          <div className=" flex items-center flex-wrap justify-around gap-5">
            <button
              onClick={() => setSelectedTagInputModal(true)}
              className="p-2 rounded-full border text-md text-gray-200"
            >
              {AddIcon()}
            </button>
            {tags &&
              tags.map((t: any) => (
                <div className="flex flex-col items-center">
                  <p>{t.sticker}</p>
                  <p>{t.tag}</p>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
      {selectedTagInputModal && (
        <div className=" border-t-2 h-screen top-0 fixed w-full opacity-95 backdrop-blur-sm z-50 py-2">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className=" p-3 border-t-2 rounded-xl h-[60vh] bg-white w-full fixed -bottom-10 backdrop-blur-sm "
          >
            <button
              onClick={() => setSelectedTagInputModal(false)}
              className="text-4xl font-bold mb-4 border-b w-full"
            >
              {LeftArrow()}
            </button>
            <div className="flex justify-center flex-col items-center gap-2">
              <p>NEW TAG</p>
              <input
                onChange={handleTagInputChange}
                value={tagInput.sticker}
                name="sticker"
                className="text-center border-b py-2 outline-none"
                type="text"
                placeholder=":) (sticker)"
              />
              <input
                onChange={handleTagInputChange}
                name="tagName"
                value={tagInput.tagName}
                className="text-center border-b py-2 outline-none"
                type="text"
                placeholder="rent(name)"
              />
              <button
                onClick={handleConfirmTag}
                className="bg-black text-white px-3 py-2 rounded-lg mt-4"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default SelectTagModal;
