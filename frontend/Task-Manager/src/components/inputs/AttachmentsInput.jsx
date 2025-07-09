import React, { useState } from 'react'
import { HiOutlineTrash, HiMiniPlus } from 'react-icons/hi2';
import { LuPaperclip } from 'react-icons/lu';

const AttachmentsInput = ({ attachments, setAttachments }) => {

    const [option, setOption] = useState("");

    //Handling adding task
    const handleAddOption = () => {
        if (option.trim()) {
            setAttachments([...attachments, option.trim()]);
            setOption("");
        }
    }


    //Handling deleting task
    const handleDeleteOption = (index) => {
        var updatedAttachments = attachments.filter((_, i) => i !== index);
        setAttachments(updatedAttachments);
    }


    return (
        <div>
            {attachments.map((item, index) =>
            (
                <div className="flex justify-between bg-gray-50 border border-gray-100 px-3 py-2 rounded mb-2 mt-2"
                    key={item}>
                    <div className="flex flex-1 items-center gap-3">
                        <LuPaperclip className="text-gray-400" />
                        <p className="text-sm text-black">
                            {item}
                        </p>
                    </div>

                    <button className="cursor-pointer"
                        onClick={() => { handleDeleteOption(index) }}>
                        <HiOutlineTrash className=" text-lg text-red-500" />
                    </button>
                </div>
            ))}

            <div className="flex items-center gap-5 mt-4">
                <div className="flex flex-1 items-center gap-3 border border-gray-100 px-3 rounded ">
                    <LuPaperclip className="text-gray-400" />
                    <input
                        type="text"
                        className="w-full text-sm outline-none  py-2 rounded"
                        placeholder="Add link to the resource"
                        value={option}
                        onChange={({ target }) => setOption(target.value)}
                    />
                </div>

                <button className="cursor-pointer card-btn text-nowrap" onClick={handleAddOption}>
                    <HiMiniPlus className="text-lg" /> Add
                </button>
            </div>
        </div>
    )
}

export default AttachmentsInput