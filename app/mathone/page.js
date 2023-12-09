import Link from "next/link";
import Compo from "./compo";
import Image from "next/image";

export default function Mathone() {
  return (
    <section window class=" p-3 sm:-5 translate-y-20 ">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <h1 className=" text-3xl font-bold -translate-y-6">Course</h1>
        <h1 className=" text-gray-400 text-xl font-bold -translate-y-6">
          수학의 바이블 수1
        </h1>
        <div class="bg-white  relative shadow-2xl sm:rounded-lg overflow-hidden rounded-xl">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div class="flex items-center space-x-3 w-full md:w-auto">
                {/*
          <h1 className="text-white text-3xl">수학의 바이블 수1</h1>
          <Link className="flex text-white" href="http://sjh0623.iptime.org:14131/api/public/dl/A914ukWa/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%20I.pdf" download="수학의 바이블 수I">

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
                    지수
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="1강 - 지수(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/kPkNNkvH/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/1%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98(1).mp4"
                />
                <Compo
                  title="2강 - 지수(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/qVdmV97l/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/2%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98(2).mp4"
                />
                <Compo
                  title="3강 - 지수(3)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/lRLq2o6x/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/3%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98(3).mp4"
                />
                <Compo
                  title="4강 - 지수 기본다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/MFBVMCll/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/4%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="5강 - 지수 실력다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/0ja6ar2O/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/5%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    로그
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="6강 - 로그(1)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/yb4wG_0D/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/6%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%A1%9C%EA%B7%B8(1).mp4"
                />
                <Compo
                  title="7강 - 로그(2)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/6mpNkxC8/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/7%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%A1%9C%EA%B7%B8(2).mp4"
                />
                <Compo
                  title="8강 - 상용로그(1)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/RKYCfBld/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/8%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%83%81%EC%9A%A9%EB%A1%9C%EA%B7%B8(1).mp4"
                />
                <Compo
                  title="9강 - 상용로그(2)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/kgNIV5c3/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/9%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%83%81%EC%9A%A9%EB%A1%9C%EA%B7%B8(2).mp4"
                />
                <Compo
                  title="10강 - 상용로그(3)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/q3427TLc/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/10%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%83%81%EC%9A%A9%EB%A1%9C%EA%B7%B8(3).mp4"
                />
                <Compo
                  title="11강 - 로그 기본다지기"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/3k9AEHku/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/11%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%A1%9C%EA%B7%B8%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="12강 - 로그 실력다지기(1)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/xE76oK71/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/12%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%A1%9C%EA%B7%B8%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0(1).mp4"
                />
                <Compo
                  title="13강 - 로그 실력다지기(2)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/fKbd-4-S/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/13%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%A1%9C%EA%B7%B8%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0(2).mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    지수함수
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="14강 - 지수함수(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/JOg7zYTi/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/14%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%ED%95%A8%EC%88%98(1).mp4"
                />
                <Compo
                  title="15강 - 지수함수(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/Z5Gx46cl/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/15%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%ED%95%A8%EC%88%98(2).mp4"
                />
                <Compo
                  title="16강 - 지수함수(3)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/_AMXfsGM/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/16%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%ED%95%A8%EC%88%98(3).mp4"
                />
                <Compo
                  title="17강 - 지수함수(4)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/YdEl2DOB/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/17%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%ED%95%A8%EC%88%98(4).mp4"
                />
                <Compo
                  title="18강 - 지수함수(5)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/8sprZtDG/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/18%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%ED%95%A8%EC%88%98(5).mp4"
                />
                <Compo
                  title="19강 - 지수함수(6)+기본다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/q6sIvz1l/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/19%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%ED%95%A8%EC%88%98(6)%20%7C%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4
                  "
                />
                <Compo
                  title="20강 - 지수함수 실력다지기(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/w3pA4E1p/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/20%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%ED%95%A8%EC%88%98%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0(1).mp4
                  "
                />
                <Compo
                  title="21강 - 지수함수 실력다지기(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/MhUMGGhe/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/21%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%80%EC%88%98%ED%95%A8%EC%88%98%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0(2).mp4
                  "
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    로그함수
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="22강 - 로그함수(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/goiq3CB8/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/22%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%A1%9C%EA%B7%B8%ED%95%A8%EC%88%98(1).mp4"
                />
                <Compo
                  title="23강 - 로그함수(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/-0jbesEo/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/23%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%A1%9C%EA%B7%B8%ED%95%A8%EC%88%98(2).mp4"
                />
                <Compo
                  title="24강 - 로그함수(3)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/KKu0Sa4W/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/24%EA%B0%95%20-%20%EB%A1%9C%EA%B7%B8%ED%95%A8%EC%88%98(3).mp4"
                />
                <Compo
                  title="25강 - 로그함수(4)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/K-g6v7Bj/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/25%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%A1%9C%EA%B7%B8%ED%95%A8%EC%88%98(4).mp4"
                />
                <Compo
                  title="26강 - 로그함수(5)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/TZkeMNBs/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/26%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%A1%9C%EA%B7%B8%ED%95%A8%EC%88%98(5).mp4"
                />
                <Compo
                  title="27강 - 로그함수 기본다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/L_P5nwKW/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/27%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4"
                />
                <Compo
                  title="28강 - 로그함수 실력다지기(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/cNpI-0Vc/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/28%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5(1).mp4
                  "
                />
                <Compo
                  title="29강 - 로그함수 실력다지기(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/9CHYcz7Y/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/29%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5(2).mp4
                  "
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    로그 방정식 / 부등식
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="30강 - 로그 방정식(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/L3Uw4wUE/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/30%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8(1).mp4"
                />
                <Compo
                  title="31강 - 로그 방정식&부등식(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/It9OVCxB/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/31%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%26%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8(2).mp4
                  "
                />
                <Compo
                  title="32강 - 로그 방정식&부등식(3)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/_vhTDByw/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/32%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%26%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8(2).mp4
                  "
                />
                <Compo
                  title="33강 - 로그 방정식&부등식(4)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/sHdknPw_/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/33%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%26%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8(3).mp4
                  "
                />
                <Compo
                  title="34강 - 로그 방정식&부등식 기본다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/wHq2GN_m/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/34%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%26%E1%84%87%E1%85%AE%E1%84%83%E1%85%B3%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4
                  "
                />
                <Compo
                  title="35강 - 로그 방정식 기본다지기+실력다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/5CrRNUQr/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/35%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5%2B%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4
                  "
                />
                <Compo
                  title="36강 - 로그 방정식 실력다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/YVDzLFDl/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/36%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4
                  "
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    삼각함수
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="37강 - 삼각함수(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/N7yufXht/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/37%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE(1)%20.mp4"
                />
                <Compo
                  title="38강 - 삼각함수(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/FDB2eog0/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/38%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE(2).mp4"
                />
                <Compo
                  title="39강 - 삼각함수(3)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/P2ip-q2A/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/39%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE(3).mp4"
                />
                <Compo
                  title="40강 - 삼각함수(4)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/aBkrNBm5/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/40%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE(4).mp4"
                />
                <Compo
                  title="41강 - 삼각함수 기본다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/HtqWvOmA/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/41%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4"
                />
                <Compo
                  title="42강 - 삼각함수 실력다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/Kfau2xGK/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/42%E1%84%80%E1%85%A1%E1%86%BC%20-%20%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    삼각함수 그래프 / 활용
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="43강 - 삼각함수 그래프(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/c_pDrtGD/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/43%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3(1).mp4"
                />
                <Compo
                  title="44강 - 삼각함수 그래프(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/m0kVx_1F/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/44%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3(2).mp4.mp4"
                />
                <Compo
                  title="45강 - 삼각함수 그래프(3)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/Z5pdc40u/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/45%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3(3).mp4.mp4"
                />
                <Compo
                  title="46강 - 삼각함수 그래프(4)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/1ILqjurx/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/46%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3(4).mp4.mp4"
                />
                <Compo
                  title="47강 - 삼각함수 그래프 기본다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/oWcSz49G/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/47%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4"
                />
                <Compo
                  title="48강 - 삼각함수 그래프 실력다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/PjDlshHY/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/48%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%20%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4"
                />
                <Compo
                  title="49강 - 삼각함수 활용 (1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/OFYdHTCP/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/49%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC(1).mp4"
                />
                <Compo title="50강 - 삼각함수 활용 (2)" time="45분" link="http://sjh0623.iptime.org:14131/api/public/dl/Hq401WSw/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/50%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC(2).mp4" />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    사인법칙 코사인법칙
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo title="51강 - 사인법칙 코사인법칙" time="45분" link="http://sjh0623.iptime.org:14131/api/public/dl/j0flnFxI/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/51%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%B5%E1%86%A8%20%E1%84%8F%E1%85%A9%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%B5%E1%86%A8(3).mp4" />
                <Compo
                  title="52강 사인법칙 코사인법칙 기본다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/kQnUGEqK/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/52%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%B5%E1%86%A8%20%E1%84%8F%E1%85%A9%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%B5%E1%86%A8%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4"
                />
                <Compo
                  title="53강 사인법칙 코사인법칙 실력다지기(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/xdsGxA1q/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/53%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%B5%E1%86%A8%20%E1%84%8F%E1%85%A9%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%B5%E1%86%A8%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%20%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5(1).mp4"
                />
                <Compo
                  title="54강 사인법칙 코사인법칙 실력다지기(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/cmELnOdq/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/54%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%B5%E1%86%A8%20%E1%84%8F%E1%85%A9%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%B5%E1%86%A8%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%20%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5(2).mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    등차수열
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo title="55강 - 등차수열(1)" time="45분" link="http://sjh0623.iptime.org:14131/api/public/dl/Q6esLt1Y/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/55%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%83%E1%85%B3%E1%86%BC%E1%84%8E%E1%85%A1%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A7%E1%86%AF(1).mp4" />
                <Compo title="56강 - 등차수열(2)" time="45분" link="http://sjh0623.iptime.org:14131/api/public/dl/9Y7HGINH/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/56%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%83%E1%85%B3%E1%86%BC%E1%84%8E%E1%85%A1%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A7%E1%86%AF(2).mp4" />
                <Compo title="57강 - 등차수열(3)" time="45분" link="http://sjh0623.iptime.org:14131/api/public/dl/kLRsNSWj/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/57%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%83%E1%85%B3%E1%86%BC%E1%84%8E%E1%85%A1%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A7%E1%86%AF(3).mp4" />
                <Compo title="58강 - 등차수열 기본다지기" time="45분" link="http://sjh0623.iptime.org:14131/api/public/dl/bjgZ6jTD/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/58%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%83%E1%85%B3%E1%86%BC%E1%84%8E%E1%85%A1%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A7%E1%86%AF%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5.mp4" />
                <Compo
                  title="59강 - 등차수열 실력다지기(1)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/cv7IjCY2/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/59%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%83%E1%85%B3%E1%86%BC%E1%84%8E%E1%85%A1%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A7%E1%86%AF%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%20%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5(1).mp4"
                />
                <Compo
                  title="60강 - 등차수열 실력다지기(2)"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/kaOiJLyG/%E1%84%89%E1%85%AE1_%EB%AF%B8%EC%99%84/60%E1%84%80%E1%85%A1%E1%86%BC-%E1%84%83%E1%85%B3%E1%86%BC%E1%84%8E%E1%85%A1%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A7%E1%86%AF%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8%20%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5(2).mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    등비수열
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo title="61강 - 등비수열(1)" time="45분" link="" />
                <Compo title="62강 - 등비수열(2)" time="45분" link="" />
                <Compo title="63강 - 등비수열(3)" time="45분" link="" />
                <Compo
                  title="64강 - 등비수열 기본다지기+실력다지기(1)"
                  time="45분"
                  link=""
                />
                <Compo
                  title="65강 - 등비수열 실력다지기(2)"
                  time="45분"
                  link=""
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    여러가지 수열
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo title="66강 - 여러가지 수열(1)" time="45분" link="" />
                <Compo title="67강 - 여러가지 수열(2)" time="45분" link="" />
                <Compo title="68강 - 여러가지 수열(3)" time="45분" link="" />
                <Compo title="69강 - 여러가지 수열(4)" time="45분" link="" />
                <Compo
                  title="70강 - 여러가지 수열 기본다지기"
                  time="45분"
                  link=""
                />
                <Compo
                  title="71강 - 여러가지 수열 실력다지기(1)"
                  time="45분"
                  link=""
                />
                <Compo
                  title="72강 - 여러가지 수열 실력다지기(2)"
                  time="45분"
                  link=""
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    수열의 귀납적 정의
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="73강 - 수열의 귀납적 정의(1)"
                  time="45분"
                  link=""
                />
                <Compo
                  title="74강 - 수열의 귀납적 정의(2)"
                  time="45분"
                  link=""
                />
                <Compo
                  title="75강 - 수열의 귀납적 정의(3)"
                  time="45분"
                  link=""
                />
                <Compo title="76강 - 수학적 귀납법(4)" time="45분" link="" />
                <Compo
                  title="77강 - 수학적 귀납법 기본다지기"
                  time="45분"
                  link=""
                />
                <Compo
                  title="78강 - 수학적 귀납법 실력다지기"
                  time="45분"
                  link=""
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

///////////////////////////////////
