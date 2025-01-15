import { useState } from "react";

const AddCard = () => {

    const [showTextArea, setShowTextArea] = useState(false)

    return (
        <div>
            <div className="flex flex-col">
                {showTextArea && <div>
                    <textarea
                        className="w-full p-1 mt-2 rounded-md text-black"
                        cols="30"
                        rows="2"
                        placeholder="Enter card Title"
                    ></textarea>
                    <div className="flex p-1 justify-between ">
                        <button className="bg-sky-600 rounded-md p-1 hover:bg-sky-700 transition-all duration-300">
                            Add Card
                        </button>
                        <button onClick={() => setShowTextArea(!showTextArea)} className="py-1 px-2 text-lg rounded-md bg-red-500 hover:bg-red-600 transition-all duration-300">
                            {" "}
                            X{" "}
                        </button>
                    </div>
                </div>}

                {!showTextArea && <button onClick={() => setShowTextArea(!showTextArea)} className="flex justify-start w-full p-2 mt-1 rounded-md hover:bg-slate-500 transition-all duration-200">+ Add a Card</button>}
            </div>
        </div>
    );
};

export default AddCard;
