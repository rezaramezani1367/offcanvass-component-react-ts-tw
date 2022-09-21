import React from "react";
import "./App.css";
import { AiOutlineMenu } from "react-icons/ai";
import useComponentVisible from "./hooks/useComponentVisible";
import OffCanvas from "./OffCanvas";

function App() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div>
      <div className="bg-slate-50 shadow-md p-3">
        {/* sidbar component */}
        <div>
          <OffCanvas
            setIsComponentVisible={setIsComponentVisible}
            ref={ref}
            isComponentVisible={isComponentVisible}
          />
        </div>
        <div className="container w-3/5  flex justify-between items-baseline">
          <div>
            <span className="text-red-500 font-bold cursor-pointer hover:text-red-700 text-lg">
              Home
            </span>
          </div>
          <div
            className="w-10 h-10 border border-slate-600 rounded-md cursor-pointer flex justify-center
       items-center hover:text-white transition-all duration-200 hover:bg-blue-600 "
            onClick={() => setIsComponentVisible(true)}
          >
            <AiOutlineMenu className="w-6 h-6  text-lg" />
          </div>
        </div>
      </div>
      <div className='container w-3/5 p-3 font-bold'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ex eius
        rerum sequi saepe tempora reiciendis qui. Voluptates reprehenderit
        soluta, facilis optio incidunt excepturi, nobis illum deleniti fugiat
        alias perferendis.
      </div>
    </div>
  );
}

export default App;
