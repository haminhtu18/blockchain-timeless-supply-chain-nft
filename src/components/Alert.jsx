import { useGlobalState } from "../store";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const Alert = () => {
  return (
    <div
      className={`fixed top-0 left-0
         w-screen h-screen flex items-center  
          justify-center bg-black bg-opacity-50
          transform  transition-transform duration-300 scale-100`}
    >
      <div
        className="flex flex-col justify-center items-center bg-[#151c25] min-w-min px-10
       shadow-xl shadow-[#e32970] rounded-xl py-3"
      >
        <FaRegTimesCircle className="text-red-600 text-4xl" />
        <p>Message...</p>
      </div>
    </div>
  );
};

export default Alert;
