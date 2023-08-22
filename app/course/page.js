"use client";

import Link from "next/link";
import Anim from "../components/anim";
import Math from "../components/math";

export default function Course() {
  return (
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Math />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl dark:text-white text-3xl dark:text-whi mb-4 font-medium text-gray-900">
              수학강의보기
            </h1>
            <div className="flex justify-center">
              <Link href="/rule" className="inline-flex  text-gray-700 bg-gray-100  border-0 py-2 px-6 focus:outline-none hover:bg-gray-200  rounded text-lg">
                이용규칙
              </Link>
              <Link href="http://sjh0623.iptime.org:21733/login/" className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                보러가기
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}
//git commit -m "v.0"
//git push -u origin main