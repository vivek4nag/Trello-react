import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import AddCard from "./AddCard";

const Main = () => {
  return (
    <div className=" flex flex-col bg-slate-900 w-full">
      <div className="p-3 bg-gray-950 flex justify-between">
        <h2 className="text-lg">Working Board</h2>
      </div>
      <div className="flex flex-col w-full flex-grow relative">
        <div className="absolute mb-1 pb-1 left-0 right-0 top-0 bottom-0 p-3 flex flex-grow overflow-x-scroll overflow-y-hidden ">
          {/* niche wala is list */}
          <div className="mr-3 w-60 h-fit rounded-md p-2 bg-black ">
            <div className="list-body">
              <div className="flex justify-between p-1">
                <span>To do</span>
                <button className="hover:bg-gray-500 p-1 rounded-sm">
                  ...
                </button>
              </div>
              <div className="items flex justify-between items-center bg-stone-600 rounded-md px-2 py-1 cursor-pointer hover:scale-95 transition-all duration-300">
                <span>Project Description</span>
                <span className="flex justify-start items-start">
                  <button className="hover:bg-green-500 transition-all duration-300 p-1 rounded-lg">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </span>
              </div>


              <AddCard/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
