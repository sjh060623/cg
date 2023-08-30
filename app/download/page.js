import Link from "next/link";
import DownCard from "../components/downCard";
import Image from "next/image";

export default function Download() {
  return (
    <>
      <section className="bg-[#272d39] ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-7xl tracking-tight font-extrabold lg:text-6xl translate-y-40 mb-44 text-white text-primary-600 dark:text-primary-500">
              Download
            </h1>
            <p className="mb-4 text-xl tracking-tight font-bold md:text-2xl text-white">
              수업자료 다운로드
            </p>
            <p className="mb-4 text-lg font-light text-gray-400">
              수학의 바이블 PDF를 다운받을 수 있습니다.{" "}
            </p>
          </div>
        </div>
      </section>

      <section class="bg-gray-900 p-3 sm:p-5">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div class="bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div class="w-full md:w-1/2"></div>
              <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <div class="flex items-center space-x-3 w-full md:w-auto">
                  <div
                    id="filterDropdown"
                    class="z-10 hidden w-48 p-3 rounded-lg shadow bg-gray-700"
                  >
                    <h6 class="mb-3 text-sm font-medium text-white">
                      Choose brand
                    </h6>
                    <ul
                      class="space-y-2 text-sm"
                      aria-labelledby="filterDropdownButton"
                    >
                      <li class="flex items-center">
                        <input
                          id="apple"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 rounded text-primary-600 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                        />
                        <label
                          for="apple"
                          class="ml-2 text-sm font-medium text-gray-100"
                        >
                          Apple (56)
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="fitbit"
                          type="checkbox"
                          value=""
                          class="w-4 h-4  rounded text-primary-600 focus:ring-primary-500 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                        />
                        <label
                          for="fitbit"
                          class="ml-2 text-sm font-medium text-gray-100"
                        >
                          Microsoft (16)
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="razor"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                        />
                        <label
                          for="razor"
                          class="ml-2 text-sm font-medium text-gray-100"
                        >
                          Razor (49)
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="nikon"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="nikon"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Nikon (12)
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="benq"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="benq"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          BenQ (74)
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-400">
                <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
                  <tr>
                    <th scope="col" class="px-4 py-3">
                      제목
                    </th>
                    <th scope="col" class="px-4 py-3"></th>
                    <th scope="col" class="px-4 py-3"></th>
                    <th scope="col" class="px-4 py-3"></th>
                    <th scope="col" class="px-4 py-3">
                      크기
                    </th>
                    <th scope="col" class="px-4 py-3">
                      <span class="sr-only">크기</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium  whitespace-nowrap text-white"
                    >
                      수학의 바이블 수(상)
                    </th>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3">16.44MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/-N8o408O/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20(%E1%84%89%E1%85%A1%E1%86%BC).pdf"
                      download="수학의 바이블 (상)"
                    >
                      <Image
                        className="translate-y-3"
                        width={30}
                        height={30}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td class="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium  whitespace-nowrap text-white"
                    >
                      수학의 바이블 수(하)
                    </th>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3">31.09MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/s6CfwUq6/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20(%E1%84%92%E1%85%A1).pdf"
                      download="수학의 바이블 (하)"
                    >
                      <Image
                        className="translate-y-3"
                        width={30}
                        height={30}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td class="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium  whitespace-nowrap text-white"
                    >
                      수학의 바이블 수I
                    </th>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3">13.63MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/A914ukWa/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%20I.pdf"
                      download="수학의 바이블 수I"
                    >
                      <Image
                        className="translate-y-3"
                        width={30}
                        height={30}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td class="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium whitespace-nowrap text-white"
                    >
                      수학의 바이블 수II
                    </th>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3">18.17MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/gOrk0dXc/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%20II.pdf"
                      download="수학의 바이블 수II"
                    >
                      <Image
                        className="translate-y-3"
                        width={30}
                        height={30}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td class="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium whitespace-nowrap text-white"
                    >
                      수학의 바이블 확률과 통계
                    </th>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3">16.73MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/d7_KgVho/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20(%E1%84%92%E1%85%AA%E1%86%A8%E1%84%90%E1%85%A9%E1%86%BC).pdf"
                      download="수학의 바이블 (확통)"
                    >
                      <Image
                        className="translate-y-3"
                        width={30}
                        height={30}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td class="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium  whitespace-nowrap text-white"
                    >
                      수학의 바이블 기하
                    </th>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3">19MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/ugjitRER/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%A1.pdf"
                      download="수학의 바이블 기하"
                    >
                      <Image
                        className="translate-y-3"
                        width={30}
                        height={30}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td class="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium whitespace-nowrap text-white"
                    >
                      수학의 바이블 미적분
                    </th>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3"></td>
                    <td class="px-4 py-3">50.03MB</td>
                    <Link
                      href="http://sjh0623.iptime.org:14131/api/public/dl/Q8Hem2w7/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%86%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%87%E1%85%AE%E1%86%AB.pdf"
                      download="수학의 바이블 미적분"
                    >
                      <Image
                        className="translate-y-3"
                        width={30}
                        height={30}
                        src={require("public/download.png")}
                      />
                    </Link>
                    <td class="px-4 py-3 flex items-center justify-end"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
