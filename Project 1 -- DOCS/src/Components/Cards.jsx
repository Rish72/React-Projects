import React from "react";
import { CiFileOn } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion"

function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} 
    whileTap={{ scale: 1.125 }} dragElastic={0.7} className="shrink-0 relative w-52 h-72 rounded-[50px] bg-zinc-900/90 text-white p-5 overflow-hidden">
      <CiFileOn />
      <p className="text-sm mt-10 leading-tight">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex pyitem-center justify-between mb-3 py-1 px-8">
          <h5>{data.filesize}</h5>
          <span className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">

            { data.close ?<IoCloseSharp/> :  <MdOutlineFileDownload
              size="0.8rem"
              color="
            #fff"
            />}
            
          </span>
        </div>
       {
        data.tag.isOpen &&  <div className={`tag w-full ${data.tag.tagColor === "blue" ?"bg-blue-600" : "bg-green-600"} py-5 flex items-center justify-center`}>
        <h3 className="text-sm">{data.tag.tagTitle}</h3>
      </div>
       }
      </div>
    </motion.div>
  );
}

export default Cards;
