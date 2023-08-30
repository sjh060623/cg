import Link from "next/link";
import Compo from "./compo";
import Image from "next/image";

export default function Mathgi() {
  return (
    <section class="translate-y-40 p-3 sm:p-5 mb-44">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div class="flex items-center space-x-3 w-full md:w-auto">
                <h1 className="text-white text-3xl">수학의 바이블 기하</h1>
                <Link
                  className="flex text-white"
                  href="http://sjh0623.iptime.org:14131/api/public/dl/ugjitRER/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%A1.pdf"
                  download="수학의 바이블 기하"
                >
                  <h1>
                    {"　"}교제 다운로드{"　"}
                  </h1>
                  <Image
                    width={20}
                    height={20}
                    src={require("public/download.png")}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto"></div>
        </div>
      </div>
    </section>
  );
}
