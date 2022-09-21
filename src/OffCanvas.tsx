import React, { forwardRef } from "react";
import { GrClose } from "react-icons/gr";

type OffCanvas = {
  isComponentVisible: boolean;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const OffCanvas = (
  { isComponentVisible, setIsComponentVisible }: OffCanvas,
  ref: any
) => {
  return (
    <div
      className={`fixed inset-0  w-screen h-screen bg-black bg-opacity-20 ${
        isComponentVisible ? "visible" : "invisible"
      }`}
    >
      <div className="flex justify-end h-full ">
        <div
          ref={ref}
          className={`w-96 max-w-full bg-slate-50 overflow-auto  shadow-xl  ${
            isComponentVisible ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 ease-in-out`}
        >
          <div className="py-4 px-6 shadow-xl border-b flex justify-between items-center">
            <div className="font-bold"> OffCanvas Component </div>
            <div
              onClick={() => setIsComponentVisible(false)}
              className="cursor-pointer text-lg"
            >
              <GrClose />
            </div>
          </div>
        {/* body */}
          <div className="flex justify-center items-center h-96  font-bold text-blue-600 text-2xl">
            OffCanvas Body Is Empty

          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(OffCanvas);
