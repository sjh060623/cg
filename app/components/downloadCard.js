import Image from "next/image";
import Link from "next/link";

export default function DownloadCard({name, link}) {
    return(
        <>
        <div className="w-80 rounded-2xl translate-y-10 shadow-2xl bg-white" >
        <div class="w-full max-w-sm  border rounded-lg  bg-gray-100 transform transition-all hover:scale-105 ">
          <Link href={link}>
          
          </Link>
          <div className="px-5 p-5">

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 ">{name}</span>

              <Link
                href={link}
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-indigo-500 hover:bg-indigo-600 focus:ring-blue-800"
              >
                바로가기
              </Link>
            </div>
          </div>
        </div>
      </div>
            <div className="py-3 bg-slate-200" />
        </>
    )
}