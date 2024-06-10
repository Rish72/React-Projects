import React from "react";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";

function Cards() {
  return (
    <div className="relative w-52 h-72 rounded-[50px] bg-zinc-900/90 text-white p-5 overflow-hidden">
      <CiFileOn />
      <p className="text-sm mt-10 leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        nesciunt ab accusantium.
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex pyitem-center justify-between mb-3 py-1 px-8">
          <h5>0.4MB</h5>
          <span className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
            <MdOutlineFileDownload
              size="0.8rem"
              color="
            #fff"
            />
          </span>
        </div>
        <div className="tag w-full bg-green-700 py-5 flex items-center justify-center">
          <h3 className="text-sm">Download Now</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
