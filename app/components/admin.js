import Image from "next/image";
import Link from "next/link";

export default function Admin({name1, name2 }) {
    return(
        <>
        <div className="w-80 rounded-2xl translate-y-10 shadow-2xl bg-red-100" >
        <div class="w-full max-w-sm rounded-lg  bg-red-100 ">
         
          <div className="px-5 p-5">

            <div className="flex items-center flex-col justify-between">
              <span className="text-xl text-center font-bold text-gray-900 ">{name1}</span>
              <span className="text-xl text-center font-bold text-gray-900 ">{name2}</span>

             
            </div>
          </div>
        </div>
      </div>
            <div className="py-3 bg-slate-200" />
        </>
    )
}