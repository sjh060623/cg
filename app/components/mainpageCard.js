import Image from "next/image";
import Link from "next/link";

export default function mainpageCard({mathLink, rkddmldlfma, rkddmltn, mathImage}) {
    return(
        <>
        <div className="w-80 rounded-2xl translate-y-10 shadow-2xl bg-white" >
        <div class="w-full max-w-sm  border rounded-lg  bg-gray-100 transform transition-all hover:scale-105 ">
          <Link href={mathLink}>
            <Image
              className="p-8"
                
              src={mathImage}
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight mb-10 text-black">
              {rkddmldlfma}
            </h5>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 ">{rkddmltn}</span>

              <Link
                href={mathLink}
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-indigo-500 hover:bg-indigo-600 focus:ring-blue-800"
              >
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
            <div className="py-3 bg-slate-200" />
        </>
    )
}