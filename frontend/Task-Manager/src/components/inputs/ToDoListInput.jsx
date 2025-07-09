import React, { useState } from 'react'
import { HiOutlineTrash, HiMiniPlus } from 'react-icons/hi2';
import { ReactSortable } from "react-sortablejs";

const ToDoListInput = ({ todoList, setTodoList }) => {

    const [option, setOption] = useState("");

    //Handling adding task
    const handleAddOption = () => {
        if (option.trim()) {
            setTodoList([...todoList, option.trim()]);
            setOption("");
        }
    }


    //Handling deleting task
    const handleDeleteOption = (index) => {
        var updatedTodoList = todoList.filter((_, i) => i !== index);
        setTodoList(updatedTodoList);
    }


    return (
        <div>
            <ReactSortable
                filter=".addImageButtonContainer"
                dragClass="sortableDrag"
                list={todoList}
                setList={setTodoList}
                animation="200"
                easing="ease-out"
            >
                {todoList.map((item, index) =>
                (
                    <div className="draggableItem flex justify-between bg-gray-50 border border-gray-100 px-3 py-2 rounded mb-2 mt-2"

                        key={item}>
                        <p className="text-sm text-black">
                            <span className="text-sm text-gray-400 font-semibold mr-2">
                                {index < 9 ? `0${index + 1}` : index + 1}
                            </span>
                            {item}
                        </p>
                        <button className="cursor-pointer"
                            onClick={() => { handleDeleteOption(index) }}>
                            <HiOutlineTrash className=" text-lg text-red-500" />
                        </button>
                    </div>
                ))}
            </ReactSortable>

            <div className="flex items-center gap-5 mt-4">
                <input
                    type="text"
                    className="w-full text-sm outline-none border border-gray-100 px-3 py-2 rounded"
                    placeholder="Enter task"
                    value={option}
                    onChange={({ target }) => setOption(target.value)}
                />
                <button className="cursor-pointer card-btn text-nowrap" onClick={handleAddOption}>
                    <HiMiniPlus className="text-lg" /> Add
                </button>
            </div>

        </div>
    )
}

export default ToDoListInput