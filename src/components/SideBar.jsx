import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Popover } from 'react-tiny-popover'

import { useState } from "react";


const SideBar = () => {


  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showPopOver, setShowPopOver] = useState(false)

  return (
    <div
      className={`bg-gray-800 border-r border-orange-300 h-screen transition-all duration-200 ${
        isCollapsed ? "w-[60px]" : "w-[270px]"
      }  pl-2`}
    >
      {isCollapsed && (
        <div className="py-2">
          <button
            className="hover:bg-lime-600 rounded-full px-3 transition-all duration-300"
            onClick={() => setIsCollapsed(false)}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      )}

      {!isCollapsed && (
        <div>
          <div className="flex justify-between py-4 px-2">
            <h4>Your workspace</h4>
            <button
              className="hover:bg-red-600 rounded-full px-3 transition-all duration-300"
              onClick={() => setIsCollapsed(true)}
            >
              {" "}
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </div>
          <div className="">
            <div className="flex justify-between px-2 mb-4">
              <h5> Your Boards</h5>
              

              <Popover
                isOpen={showPopOver}
                align="start"
                positions={['right', 'top', 'bottom', 'left' ]}
                content={
                <div className=" ml-3 p-3 w-80 flex flex-col justify-center items-center bg-slate-500 text-white rounded-md">
                  <div className="flex w-full mx-1 mb-2 justify-between">
                  <h4 className="py-1 ">Create Board</h4>
                  <button onClick={() => setShowPopOver(!showPopOver)} className=" right-2 hover:bg-red-700 transition-all duration-300 py-1 px-2 rounded-lg "> X </button>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="title"> Board Title</label>
                    <input type="text" name="title" id="title" className="h-8 my-2 rounded-md px-2 w-full bg-gray-200 text-black" />
                    <button className=" rounded-md mt-2  px-2 py-1 bg-green-600 hover:bg-green-700 transition-all duration-200"> Create</button>

                  </div>
                </div>
              }
              >
                <button onClick={() => setShowPopOver(!showPopOver)} className="hover:bg-gray-600 rounded-full px-2 transition-all duration-300">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              </Popover>
            </div>
          </div>
          <ul>
            <li>
              <button className="pl-4 pr-2 py-2 w-full text-sm flex justify-start hover:bg-gray-600 transition-all duration-300 rounded-md">
                <span>- Board number 1</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
