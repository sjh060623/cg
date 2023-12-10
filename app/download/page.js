import Link from "next/link";
import DownCard from "../components/downCard";
import Image from "next/image";

export default function Download() {
  return (
    <section window className="p-5 sm:-5 translate-y-20 ">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
      <h1 className=" text-3xl font-bold -translate-y-6">Download</h1>
      <h1 className=" text-gray-400 text-xl font-bold -translate-y-6">
      수학의 바이블 교재
      </h1>
      <div className="bg-white  relative  sm:rounded-lg  rounded-xl">
        <div className="flex flex-col  items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className=" flex flex-col  space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <div className="flex items-center space-x-3">
            <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs uppercase text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      교재
                    </th>
                    <th scope="col" className="px-4 py-3"></th>
                    <th scope="col" className="px-4 py-3"></th>
                    <th scope="col" className="px-4 py-3"></th>
                    <th scope="col" className="px-4 py-3">
                      크기
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">크기</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium  whitespace-nowrap text-black"
                    >
                      수학의 바이블 수(상)
                    </th>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">16.44MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/-N8o408O/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20(%E1%84%89%E1%85%A1%E1%86%BC).pdf"
                      download="수학의 바이블 (상)"
                    >
                      <Image
                        className="translate-y-3"
                        width={25}
                        height={25}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td className="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium  whitespace-nowrap text-black"
                    >
                      수학의 바이블 수(하)
                    </th>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">31.09MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/s6CfwUq6/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20(%E1%84%92%E1%85%A1).pdf"
                      download="수학의 바이블 (하)"
                    >
                      <Image
                        className="translate-y-3"
                        width={25}
                        height={25}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td className="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium  whitespace-nowrap text-black"
                    >
                      수학의 바이블 수I
                    </th>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">13.63MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/A914ukWa/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%20I.pdf"
                      download="수학의 바이블 수I"
                    >
                      <Image
                        className="translate-y-3"
                        width={25}
                        height={25}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td className="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium whitespace-nowrap text-black"
                    >
                      수학의 바이블 수II
                    </th>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">18.17MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/gOrk0dXc/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%20II.pdf"
                      download="수학의 바이블 수II"
                    >
                      <Image
                        className="translate-y-3"
                        width={25}
                        height={25}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td className="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
        </div>
      </div>
    </div>
    </section>

  );
}



    
    
    
