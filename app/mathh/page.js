import Link from "next/link";
import Compo from "./compo";
import Image from "next/image";

export default function Mathh() {
  return (
    <section window class=" p-3 sm:-5 translate-y-20 ">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <h1 className=" text-3xl font-bold -translate-y-6">Course</h1>
        <h1 className=" text-gray-400 text-xl font-bold -translate-y-6">
          수학의 바이블 수(상)
        </h1>
        <div class="bg-white  relative shadow-2xl sm:rounded-lg overflow-hidden rounded-xl">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div class="flex items-center space-x-3 w-full md:w-auto">
                {/*
                <h1 className="text-white text-3xl">수학의 바이블 수(상)</h1>
                <Link
                  className="flex text-black"
                  href="http://sjh0623.iptime.org:14131/api/public/dl/-N8o408O/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20(%E1%84%89%E1%85%A1%E1%86%BC).pdf"
                  download="수학의 바이블 (상)"
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
             */}
              </div>
            </div>
          </div>
          <div class="overflow-x-auto">
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    다항식
                  </th>
                </tr>
              </thead>
              <tbody class="detail-body">
                <Compo
                  title="1강 - 다항식의 연산(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/VlErY6Bu/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/1%EA%B0%95%20-%20%EB%8B%A4%ED%95%AD%EC%8B%9D%EC%9D%98%20%EC%97%B0%EC%82%B0(1).mp4"
                />
                <Compo
                  title="2강 - 다항식의 연산(2)"
                  time="46분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/qo6N4kdV/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/2%EA%B0%95%20-%20%EB%8B%A4%ED%95%AD%EC%8B%9D%EC%9D%98%20%EC%97%B0%EC%82%B0(2).mp4"
                />
                <Compo
                  title="3강 - 다항식의 연산(3)"
                  time="50분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/qaSDIH61/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/3%EA%B0%95%20-%20%EB%8B%A4%ED%95%AD%EC%8B%9D%EC%9D%98%20%EC%97%B0%EC%82%B0(3).mp4"
                />
                <Compo
                  title="4강 - 다항식의 연산(4)"
                  time="42분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/j9HYxOWx/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/4%EA%B0%95%20-%20%EB%8B%A4%ED%95%AD%EC%8B%9D%EC%9D%98%20%EC%97%B0%EC%82%B0(4).mp4"
                />
                <Compo
                  title="5강 - 다항식의 연산(5)"
                  time="46분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/aDVuwCtn/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/5%EA%B0%95%20-%20%EB%8B%A4%ED%95%AD%EC%8B%9D%EC%9D%98%20%EC%97%B0%EC%82%B0(5).mp4"
                />
                <Compo
                  title="6강 - 다항식의 연산(6)"
                  time="43분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/pooNXxNq/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/6%EA%B0%95%20-%20%EB%8B%A4%ED%95%AD%EC%8B%9D%EC%9D%98%20%EC%97%B0%EC%82%B0(6).mp4"
                />
                <Compo
                  title="7강 - 다항식의 연산(7)"
                  time="28분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/BldF7pj-/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/7%EA%B0%95%20-%20%EB%8B%A4%ED%95%AD%EC%8B%9D%EC%9D%98%20%EC%97%B0%EC%82%B0(7).mp4"
                />
                <Compo
                  title="8강 - 나머지정리(1)"
                  time="46분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/TlU2PhkF/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/8%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%82%98%EB%A8%B8%EC%A7%80%EC%A0%95%EB%A6%AC(1).mp4"
                />
                <Compo
                  title="9강 - 나머지정리(2)"
                  time="46분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/P3EECUJz/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/9%EA%B0%95%20-%20%EB%82%98%EB%A8%B8%EC%A7%80%EC%A0%95%EB%A6%AC(2).mp4"
                />
                <Compo
                  title="10강 - 나머지정리(3)"
                  time="39분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/EzbxWbPW/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/10%EA%B0%95%20-%20%EB%82%98%EB%A8%B8%EC%A7%80%EC%A0%95%EB%A6%AC(3).mp4"
                />
                <Compo
                  title="11강 - 나머지정리(4)"
                  time="50분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/x44UvWCC/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/11%EA%B0%95%20-%20%EB%82%98%EB%A8%B8%EC%A7%80%EC%A0%95%EB%A6%AC(4).mp4"
                />
                <Compo
                  title="12강 - 나머지정리(5)"
                  time="57분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/z1bTVlYq/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/12%EA%B0%95%20-%20%EB%82%98%EB%A8%B8%EC%A7%80%EC%A0%95%EB%A6%AC(5).mp4"
                />
                <Compo
                  title="13강 - 인수분해(1)"
                  time="52분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/ZO3zq4Mw/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/13%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B8%EC%88%98%EB%B6%84%ED%95%B4(1).mp4"
                />
                <Compo
                  title="14강 - 인수분해(2)"
                  time="49분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/9SQZJWl3/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/14%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B8%EC%88%98%EB%B6%84%ED%95%B4(2).mp4"
                />
                <Compo
                  title="15강 - 인수분해(3)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/GYdEiKDn/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/15%E1%84%80%E1%85%A1%E1%86%BC%20%20-%20%EC%9D%B8%EC%88%98%EB%B6%84%ED%95%B4(3).mp4"
                />
                <Compo
                  title="16강 - 인수분해(4)"
                  time="41분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/qMzIUh6z/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/16%EA%B0%95%20-%20%EC%9D%B8%EC%88%98%EB%B6%84%ED%95%B4(4).mp4"
                />
                <Compo
                  title="17강 - 인수분해(5)"
                  time="43분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/_WGowTWQ/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/1.%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/17%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B8%EC%88%98%EB%B6%84%ED%95%B4(5).mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    방정식과 부등식
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="1강 - 복소수(1)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/QsfgmRSr/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/1%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%B3%B5%EC%86%8C%EC%88%98(1).mp4"
                />
                <Compo
                  title="2강 - 복소수(2)"
                  time="41분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/76fj39xl/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/2%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%B3%B5%EC%86%8C%EC%88%98(2).mp4"
                />
                <Compo
                  title="3강 - 복소수(3)"
                  time="48분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/g7t3mPWV/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/3%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%B3%B5%EC%86%8C%EC%88%98(3).mp4"
                />
                <Compo
                  title="4강 - 복소수(4)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/LZh87XcN/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/4%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%B3%B5%EC%86%8C%EC%88%98(4).mp4"
                />
                <Compo
                  title="5강 - 복소수(5)/이차방정식(1)"
                  time="38분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/MGTy5jqB/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/5%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%B3%B5%EC%86%8C%EC%88%98(5)%20%7C%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(1).mp4"
                />
                <Compo
                  title="6강 - 이차방정식(2)"
                  time="53분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/UJrPbOp6/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/6%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(2).mp4"
                />
                <Compo
                  title="7강 - 이차방정식(3)"
                  time="52분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/XCCrBXv7/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/7%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(3).mp4"
                />
                <Compo
                  title="8강 - 이차방정식(4)"
                  time="48분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/iFk9t6mh/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/8%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(4).mp4"
                />
                <Compo
                  title="9강 - 이차방정식(5)"
                  time="44분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/5BelKyOo/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/9%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(5).mp4"
                />
                <Compo
                  title="10강 - 이차방정식(6)"
                  time="44분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/QHOfXqeJ/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/10%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(6).mp4"
                />
                <Compo
                  title="11강 - 이차방정식(7)"
                  time="39분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/xw7VFkWs/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/11%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(7).mp4"
                />
                <Compo
                  title="12강 - 이차방정식과 이차함수(1)"
                  time="51분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/WJKaWOAl/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/12%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%9D%B4%EC%B0%A8%ED%95%A8%EC%88%98(1).mp4"
                />
                <Compo
                  title="13강 - 이차방정식과 이차함수(2)"
                  time="42분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/W2hX0lYF/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/13%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%9D%B4%EC%B0%A8%ED%95%A8%EC%88%98(2).mp4"
                />
                <Compo
                  title="14강 - 이차방정식과 이차함수(3)"
                  time="50분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/oo63tg3r/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/14%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%9D%B4%EC%B0%A8%ED%95%A8%EC%88%98(3).mp4"
                />
                <Compo
                  title="15강 - 이차방정식과 이차함수(4)"
                  time="38분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/VwPIE8kW/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/15%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%9D%B4%EC%B0%A8%ED%95%A8%EC%88%98(4).mp4"
                />
                <Compo
                  title="16강 - 이차방정식과 이차함수(5)"
                  time="40분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/D7CVKmEB/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/16%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%9D%B4%EC%B0%A8%ED%95%A8%EC%88%98(5).mp4"
                />
                <Compo
                  title="17강 - 이차방정식과 이차함수(6)/삼차방정식과 사차방정식(1)"
                  time="40분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/pX02je2F/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/17%E1%84%80%E1%85%A1%E1%86%BC%20%20-%20%EC%9D%B4%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%9D%B4%EC%B0%A8%ED%95%A8%EC%88%98(1)%20%7C%20%EC%82%BC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%82%AC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(1).mp4"
                />
                <Compo
                  title="18강 - 삼차방정식과 사차방정식(2)"
                  time="33분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/zespgBK-/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/18%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%82%BC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%82%AC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(2).mp4"
                />
                <Compo
                  title="19강 - 삼차방정식과 사차방정식(3)"
                  time="44분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/61A8Bq38/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/19%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%82%BC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%82%AC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(3).mp4"
                />
                <Compo
                  title="20강 - 삼차방정식과 사차방정식(4)"
                  time="35분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/9b4q7d0Z/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/20%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%82%BC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%82%AC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(4).mp4"
                />
                <Compo
                  title="21강 - 삼차방정식과 사차방정식(5)"
                  time="37분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/u-JLrQ73/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/21%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%82%BC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%82%AC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(5).mp4"
                />
                <Compo
                  title="22강 - 삼차방정식과 사차방정식(6)"
                  time="44분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/Vt4s6q1L/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/22%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%82%BC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%82%AC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(6).mp4"
                />
                <Compo
                  title="23강 - 삼차방정식과 사차방정식(7)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/gD9cupoA/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/23%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%82%BC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%82%AC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(7).mp4"
                />
                <Compo
                  title="24강 - 삼차방정식과 사차방정식(8)/연립방정식(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/4FE1dXs0/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/24%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%82%BC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D%EA%B3%BC%20%EC%82%AC%EC%B0%A8%EB%B0%A9%EC%A0%95%EC%8B%9D(8)%20%7C%20%EC%97%B0%EB%A6%BD%EB%B0%A9%EC%A0%95%EC%8B%9D(1).mp4"
                />
                <Compo
                  title="25강 - 연립방정식 (2)"
                  time="39분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/4DUOBH9X/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/25%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%B0%EB%A6%BD%EB%B0%A9%EC%A0%95%EC%8B%9D(2).mp4"
                />
                <Compo
                  title="26강 - 연립방정식 (3)"
                  time="43분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/ZW5fNpjN/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/26%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%B0%EB%A6%BD%EB%B0%A9%EC%A0%95%EC%8B%9D(3).mp4"
                />
                <Compo
                  title="27강 - 연립방정식 (4)"
                  time="30분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/H76jtYc6/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/27%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%B0%EB%A6%BD%EB%B0%A9%EC%A0%95%EC%8B%9D(4).mp4"
                />
                <Compo
                  title="28강 - 연립방정식 (5)"
                  time="36분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/zgnIQika/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/28%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%B0%EB%A6%BD%EB%B0%A9%EC%A0%95%EC%8B%9D(5).mp4"
                />
                <Compo
                  title="29강 - 여러 가지 부등식(1)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/OSx3kcjf/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/29%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%AC%EB%9F%AC%20%EA%B0%80%EC%A7%80%20%EB%B6%80%EB%93%B1%EC%8B%9D(1).mp4"
                />
                <Compo
                  title="30강 - 여러 가지 부등식(2)"
                  time="42분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/B79oxuXc/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/30%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%AC%EB%9F%AC%20%EA%B0%80%EC%A7%80%20%EB%B6%80%EB%93%B1%EC%8B%9D(2).mp4"
                />
                <Compo
                  title="31강 - 여러 가지 부등식(3)"
                  time="38분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/c3DR-Nfw/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/31%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%AC%EB%9F%AC%20%EA%B0%80%EC%A7%80%20%EB%B6%80%EB%93%B1%EC%8B%9D(3).mp4"
                />
                <Compo
                  title="32강 - 여러 가지 부등식(4)"
                  time="43분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/Wqkm0vx6/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/32%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%AC%EB%9F%AC%20%EA%B0%80%EC%A7%80%20%EB%B6%80%EB%93%B1%EC%8B%9D(4).mp4"
                />
                <Compo
                  title="33강 - 여러 가지 부등식(5)"
                  time="41분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/4Xrx6b04/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/33%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%AC%EB%9F%AC%20%EA%B0%80%EC%A7%80%20%EB%B6%80%EB%93%B1%EC%8B%9D(5).mp4"
                />
                <Compo
                  title="34강 - 여러 가지 부등식(6)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/raRBBgDb/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/34%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%AC%EB%9F%AC%20%EA%B0%80%EC%A7%80%20%EB%B6%80%EB%93%B1%EC%8B%9D(6).mp4"
                />
                <Compo
                  title="35강 - 여러 가지 부등식(7)"
                  time="38분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/DKAnGnkh/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/35%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%AC%EB%9F%AC%20%EA%B0%80%EC%A7%80%20%EB%B6%80%EB%93%B1%EC%8B%9D(7).mp4"
                />
                <Compo
                  title="36강 - 여러 가지 부등식(8)"
                  time="30분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/HAjuTGKR/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/2.%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%AA%20%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/36%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%97%AC%EB%9F%AC%20%EA%B0%80%EC%A7%80%20%EB%B6%80%EB%93%B1%EC%8B%9D(8).mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    도형의 방정식
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="1강 - 평면좌표(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/ApbiBt9r/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/1%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%8F%89%EB%A9%B4%EC%A2%8C%ED%91%9C(1).mp4"
                />
                <Compo
                  title="2강 - 평면좌표(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/Wei61cF0/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/2%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%8F%89%EB%A9%B4%EC%A2%8C%ED%91%9C(2).mp4"
                />
                <Compo
                  title="3강 - 평면좌표(3)"
                  time="40분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/rlBvZwH9/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/3%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%8F%89%EB%A9%B4%EC%A2%8C%ED%91%9C(3).mp4"
                />
                <Compo
                  title="4강 - 평면좌표(4)"
                  time="40분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/EIywX23A/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/4%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%8F%89%EB%A9%B4%EC%A2%8C%ED%91%9C(4).mp4"
                />
                <Compo
                  title="5강 - 직선의 방정식(1)"
                  time="42분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/9JkdaPJ1/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/5%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%81%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(1).mp4"
                />
                <Compo
                  title="6강 - 직선의 방정식(2)"
                  time="36분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/neNnVUY6/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/6%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%81%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(2).mp4"
                />
                <Compo
                  title="7강 - 직선의 방정식(3)"
                  time="44분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/U7TybKmN/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/7%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%81%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(3).mp4"
                />
                <Compo
                  title="8강 - 직선의 방정식(4)"
                  time="34분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/uQBD7ffN/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/8%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%81%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(4).mp4"
                />
                <Compo
                  title="9강 - 직선의 방정식(5)"
                  time="46분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/fmU15l1x/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/9%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%81%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(5).mp4"
                />
                <Compo
                  title="10강 - 직선의 방정식(6)"
                  time="37분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/_bB6ZFik/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/10%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%81%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(6).mp4"
                />
                <Compo
                  title="11강 - 직선의 방정식(7)"
                  time="44분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/Zd5ochGT/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/11%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%81%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(7).mp4"
                />
                <Compo
                  title="12강 - 원의 방정식(1)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/uAms4mVx/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/12%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9B%90%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(1).mp4"
                />
                <Compo
                  title="13강 - 원의 방정식(2)"
                  time="44분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/feLAorck/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/13%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9B%90%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(2).mp4"
                />
                <Compo
                  title="14강 - 원의 방정식(3)"
                  time="40분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/6xivl0Gy/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/14%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9B%90%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(3).mp4"
                />
                <Compo
                  title="15강 - 원의 방정식(4)"
                  time="38분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/qsvyQmck/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/15%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9B%90%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(4).mp4"
                />
                <Compo
                  title="16강 - 원의 방정식(5)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/niWjlFSo/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/16%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9B%90%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(5).mp4"
                />
                <Compo
                  title="17강 - 원의 방정식(6)"
                  time="44분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/BPZNrlPA/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/17%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9B%90%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(6).mp4"
                />
                <Compo
                  title="18강 - 원의 방정식(7)"
                  time="32분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/10Tiz3rP/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/18%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9B%90%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(7).mp4"
                />
                <Compo
                  title="19강 - 도형의 이동(1)"
                  time="39분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/KZpKk8Fk/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/19%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%98%95%EC%9D%98%20%EC%9D%B4%EB%8F%99(1).mp4"
                />
                <Compo
                  title="20강 - 도형의 이동(2)"
                  time="40분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/-n4i3HcF/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/20%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%98%95%EC%9D%98%20%EC%9D%B4%EB%8F%99(2).mp4"
                />
                <Compo
                  title="21강 - 도형의 이동(3)"
                  time="25분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/87dciyK5/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/21%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%98%95%EC%9D%98%20%EC%9D%B4%EB%8F%99(3).mp4"
                />
                <Compo
                  title="22강 - 도형의 이동(4)"
                  time="51분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/AIcOzXgy/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/22%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%98%95%EC%9D%98%20%EC%9D%B4%EB%8F%99(4).mp4"
                />
                <Compo
                  title="23강 - 도형의 이동(5)"
                  time="24분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/-Iyax85a/%E1%84%89%E1%85%AE(%E1%84%89%E1%85%A1%E1%86%BC)/3.%20%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/23%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%98%95%EC%9D%98%20%EC%9D%B4%EB%8F%99(5).mp4"
                />
              </tbody>
            </table>
            {/** */}
          </div>
        </div>
      </div>
    </section>
  );
}
