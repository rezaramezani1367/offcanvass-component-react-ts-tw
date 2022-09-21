import React, { forwardRef } from "react";

type OffCanvas = {
  isComponentVisible: boolean;
};

const OffCanvas = ({ isComponentVisible }: OffCanvas, ref: any) => {
  return (
    <div className={`fixed inset-0  w-screen h-screen bg-black bg-opacity-10 ${isComponentVisible?'visible':'invisible'}`}>
      <div className="flex justify-end h-full ">
        <p
          ref={ref}
          className={`w-96  bg-slate-100 overflow-auto  shadow-xl  ${
            isComponentVisible ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 ease-in-out`}
        >
          <div>
            
          </div>
          
        </p>
      </div>
    </div>
  );
};

export default forwardRef(OffCanvas);
