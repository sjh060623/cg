"use client";

import Link from "next/link";
import Anim from "../components/anim";
import Math from "../components/math";

export default function Course() {
  return (
      <section class="text-gray-600 body-font ">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Math />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl dark:text-white text-3xl dark:text-whi mb-4 font-medium text-gray-900">
              수학강의보기
            </h1>
            <div class="flex justify-center">
              <Link href="/rule" class="inline-flex  text-gray-700 bg-gray-100  border-0 py-2 px-6 focus:outline-none hover:bg-gray-200  rounded text-lg">
                이용규칙
              </Link>
              <Link href="http://211.109.24.182:15532/login/" class="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                보러가기
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}
