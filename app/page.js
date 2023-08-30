import "app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link.js";
import Image from "next/image.js";
import Lottie from "react-lottie-player";
import Study from "./components/study";
import Review from "./components/review";
import Chart from "./components/chart";
import Last from "./components/last";

export default function App() {
  return (
    <div>
      <section className="body-font bg-[#272d39]">
        <div className="container px-5 mx-auto text-white">
          <div className="text-center">
            <h1 className="text-7xl font-medium title-font text-white translate-y-48 mb-48">
              청강학원
            </h1>
            <Analytics />
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              청강학원에서 학습력과 성적을 올려보세요
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <Link href="/course">
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              시작하기
            </button>
          </Link>
          <p className="text-base leading-relaxed text-center mt-5 text-gray-200">
              크롬과 삼성인터넷에서 강의재생오류가 있습니다. 사파리나 카카오톡 링크열기 사용부탁합니다.
            </p>
        </div>
        <div className="translate-y-12 bg-[#272d39] py-12 rotate-3" />
      </section>
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Featured Courses
          </h1>
          <p className="mb-3 text-white text-sm leading-relaxed">추천강의</p>
          <div class="w-full max-w-sm  border rounded-lg shadow bg-gray-800 border-gray-700">
            <Link href="/mathtwo">
              <Image
                className="p-8"
                src={require("public/bible2.jpeg")}
                alt="product image"
              />
            </Link>
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight mb-10 text-white">
                수학의 바이블 수2
              </h5>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  47강
                </span>

                <Link
                  href="/mathtwo"
                  className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-indigo-500 hover:bg-indigo-600 focus:ring-blue-800"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>
          <Link href="/course">
            <h5 className="text-xl font-semibold tracking-tight mt-10 mb-40 text-white">
              전체 강의 보기 →
            </h5>
          </Link>
          <Study />
            <Review />
            <Chart />
            <Last />
          <div className="container bg-[#272d39]"></div>
        </div>

      </section>
    </div>
  );
}

{
  /**

    <div classNameName="text-white text-9xl bg-white dark:bg-stone-900">
      <div style={{ fontFamily: "font" }}>
        <h1 classNameName="text-center text-black dark:text-white text-6xl ">청강학원</h1>
      </div>
      <Wel />
      <Analytics />
      <div>
        <h1 classNameName="title-font text-center text-xs font-medium">
          수학강의 보러가기
        </h1>
        <button classNameName="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <Link href="http://sjh0623.iptime.org:21733/login/">Click</Link>
        </button>
      </div>
      <div style={{ height: 0, paddingBottom: 100 }} />
    </div>

/ */
}
