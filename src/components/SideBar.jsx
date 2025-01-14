import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

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
              <button className="hover:bg-gray-600 rounded-full px-2 transition-all duration-300">
                <FontAwesomeIcon icon={faPlus} />
              </button>
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
